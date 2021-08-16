const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
  console.log(input.files)
  const reader = new FileReader()
  reader.onload = function() {
    console.log(reader.result)
    var data = reader.result;
    var script = document.createElement("script");
    script.innerHTML = data;
    document.body.appendChild(script);
  }
  reader.readAsText(input.files[0])
}, false)
