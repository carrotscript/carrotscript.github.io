// You may be wondering what this is about. Well, this generates files for our file generator.

    function dynamic_text() {
        return document.getElementById("data").value;
    }


function download_file(name, contents, mime_type) {

    
        mime_type = mime_type || "text/plain";

        var blob = new Blob([contents], {type: mime_type});

        var dlink = document.createElement('a');
        dlink.download = name;
        dlink.href = window.URL.createObjectURL(blob);
        dlink.onclick = function(e) {
            // revokeObjectURL needs a delay to work properly
            var that = this;
            setTimeout(function() {
                window.URL.revokeObjectURL(that.href);
            }, 1500);
        };
        console.log(dlink.href);
        dlink.click();
        dlink.remove();
    }


// window.location.href = "https://carrotscript.github.io/open_file";
