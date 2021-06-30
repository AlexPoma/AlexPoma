fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alexpoma')
    .then((res) => res.json())
    .then((data) => {

        const res = data.items
        // console.log(res);
        const posts = res.filter(item => item.categories.length > 0)
        // console.log(posts);

        // function toText(node) {
        //     let tag = document.createElement('div')
        //     tag.innerHTML = node
        //     node = tag.innerText
        //     return node
        // }
        function shortenText(text, startingPoint, maxLength) {
            return text.length > maxLength ?
                text.slice(startingPoint, maxLength) :
                text
        }

        let output = '';
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        posts.forEach((item) => {

            let tags_list_prev = ''

            item.categories.forEach(element =>
                tags_list_prev += `${element}, `
            );

            const words = tags_list_prev.substring(0, tags_list_prev.length - 2).replaceAll("-", " ").split(" ");

            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }

            let tags_list = words.join(" ");

            output += `
            <article class="post">

                <div class="post-header">
                    <h2 class="post-title"><a href="${item.link}" target="_blank">${item.title}</a></h2>
                    <ul class="post-meta">
                        <li><i class="far fa-calendar-minus"></i> ${monthNames[parseInt(shortenText(item.pubDate, 5, 7)) - 1]} ${shortenText(item.pubDate, 8, 10)}, ${shortenText(item.pubDate, 0, 4)}</li>
                        <li><i class="fas fa-tags"></i> ${tags_list}</li>
                        </li>
                    </ul>
                </div>

                <div class="post-preview">
                    <a href="${item.link}" target="_blank"><img class="img-fluid rounded" src="${item.thumbnail}" alt=""></a>
                </div>

                <div class="post-content">
                    <p>${item.content.split("</p>")[0].split("<p>")[1]}</p>
                </div>

                <div><a href="${item.link}" target="_blank" class="btn btn-outline-custom"><span class="lang" key="blog_read_more">Read More</span><i class="fas fa-angle-double-right"></i></a></div>

            </article>`

        })
        // console.log(output);

        document.querySelector('.blog__slider').innerHTML = output
    })
