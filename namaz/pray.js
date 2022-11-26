var dataCity=document.getElementById("dataCity");

//  dataCity.addEventListener("change", async function(){
//    var country=this.options[this.selectedIndex].text;
//  var link=`https://api.aladhan.com/v1/timingsByCity?city=${this.value}&country=${country}&method=8`;
//  var apply=await fetch(link);
//   var objectJson=await apply.json();
//   console.log(objectJson)
//  var timings=objectJson.data.timings;  console.log(timings) 
//  document.getElementById("Imsak").innerText=timings.Imsak
//  document.getElementById("subh").innerText=timings.Sunrise
//   document.getElementById("zohr").innerText=timings.Dhuhr
//      document.getElementById("Asr").innerText=timings.Asr     //  document.getElementById("Maghrib").innerText=timings.Maghrib
//      document.getElementById("Isha").innerText=timings.Isha
//   })

 var date=document.getElementById("myDate")
 var asr=document.getElementById("Asr")
 date.addEventListener("change", function(){
    var input=date.value;
   const d= new Date(date.value);
   let day=d.getDate(date.value);
  let month=d.getMonth()+1;
  let year=d.getFullYear();
  

fetch (`http://api.aladhan.com/v1/calendarByCity?city=${dataCity.value}&country=${dataCity.options[dataCity.selectedIndex].text}&method=2&month=${month}&year=${year} `)
.then(response => response.json())

.then((post)=>{
    console.log(post.data)
    var time=post.data[day-1].timings
    document.getElementById("Imsak").innerText=time.Imsak
    document.getElementById("subh").innerText=time.Sunrise
    document.getElementById("zohr").innerText=time.Dhuhr
    document.getElementById("Asr").innerText=time.Asr
    document.getElementById("Maghrib").innerText=time.Maghrib
    document.getElementById("Isha").innerText=time.Isha
})
// .then(post=>console.log(post.data[day-1].timings))






  })