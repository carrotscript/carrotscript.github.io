  $("#data").on('click', function (){
	var blob = new Blob([document.getElementById("down").value], {type: "charset=utf-8"});
	saveAs(blob, "project.carrotscript");
  })
