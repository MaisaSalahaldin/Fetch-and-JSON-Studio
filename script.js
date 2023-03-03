// TODO: add code here
window.addEventListener("load", function() {
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
   response.json().then(function(json) {
console.log(json)
    let astronauts=document.getElementById('container');
    for (let i = 0; i < json.length - 1; i++) { //program terminates when this "if" is not accessed
        if (json[i].hoursInSpace > json[i + 1].hoursInSpace)
        {
            
        var temp = json[i];
        json[i] = json[i + 1];
        json[i + 1] = temp;
        
        }
        } 
for( let i=0;i<json.length;i++){
   
astronauts.innerHTML +=`


<div class="astronaut">
   <div class="bio">
      <h3> ${json[i].firstName} ${json[i].lastName}</h3>
      <ul>
         <li>Hours in space:  ${json[i].hoursInSpace}</li>
         <li ${
            json[i].active ? 'style="color:green" ':'style="color:red";'
         }>
         
         
         
         Active: ${json[i].active}</li>
         <li>Skills: ${json[i].skills}</li>
      </ul>
   </div>
   <img class="avatar" src=${json[i].picture}>
</div>
Number of Astronaut is ${i+1}
`
}
   })



})


})