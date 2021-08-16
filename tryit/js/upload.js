const input = document.querySelector('input[type="file"]')
var data
input.addEventListener('change', function (e) {
  console.log(input.files)
  const reader = new FileReader()
  reader.onload = function() {
    console.log(reader.result)
    data = reader.result;
    console.log(data);
    var script = document.createElement('script');
    script.innerHTML = data;
    console.log(script);
    document.body.appendChild(script);
   }
  reader.readAsText(input.files[0])
}, false)
