const btn = document.getElementById('dice-icon')
let adviceScreen = document.getElementById('advice')
let adviceId = document.getElementById('advice-id');



    // the function
async function getAdvice() {
    adviceId.textContent = '...'; 
    adviceScreen.textContent = 'Loading...';
    
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data.slip.id);
    console.log(data.slip.advice);

    //    update the ui
    adviceId.textContent = data.slip.id;
    adviceScreen.textContent = data.slip.advice;
  } catch (error) {
    adviceScreen.textContent="Couldn't fetch advice. Try again later."
  }
}
// fires up once page loads
getAdvice()
// The event listener logic
btn.addEventListener('click',getAdvice)