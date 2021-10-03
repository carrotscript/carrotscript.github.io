const mapjs = {
	version: 0.2,
	google: function(place, width, heigth) {
    	if (typeof width === 'undefined') { width = '600'; }
        if (typeof heigth === 'undefined') { heigth = '450'; }
        var googlemap = document.createElement("div");
        googlemap.innerHTML = '<iframe width="' + width + '" height="' + heigth + '" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC7HAr3ww-RvJii8vmOMTU6RNV8O0AQ8TE&q=' + place + '"></iframe>';
        document.body.appendChild(googlemap);
    },
    waze: function(lat, long, width, heigth, pin) {
    	if (typeof pin === 'undefined') { pin = '0'; }
    	if (typeof width === 'undefined') { width = '600'; }
		if (typeof heigth === 'undefined') { heigth = '450'; }
    	var wazemap = document.createElement("div");
        wazemap.innerHTML = '<iframe src="https://embed.waze.com/iframe?zoom=12&lat=' + lat +'&lon=' + long +'" width="' + width +'" height="' + heigth + '"></iframe>';
        document.body.appendChild(wazemap);
    }
};
