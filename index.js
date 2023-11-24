function loadScript(src, callback) {
  const script = document.createElement('script');
  script.type = 'module';
  script.src = src;
  document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function() {
  loadScript('/assets/index-AjMSGK_N.js');
});


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

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
