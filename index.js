let saveEl;
let countEl;
let count = 0

document.addEventListener('DOMContentLoaded', () => {
  saveEl = document.getElementById("save-el")
  countEl = document.getElementById("count-el")
})

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}
