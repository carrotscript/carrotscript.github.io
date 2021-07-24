// Welcome to CarrotScript!
// CarrotScript is not automatically plugged in to your website. This file adds CarrotScript.
// To do that, copy and paste this to your website's header:
/*
  <script src="https://carrotscript.github.io/plugin.js"></script>
  <script>
  
  </script>
*/
// In the second script tag, type your CarrotScript!
// Carrot On!

var post;
function post(name, data) {
  post = name + "=" + data;
  document.cookie = post;
}
function get(name, varname) {
  
}
