// Welcome to CarrotScript!
// You may ask, "what is this?"
// This file contains all of CarrotScript Text v2.1
// 
//
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
console.log("Loading functions..");
var post;
export function post(name, data) {
    post = name + "=" + data;
    document.cookie = post;
}
export function get(cname) {
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
export function print(name) {
  var print = get(name);
  var btn = document.createElement("code");
  btn.innerHTML = print;
  document.body.appendChild(btn);
}
export function replace(id, cookie) {
  var change = get(cookie);
  document.getElementById(id).innerHTML = change;
}
console.log("Loaded funtions...");
console.log("Starting tests...");
try {
  post("carrotscript", "hey");
  var hey = get("carrotscript");
} catch (error) {
  console.error(error);
}
console.log("Tests finished...");
console.warn("Even though we said that this carrotscript is looking fine to us, they may be problems.");
console.log("CarrotScript finished...");
console.groupEnd();
