// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count in the HTML to reflect the new count

let h2 = document.getElementById("count");

let count = 0;

function increment() {
  count += 1;
  h2.innerText = count;
  console.log(count);
}

let btn = document.getElementById("increment-btn");

btn.addEventListener("click", increment);
