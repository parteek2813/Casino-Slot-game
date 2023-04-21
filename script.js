let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");

let values = [
    '😁','😂','😊','😒','😘','😢', '🥹'
]
let inpSpeed = document.getElementById("inpSpeed");

function getRandomValue() {
    
    let random = values[parseInt(Math.random() * 7)];
    return random;

}

let animationId;
function updateAnimations(newSpeed){
    if(animationId) clearInterval (animationId);

    animationId= setInterval(()=>{
        
        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();
    } , 850/newSpeed )
}



inpSpeed.onchange = function(event){
    console.log("Value change" + event.target.value);

    document.documentElement.style.setProperty("--speed", event.target.value)
    updateAnimations(event.target.value);

}

let stop = document.getElementById('stop')

stop.onclick=  function(){

  
    console.log("Stop is pressed")

    document.documentElement.style.setProperty('--speed',-1);
    clearInterval(animationId);

    //Declare that the player has won the game

 
    $(document).ready(function(){
        let a = $("#value1").html();
        let b = $("#value2").html();
        let c = $("#value3").html();
        
    if((a == b) && (b==c)&& (a==c)){
        alert("Congrats! You have won")
        console.log("ok");
    }
    else{
        alert("Try again!")
    }
        
    })

    // let slot1 = document.getElementById("value1");
    // let slot11 = slot1.textContent;
    // console.log(slot11)

    // let slot2 = document.getElementById("value2");
    // let slot22 = slot2.textContent;
    // console.log(slot22);

    // let slot3 = document.getElementById("value3");
    // let slot33 = slot3.textContent;
    // console.log(slot33);







    
}

let spin = document.getElementById("spin");

spin.onclick = function(){


    document.documentElement.style.setProperty('--speed', 2);
    clearInterval(animationId);


    var p = document.getElementById("paragraph");
    p.style.display = "block";


    setTimeout(() => {
        document.getElementById("paragraph").innerHTML = "";
    }, 3000);

   
    
    

}

$(document).ready(function(){

    
    
})







