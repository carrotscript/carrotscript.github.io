const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
  console.log(input.files)
  const reader = new FileReader()
  reader.onload = function() {
    console.log(reader.result)
    var data = reader.result;
    var run = document.createElement("script");
    run.text = 'import * as carrotscript from "https://carrotscript.github.io/plugin.js";    ' + data;
    run.type = "module";
    document.body.appendChild(run);
   }
  reader.readAsText(input.files[0])
}, false)
