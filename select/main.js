function js_onload_code (){
    fetch(`https://fakestoreapi.com/products `)
    .then((response) => response.json())
    .then(photos => console.log(photos))

    // fetch(`https://fakestoreapi.com/products `)
    // .then((response) => response.json())
    // .then(photos => 
    //   photos.forEach(element => {
    //   var col=document.createElement("div")
    //   col.setAttribute("class","col-md-3")
    
    //    var card=document.createElement("div")
    //    card.setAttribute("class","card")
    
    //    var img=document.createElement("img")
    //    img.setAttribute("class","card-img-top")
    // img.setAttribute("src",element.url)
    
    //  var cardbody=document.createElement("div")
    //     cardbody.setAttribute("class","card-body")
    
    //     var cardtitle=document.createElement("h5")
    //     cardtitle.setAttribute("class","card-title")
    
    //     var cardtext=document.createElement("class","p")
    //     cardtext.setAttribute("class","card-text ")
    
    //     col.append(card);
    //     card.append(img);
    //     card.append(cardbody);
    //     cardbody.append(cardtitle);
    //     cardbody.append(cardtext);
    //  document.querySelector(".row").append(col)
    //   }));

}
window.onload= js_onload_code ();