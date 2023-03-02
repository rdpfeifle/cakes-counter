// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count in the HTML to reflect the new count

let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

let btn = document.getElementById("increment-btn");

btn.addEventListener("click", increment);

let saveBtn = document.getElementById("save-btn");

function save() {
  let countSeparator = ` ${count} - `;
  saveEl.textContent += countSeparator;

  // Reset countEl back to 0 after saving the entries
  countEl.textContent = 0;
  count = 0;
}

saveBtn.addEventListener("click", save);
