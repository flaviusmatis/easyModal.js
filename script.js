DlHighlight.HELPERS.highlightByName("code", "pre");

$('#modal1').easyModal({
	top: 200,
	overlay : 0.2
});

$('#modal2').easyModal({
	overlay : 0.4,
	overlayClose: false
});

$('#open-modal1').click(function(e){
	$('#modal1').trigger('openModal');
	e.preventDefault();
});

$('#open-modal2').click(function(e){
	$('#modal2').trigger('openModal');
	e.preventDefault();
});