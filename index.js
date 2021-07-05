slamLink = document.getElementById("slamLink").href;
slamBtn = document.getElementById("slamLink");
slamAudio = document.getElementById("slamAudio");
linkNav = document.querySelector(".center");
circleContainer = document.querySelector(".circle-container");

slamBtn.addEventListener("click", function(){
    slamAudio.play();
    console.log("clicked");
    circleContainer.classList.add("dance");
})

function delayNavigate(e) {
    e.preventDefault();                
    const goTo = this.getAttribute('/C:/Users/C_Bro/Documents/Learning/website/www/home.html'); // store anchor href
  
    setTimeout(function(){
      window.location.href = slamLink;
    }, 4000);                               
  }; 

linkNav.addEventListener("click", delayNavigate);