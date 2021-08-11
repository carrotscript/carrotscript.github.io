function download() {
var blob = new Blob([document.getElementById("data").value], {type: "text/plain;charset=utf-8"});

saveAs(blob, "project.carrotscript");
}
