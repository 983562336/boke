$(function() {
	var ap = new APlayer({
		container: document.getElementById('aplayer'),
		fixed: false,
		autoplay: true,
		volume: 1.0,
		listFolded: true,
		lrcType: 3,
	});
	$.getJSON("https://api.fczbl.vip/163/?type=playlist&id=3195679094", function(data) {
		ap.list.add(data)
	});
})
