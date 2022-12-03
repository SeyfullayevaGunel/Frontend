var s = document.getElementById("main");
var area=document.getElementById("area")


s.addEventListener ("change",function(){
    var value = s.value;
  
var text=s.options[s.selectedIndex].text;

var p=document.createElement("p")
area.append(p)
p.style.display="block"

p.style.paddding="10px"

p.style.display="inline-block"
p.innerText=text
area.style.display="block"
s.remove(s.selectedIndex)
var X=document.createElement("span")
X.innerText="X"
X.style.display="inline-block"
X.style.margin="0,10px"
X.style.padding="0,30px"
X.style.background="red"
area.appendChild(X)

X.addEventListener("click", function(){
    p.innerText=" "
    X.innerText=" "
})


})