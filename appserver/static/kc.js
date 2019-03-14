require([
             "jquery",
	     "splunkjs/mvc/simplexml/ready!",
	     "splunkjs/ready!",
	     "/static/app/Splunk_TA_ES-xtras/jquery.textfill.min.js",
	     "splunkjs/mvc/searchmanager"
         ], function() {
//         setTimeout( function () {
		 //console.log("Console Log: textfill on kc1_up from kc.js");
		 //$('#kc1_up').textfill();
		 /*
$('#kc2_up').textfill();
		 $('#kc3_up').textfill();
		 $('#kc4_up').textfill();
		 $('#kc5_up').textfill();
		 $('#kc6_up').textfill();
		 $('#kc7_up').textfill();
		 $('#kc1_down').textfill();
		 $('#kc2_down').textfill();
		 $('#kc3_down').textfill();
		 $('#kc4_down').textfill();
		 $('#kc5_down').textfill();
		 $('#kc6_down').textfill();
		 $('#kc7_down').textfill();
*/
//	},20000);
	var search_kc7_down = splunkjs.mvc.Components.getInstance("kc7_down");
	search_kc7_down.on("search:done", function(){
		setTimeout( function () {
			console.log("Console Log: textfill on search kc*_*:done from kc.js");
			$('#kc1_up').textfill();
			$('#kc1_up').css('opacity','1');
			$('#kc2_up').textfill();
			$('#kc2_up').css('opacity','1');
	                $('#kc3_up').textfill();
			$('#kc3_up').css('opacity','1');
        	        $('#kc4_up').textfill();
			$('#kc4_up').css('opacity','1');
                	$('#kc5_up').textfill();
			$('#kc5_up').css('opacity','1');
	                $('#kc6_up').textfill();
			$('#kc6_up').css('opacity','1');
        	        $('#kc7_up').textfill();
			$('#kc7_up').css('opacity','1');
	                $('#kc1_down').textfill();
			$('#kc1_down').css('opacity','1');
        	        $('#kc2_down').textfill();
			$('#kc2_down').css('opacity','1');
	                $('#kc3_down').textfill();
			$('#kc3_down').css('opacity','1');
        	        $('#kc4_down').textfill();
			$('#kc4_down').css('opacity','1');
	                $('#kc5_down').textfill();
			$('#kc5_down').css('opacity','1');
        	        $('#kc6_down').textfill();
			$('#kc6_down').css('opacity','1');
	                $('#kc7_down').textfill();
			$('#kc7_down').css('opacity','1');
		},4000);
	 });
});
/*
<script type="javascript">
require("fitty.min.js");
fitty('.fit');
</script> */
