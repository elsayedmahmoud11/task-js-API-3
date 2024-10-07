(async function getApi(){
    var ahmed = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var mohamed = await ahmed.json;
    var element = mohamed.recipes;
    var myText =""
    for(var i=0; i<element.lenght; i++){
        var cartoona =  `<div class="col-md-4 text-center mb-4">
                            <img src="${element[i].image_url}" style="height:350px" class="img-fluid">
                            <h4>${element[i].title}</h4>
                            <h6>${element[i].publisher}</h6>
                         </div>
                         `
            myText = myText+cartoona;
    }
    document.querySelector(".test").innerHTML=cartoona;
})()