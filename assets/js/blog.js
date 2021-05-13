fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alexpoma')/*@KonradDaWo')*/
    .then((res) => res.json())
    .then((data) => {
        // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
        const res = data.items //This is an array with the content. No feed, no info about author etc..
        // console.log(res);
        const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
        // console.log(posts);

        // Functions to create a short text out of whole blog's content
        function toText(node) {
            let tag = document.createElement('div')
            tag.innerHTML = node
            node = tag.innerText
            return node
        }
        function shortenText(text, startingPoint, maxLength) {
            return text.length > maxLength ?
                text.slice(startingPoint, maxLength) :
                text
        }

        // Put things in right spots of markup
        let output = '';
        
        posts.forEach((item) => {
            
            let tags_list_prev = ''

            item.categories.forEach(element => 
                tags_list_prev += `${element}, `
                );

            const words = tags_list_prev.substring(0,tags_list_prev.length-2).split(" ");
            
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            // words.join(" ");
            
            const tags_txt = words.join(" ").split("-");
            
            for (let i = 0; i < tags_txt.length; i++) {
                tags_txt[i] = tags_txt[i][0].toUpperCase() + tags_txt[i].substr(1);
            }
            let tags_list = tags_txt.join("-");

            output += `
            <article class="post">

                <div class="post-header">
                    <h2 class="post-title"><a href="${item.link}" target="_blank">${item.title}</a></h2>
                    <ul class="post-meta">
                        <li><i class="far fa-calendar-minus"></i> ${shortenText(item.pubDate, 0, 10)}</li>
                        <li><i class="fas fa-tags"></i> ${tags_list}</li>
                        </li>
                    </ul>
                </div>

                <div class="post-preview">
                    <a href="${item.link}"><img src="${item.thumbnail}" alt="" class="img-fluid rounded"></a>
                </div>

                <div class="post-content">
                    <p>${item.content.split("</p>")[0].split("<p>")[1]}</p>
                </div>

                <div><a href="${item.link}" class="btn btn-outline-custom">Read More <i class="mdi mdi-arrow-right"></i></a></div>

            </article>`

            // `
            // <li class="blog__post">
            // <img src="${item.thumbnail}" class="blog__topImg"></img>
            // <div class="blog__content">
            //     <div class="blog_preview">
            //         <a href="${item.link}" target="_blank">
            //             <h2 class="blog__title">${item.title}</h2>
            //         <a/>
            //             <p class="blog__intro">${item.content.split("</p>")[0].split("<p>")[1]}</p>
            //         </div>
            //         <!-- <hr> -->
            //         <div class="blog__info">
            //             <span class="blog__author">${item.author}</span>
            //             <span class="blog__date">${shortenText(item.pubDate, 0, 10)}</span>
            //         </div>
            //     </div>
            // </li>`

            // console.log(item.title);

            // `
            // <li class="blog__post">
            //     <a href="${item.link}">
            //     <img src="${item.thumbnail}" class="blog__topImg"></img>
            //     <div class="blog__content">
            //         <div class="blog_preview">
            //             <h2 class="blog__title">${shortenText(item.title, 0, 30) + '...'}</h2>
            //             <p class="blog__intro">${'...' + shortenText(toText(item.content), 60, 300) + '...'}</p>
            //         </div>
            //         <hr>
            //         <div class="blog__info">
            //             <span class="blog__author">${item.author}</span>
            //             <span class="blog__date">${shortenText(item.pubDate, 0, 10)}</span>
            //         </div>
            //     </div>
            //     <a/>
            // </li>`

        })

        console.log(output);

        document.querySelector('.blog__slider').innerHTML = output
    })
