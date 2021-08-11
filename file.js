function download() {
  var save = document.getElementById("data").value;
  var blob = new Blob([save], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, "project.carrotscript");
}
