const input = document.querySelector('input[type="file"')
input.addEventListener('change', function (e) {
  console.log(input.files)
  const reader = new FileReader()
  reader.onload = function() {
    console.log(reader.result)
  }
  reader.readAsTest(input.files[0])
}, false)
