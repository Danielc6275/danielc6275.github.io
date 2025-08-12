let count = 0; 

function counter() {
  count++;
  document.getElementById("dynamic-text").innerText = `You have clicked this button ${count} times`;

}

function reset() {
  count = 0;
  document.getElementById("dynamic-text").innerText = "You have clicked this button 0 times";
}