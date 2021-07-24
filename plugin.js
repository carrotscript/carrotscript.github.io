// Welcome to CarrotScript!
// CarrotScript is not automatically plugged in to your website. This file adds CarrotScript.
// To do that, copy and paste this to your website's header:
/*
  <script src="https://carrotscript.github.io/plugin.js"></script>
*/
// Create another script tag at your body, and type your code in there. (JavaSript will still work in the script tag)
// Carrot On!

var post;
function post(name, data) {
  post = name + "=" + data;
  document.cookie = post;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function print(name) {
  var print = getCookie(name);
  var btn = document.createElement("p");
  btn.innerHTML = print;
  document.body.appendChild(btn);
}

function replace(id, cookie) {
  var change = getCookie(cookie);
  document.getElementById(id).innerHTML = change;
}
