const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
  console.log(input.files)
  const reader = new FileReader()
  reader.onload = function() {
    console.log(reader.result)
    var data = reader.result;
    var run = document.createElement("script");
    run.innerHTML = 'import * as carrotscript from "https://carrotscript.github.io/plugin.js";    ' + data;
   }
  reader.readAsText(input.files[0])
}, false)
