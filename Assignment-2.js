let delayInsecond =3;
let countdown = delayInsecond;

function displayCountdown()
{
    if(countdown>0){
        console.log(`time remaining: ${countdown} seconds..`);
        countdown --;
    } else {
        clearInterval(countdownInterval);
        generateRandomNumber();

    }
}
 function generateRandomNumber(){
    const randomNum =Math.floor(Math.random()*100);
    console.log(`Random number generated: ${randomNum}`);

 }
 const countdownInterval = setInterval(displayCountdown, 1000);