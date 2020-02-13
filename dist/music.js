$(function() {
	var ap = new APlayer({
		container: document.getElementById('aplayer'),
		fixed: false,
		autoplay: false,
		volume: 1.0,
		listFolded: true,
		lrcType: 3,
	});
	$.getJSON("https://api.i-meto.com/meting/api?type=playlist&id=3195679094", function(data) {
		ap.list.add(data)
	});
})
