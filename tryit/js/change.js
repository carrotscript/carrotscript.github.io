const input = document.querySelector('input[type="file"')
input.addEventListener('change', function (e) {
  console.log(input.files)
}, false)
