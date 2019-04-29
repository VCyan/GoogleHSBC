
$(document).ready(function() {
	$('#mySubmitBtn').click(function() {
		$.post('login.html', $('#myForm').serialize(), function(data) {
			alert(data);
		});
	});
});