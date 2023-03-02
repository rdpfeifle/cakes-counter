// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count in the HTML to reflect the new count

let countEl = document.getElementById("count");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

let btn = document.getElementById("increment-btn");

btn.addEventListener("click", increment);

let saveBtn = document.getElementById("save-btn");

function save() {
  console.log(count);
}

saveBtn.addEventListener("click", save);
