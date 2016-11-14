$(document).ready(function (){
	console.log("test");
	$('#showButton').on('click', function(){
		getColors();
	});
});

function displayColors(data) {
	var table = "";
	$.each(data.rows, function(index, row){
		table += '<div class="row">\n';
		table += '<div class="col1">' + row.COLOR_ID + "</div>\n";
		table += '<div class="col2">' + row.COLOR_NAME + "</div>\n";
		table += '<div class="col3">' + row.COLOR_TiMESTAMP + "</div>\n";
		table += '<div></br>';
	});
	$('#outputDiv').html(table);
}

function getColors(){
	console.log("requesting colors");
	$.ajax({
		url: 'localhost:3000/colors',
		type: 'GET', //if passing data, use POST
		//data: {name: value},
		dataType: 'json',
		success: function (data, status) {
			console.log("colors received");
			displayColors(data);
		},
		error: function (xhr, status) {
			console.log("Error: " + status);
		}
	});
}