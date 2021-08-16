  $("#down").on('click', function (){
	var blob = new Blob([document.getElementById("data").value], {type: "charset=utf-8"});
	saveAs(blob, "project.carrotscript");
  })
  // Above code is in jQuery
