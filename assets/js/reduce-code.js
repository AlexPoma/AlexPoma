function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

readTextFile("assets/json/codding_skills.json", function(text){

    var cod_skills = JSON.parse(text);
    let output = '';

    for (var lang in cod_skills){
      output += `
                <div class="item">
                    <div class="item-inner">
                        <div class="source-profile">
                            <div class="Ligth">
                                <img src="${cod_skills[lang]['Ligth']}" alt="image" />
                            </div>
                            <div class="Dark">
                                <img src="${cod_skills[lang]['Dark']}" alt="image" />
                            </div>
                        </div>
                        <div class="name">${lang}</div>
                    </div>
                </div>      
                `
    }
    // document.querySelector('.codding_skills_js').innerHTML = output
}); //Cierre JSon