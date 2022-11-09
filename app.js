var btn=document.querySelector(".btn")
var errormessage=document.querySelectorAll("error");
var myForm=document.querySelector("form");
var ad=document.querySelector("input[name='ad']");
var soyad=document.querySelector("input[name='soyad']");
var atad=document.querySelector("input[name='atad']");
var checkcountry=document.querySelector("input[name='checkcountry']");
var country=document.querySelector("input[name='country']");
var hiddendiv=document.querySelector(".hidden");
var city=document.querySelector(".city");
var address=document.querySelector("input[name='address']");
var phone=document.querySelector("input[name='phone']");
var mail=document.querySelector("input[name='email']");
var age=document.querySelector("input[name='age']");
var gender=document.querySelectorAll("input[name='gen']");
var selectinput=document.getElementById("inputSt");
var offer=document.querySelector("input[name='offer']");
var theme=document.querySelector("select[name='selectheme']");
var area=document.getElementById("txt");
var agree=document.querySelector("input[name='agree']");
var count=document.getElementById("counter")
var cityinput=document.querySelector("input[name='cityinput']")
var inputhidden=document.getElementById("inputState")





agree.addEventListener("click",function(){
    
    if(this.checked){
        btn.removeAttribute("disabled", true)
    }
    else{
btn.setAttribute("disabled",true)
    }

})

myForm.addEventListener("submit",function(e){
    e.preventDefault();

    if(area.length==0){
        area.nextElementSibling.style.display="block"
    }
    
    

    checkall(ad)
checkall(soyad)
checkall(atad)
checkall(address)
checkall(phone)
checkall(mail)
checkall(age)
checkprevious(cityinput)

select(inputhidden)
select(selectinput)
select(theme)

if(area.maxLength==500){
    area.nextElementSibling.style.display="block"
 }

else{
    area.nextElementSibling.style.display="none"  
}

})
function select(option){
    if(option.value=="--Siyahıdan Seçin--"){
        option.previousElementSibling.style.display="block"
       }
       else{
        option.previousElementSibling.style.display="none"
       }
}
function check(){
    if(checkcountry.checked ){
        hiddendiv.style.display="block"
        country.style.display="none"
        city.style.display="none"
    }
    else{
        hiddendiv.style.display="none";
        country.style.display="block"
        city.style.display="block"
    }
}
checkcountry.addEventListener("click", check);



function checkall(item){
    if(item.value=="" || item.value==null){

        item.nextElementSibling.style.display="block";
    }
    else{
        item.nextElementSibling.style.display="none";  

    }
}

function checkprevious(element){
    if(element.value=="" || item.value==null){

        element.previousElementSibling.style.display="block";
    }
}


function txtarea(){

    counter.innerText=area.maxLength-area.value.length
}


txtarea()


area.addEventListener("keyup",txtarea)












// function checkall(item){
//     if(item.value=="" || item.value==null){
// item.nextElementSibling.style.color="red";
//         item.nextElementSibling.innerText="bu sahe dolmalidi";
//     }
//     else{
//         item.nextElementSibling.innerText="";

//     }
// }