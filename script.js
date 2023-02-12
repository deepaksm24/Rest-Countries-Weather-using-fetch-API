
let cname = document.querySelectorAll("#name");

let Capital = document.querySelectorAll("#Capital");
let Region = document.querySelectorAll("#Region");
let LatIng = document.querySelectorAll("#LatIng");
let CountryCode = document.querySelectorAll("#CountryCode");

let flag = document.querySelectorAll("#flag");

let button1 = document.querySelector("#button1");

let button2 = document.querySelector("#button2");

let button3 = document.querySelector("#button3");


let search = document.querySelector("#search");


const form  = document.getElementById('form');

let country;

let initial =5;


async function f() {
 try{
   const response = await fetch("https://restcountries.com/v3.1/all");
   let users = await response.json();
   //console.log(users);
   return users;
  }catch(err){
    console.error(err); 
  }
}
  
form.addEventListener('submit', (event) => {
   

  event.preventDefault();

  let fname= document.querySelector('#first-name');

 country = fname.value;


 f().then(m => {


//console.log(country);

let A = country.split(" ");

let finalname=[];
A.forEach(element => {
 let k = element.split("");
k[0] = k[0].toUpperCase();

for(let i=1;i<k.length;i++)
k[i] = k[i].toLowerCase();

finalname.push(k.join(""));
});

let finalnameofcountry = finalname.join(" ");

// console.log(finalnameofcountry);

let k=0;
let index;



try{
m.forEach(element => {

if(element.name.common ==`${finalnameofcountry}`)
{
index = k;
}

k++;
});
}catch(err){
  alert("hi");
}




console.log(index);
if(index == undefined)
{
  alert("Type Correct name of Country eg:India bangladesh nepal");
  location.reload();

}
let zz =index;

cname.forEach(element => {
        
        
  element.innerText = m[zz++].name.common;    
});

zz =index;

    Capital.forEach(element => {
        
        
        element.innerText = `Capital: ${m[zz++].capital}`;
           
    });

    zz =index;

    Region.forEach(element => {
        
        
        element.innerText = `Region: ${m[zz++].region}`;   
    });
   
    zz =index;

    LatIng.forEach(element => {
        
    
         element.innerText = `Latitude: ${m[zz].latlng[0]} Longitude: ${m[zz].latlng[1]}`;
         zz++;    
    });

    zz =index;

    CountryCode.forEach(element => {
         element.innerText = `Country Code: ${m[zz++].cca3}`;
    });

    zz =index;

    flag.forEach(element => {
         element.src = m[zz++].flags.svg;
    });


function removeAllChildNodes(parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
  }

  const container1 = document.querySelector('#buttonreplace1');
  const container2 = document.querySelector('#buttonreplace2');
  const container3 = document.querySelector('#buttonreplace3');

let data2 = document.querySelector('#col2');
let data3 = document.querySelector('#col3');

removeAllChildNodes(data2);
removeAllChildNodes(data3);

  removeAllChildNodes(container1);
  // removeAllChildNodes(container2);
  // removeAllChildNodes(container3);


  var a = document.createElement('button'); 
  
  a.classList.add('btn', 'btn-primary');
  a.setAttribute('id', 'buttonfind');
  a.textContent = 'Click for Weather';

 

 

  let v1 =document.querySelector(`#buttonreplace1`);
 
   v1.appendChild(a);

  

   let buttonfind = document.querySelector("#buttonfind");

  //  console.log(v1);
  //  console.log(buttonfind);

  buttonfind.addEventListener("click",  function() {



    let v = LatIng[0].innerText.split(":");


    let longi = Number(v[2]);
    let lat = Number(v[1].split(" ")[1]);

   
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=b26908f93a7022be17cccebba5ef3f65`).then(res => {
      return res.json();
 }).then(function(res) {
    console.log(res);



    let v= document.querySelector(`#buttonfind`);
    let v1 =document.querySelector(`#buttonreplace1`);
    



  let temp = ((res.main.temp) - 273.15).toFixed(2);
  let humi = res.main.humidity;

    const para = document.createElement("p");  //for temp
    let deg = String.fromCodePoint(8451);
    para.innerText = `Temperature: ${temp} ${deg}`;




    let icon = (res.weather[0].icon);


    const para2 = document.createElement("p");  //for humidity
         para2.innerText = `Humidity: ${humi}%`;
    
let descrip = (res.weather[0].description);



const para1 = document.createElement("p");  //for weather description
para1.innerText = descrip;

         var x = document.createElement("IMG");
         x.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);


   

   v.remove();

   v1.appendChild(para1);
   v1.appendChild(x);
   v1.appendChild(para);
   v1.appendChild(para2);





  })


    
   

    // console.log("inside");
    // console.log(longi,lat);
    
    });







  
 });








})









f().then(m => {


    let i = 0;

    cname.forEach(element => {
        
        
        element.innerText = m[i++].name.common;    
    });

i= 0;
    Capital.forEach(element => {
        
        
        element.innerText = `Capital: ${m[i++].capital}`;   
    });

    i= 0;

    Region.forEach(element => {
        
        
        element.innerText = `Region: ${m[i++].region}`;   
    });
    i= 0;

    LatIng.forEach(element => {
        
    
         element.innerText = `Latitude: ${m[i].latlng[0]} Longitude: ${m[i].latlng[1]}`;
         i++    
    });

    i= 0;

    CountryCode.forEach(element => {
         element.innerText = `Country Code: ${m[i++].cca3}`;
    });

    i= 0;

    flag.forEach(element => {
         element.src = m[i++].flags.svg;
    });


button1.addEventListener("click",  function() {

let v = LatIng[0].innerText.split(":");
let longi = Number(v[2]);
let lat = Number(v[1].split(" ")[1]);

let array =[lat,longi,1];

weather(array);

});

button2.addEventListener("click",  function() {

  let v = LatIng[1].innerText.split(":");
  let longi = Number(v[2]);
  let lat = Number(v[1].split(" ")[1]);


  let array =[lat,longi,2];



  weather(array);
 

});
button3.addEventListener("click",  function() {

  let v = LatIng[2].innerText.split(":");
  let longi = Number(v[2]);
  let lat = Number(v[1].split(" ")[1]);
  
  let array =[lat,longi,3];



  weather(array);
 


});

function weather(array){

  

  let lat = array[0];
  let long = array[1];

  let n = array[2];

 

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b26908f93a7022be17cccebba5ef3f65`).then(res => {
     return res.json();
}).then(function(res) {
   // console.log(res);





    let v= document.querySelector(`#button${n}`);
    let v1 =document.querySelector(`#buttonreplace${n}`);
    



  let temp = ((res.main.temp) - 273.15).toFixed(2);
  let humi = res.main.humidity;

    const para = document.createElement("p");  //for temp
    let deg = String.fromCodePoint(8451);
    para.innerText = `Temperature: ${temp} ${deg}`;




    let icon = (res.weather[0].icon);


    const para2 = document.createElement("p");  //for humidity
         para2.innerText = `Humidity: ${humi}%`;
    
let descrip = (res.weather[0].description);



const para1 = document.createElement("p");  //for weather description
para1.innerText = descrip;

         var x = document.createElement("IMG");
         x.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);


   

   v.remove();

   v1.appendChild(para1);
   v1.appendChild(x);
   v1.appendChild(para);
   v1.appendChild(para2);

  
});

}





});
  
