/**
 * @author frederic font, strongly based on canoris-javascript by ciskavriezenga (http://github.com/canoris/canoris-javascript)
 */

var apiKey = "";

var loadSettings = function(){ 
	$.ajax({
		async: false,
		url: 'settings_local.json',
		dataType: 'json',
		data: {},
		success: createVariables
	});
}


var createVariables = function(settings){
	apiKey = settings.apiKey;
}