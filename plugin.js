// Welcome to CarrotScript!
// CarrotScript is not automatically plugged in to your website. This file adds CarrotScript.
// To do that, copy and paste this to your website's header:
/*
  <script src="https://carrotscript.github.io/plugin.js"></script>
*/
// Create another script tag at your body, and type your code in there. (JavaSript will still work in the script tag)
// Carrot On!

console.group("CarrotScript Messages");
console.warn("The CarrotScript Plugin has been added to this website. \n The owner agrees to the Terms and Conditions \n Visit the Terms and Conditions at https://carrotscript.github.io/terms.");
console.log("CarrotScript started...");
var post;
function post(name, data) {
  try {
    post = name + "=" + data;
    document.cookie = post;
  }
  catch(err) {
   console.error("post(); error: " + err);
  }
}

function get(cname) {
  try {
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
  catch(err) {
   console.error("get(); error: " + err);
  }
}

function print(name) {
  try {
  var print = get(name);
  var btn = document.createElement("p");
  btn.innerHTML = print;
  document.body.appendChild(btn);
  }
  catch(err) {
   console.error("print(); error: " + err);
  }
}

function replace(id, cookie) {
  try {
  var change = get(cookie);
  document.getElementById(id).innerHTML = change;
  }
  catch(err) {
   console.error("replace(); error: " + err);
  }
}

console.log("CarrotScript finished...");
console.groupEnd();
