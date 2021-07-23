document.cookie = "posts=0;";

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

var code = document.getElementById("code");
console.log(code);
if (code.indexOf("post();") >= 0) {
  let x = getCookie("posts") + 1;
  console.log(x);
  document.cookie = "posts=" + x + ";";
  if (code.indexOf("name") >= 0) {
    var y = code.indexOf("name(") + 5;
    var name = code.;
    var cookie = getCookie("posts") + "= " + ;
  }
}
