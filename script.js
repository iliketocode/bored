var alert = {
	"enabled": false,
	"message": "Test"
};

$(document).ready(function(){
	if(alert.enabled){
		$("body").append("<div style='background-color:red;color:white;position:fixed;top:60;left:50;padding:10px 10px 10px 10px;border-radius:10px'>" + alert.message + "</div>");
	}
	$("header").load("/bored/_header.html");
	$("footer").load("/bored/_footer.html");
})
