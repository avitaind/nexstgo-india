


<!-- Newsletter --> 
		
$("#btn-newsletter").click(function(e){
	 
		 
 		 var email = $("#email").val();  
		 var site_email = $("#site_email").val(); 
		 var current_lang = $("#current_lang").val(); 
		 var site_lang = 'en';
		 var error_msg = '';
		if(email == ''){
				$("#email").focus(); 
				if(site_lang == 'en'){
					error_msg = 'Please enter your E-mail Address!';
				}else{
					error_msg = '請輸入郵件地址！';
				}
			}else if(!validEmail(email)){
				$("#email").focus(); 
				if(site_lang == 'en'){
					error_msg = 'E-mail format error, please re-enter!';
				}else{
					error_msg = '郵箱格式不正確，請重新輸入！';
				}
			} 
			  
		 if(error_msg != ''){
				$("#error_msg").html('<span style="color:#000">'+error_msg+'</span>'); 
				return false;
		 }  
		 
		jQuery.ajax({
				type: "POST",
				url: "https://www.nexstgo.com/module/contact_mail.php",
				data: {"newsletter_mail" : "Y", "email" : email, "site_email": site_email, "current_lang": current_lang},
				cache: false,
				success: function(html){  
					 
					if(html.indexOf("Thank") != -1){
						//send success ,set default value to text 
						 
						$("#email").val('');  
						
						if(site_lang == 'en'){
							$("#error_msg").html('Your message has been sent successfully.'); 
						}else{
							$("#error_msg").html('郵件發送成功！'); 
						}
					}else{
						
						if(site_lang == 'en'){
							$("#error_msg").html('<span style="color:#000">Mail sent failed,Please resend!</span>'); 
						}else{
							$("#error_msg").html('<span style="color:#000">郵件發送失敗，請重新發送！</span>'); 
						}
						
					}
					
					
				}
			}); 
	}); 



<!-- Contact Us --> 
		
$("#submit").click(function(e){
	 
		 var name = $("#name").val();
 		 var email = $("#email").val(); 
		 var phone = $("#phone").val();
		 var message = $("#message").val();
		 var site_email = $("#site_email").val();
		 var current_lang = $("#current_lang").val();
		  
		 var error_msg = '';
		 if(name == ''){
			$("#name").focus(); 
				error_msg = $("#err_name").val(); 
				
		}else if(email == ''){
			$("#email").focus(); 
			error_msg = $("#err_email").val();
			
		}else if(!validEmail(email)){
			$("#email").focus(); 
			error_msg = $("#err_email_format").val();
			
		}else if(phone == ''){
			$("#phone").focus();
			error_msg = $("#err_tel").val();
			
		}else if(message == ''){
			$("#message").focus();
			error_msg = $("#err_msg").val();
			
		}else if(grecaptcha.getResponse() == "") { 
			error_msg = $("#err_msg_captcha").val();
		}
			  
		 if(error_msg != ''){
				$("#error_msg").html('<span style="color:#F00">'+error_msg+'</span>'); 
				return false;
		 }  
		  
		
		jQuery.ajax({
				type: "POST",
				url: "https://www.nexstgo.com/module/contact_mail.php",
				data: {"contact_mail" : "Y", "name" : name, "email" : email, "phone" : phone, "message" : message, "site_email": site_email, "current_lang": current_lang},
				cache: false,
				success: function(result){   
				
					if(result.indexOf("Thank") != -1){
						//send success ,set default value to text 
						$("#name").val('');
						$("#email").val('');
						$("#phone").val('');
						$("#message").val("");  
						$("#error_msg").text($("#err_success").val()); 
						 
					}else{ 
						//$("#error_msg").html($("#err_fail").val());
						$("#error_msg").text(result); 						 
					}
					
					
				}
			}); 
	});
	
	
	
	<!--SALES ENQUIRY-->
	$("#enquiry-submit").click(function(e){
	 
		 var name = $("#name").val();
		 var company = $("#company").val();
 		 var email = $("#email").val(); 
		 var phone = $("#phone").val();
		 var address = $("#address").val();
		 var country = $("#country").val();	 
		 var message = $("#message").val();
		 var site_email = $("#site_email").val();
		 var current_lang = $("#current_lang").val();
		 var site_lang = 'en';	
		 
		 var error_msg = ''; 
		 if(name == ''){
			$("#name").focus(); 
				error_msg = $("#err_name").val(); 
		}else if(email == ''){
			$("#email").focus(); 
			error_msg = $("#err_email").val();
			
		}else if(!validEmail(email)){
			$("#email").focus(); 
			error_msg = $("#err_email_format").val();
			
		}else if(phone == ''){
			$("#phone").focus();
			error_msg = $("#err_tel").val();
			
		}else if(message == ''){
			$("#message").focus();
			error_msg = $("#err_msg").val();
			
		}else if(grecaptcha.getResponse() == "") { 
			error_msg = $("#err_msg_captcha").val();
		}
			  
		 if(error_msg != ''){
				$("#error_msg").html('<span style="color:#F00">'+error_msg+'</span>'); 
				return false;
		 }  
		 
		jQuery.ajax({
				type: "POST",
				url: "https://www.nexstgo.com/module/contact_mail.php",
				data: {"enquiry_mail" : "Y", "name" : name, "company" : company, "email" : email, "phone" : phone, "address" : address, "country" : country, "message" : message, "site_email": site_email, "current_lang": current_lang},
				cache: false,
				success: function(html){  
					 
					if(html.indexOf("Thank") != -1){
						//send success ,set default value to text 
						$("#name").val('');
						$("#email").val('');
						$("#phone").val('');
						$("#message").val("");  
						$("#company").val(""); 
						$("#address").val("");    
						
						$("#error_msg").html($("#err_success").val()); 
						 
					}else{ 
						$("#error_msg").html($("#err_fail").val()); 		
						
					}
					
					
				}
			}); 
	});
	
	
	$("#enquiry-reset").click(function(e){
	
		$("#name").val('');
		$("#email").val('');
		$("#phone").val('');
		$("#message").val("");  
		$("#company").val(""); 
		$("#address").val(""); 
	});
	
	 
	
	<!--offer ENQUIRY-->
	$("#offer-enquiry-submit").click(function(e){
	 
		 var first_name = $("#first_name").val();
		 var last_name = $("#last_name").val();
 		 var email = $("#email").val(); 
		 var phone = $("#phone").val(); 
		 var company = $("#company").val();
		 var position = $("#position").val();
		 var company_size = $("#company_size").val();
		 var business_nature = $("#business_nature").val();
		 var company_district = $("#company_district").val();
		 var know_us = $("#know_us").val();
		 var agree_policy = $('input[name="agree_policy[]"]:checked').length;
		 var receive_newsletter = $('input[name="receive_newsletter[]"]:checked').length; 
		 var message = $("#message").val(); 
		 var site_email = $("#site_email").val();
		 var current_lang = $("#current_lang").val();
		  
		 var error_msg = ''; 
		  
		 if(first_name == ''){
			$("#first_name").focus(); 
				error_msg = $("#err_first_name").val(); 
		}else if(last_name == ''){
			$("#last_name").focus(); 
				error_msg = $("#err_last_name").val(); 
		}else if(email == ''){
			$("#email").focus(); 
			error_msg = $("#err_email").val(); 
		}else if(!validEmail(email)){
			$("#email").focus(); 
			error_msg = $("#err_email_format").val(); 
		}else if(phone == ''){
			$("#phone").focus();
			error_msg = $("#err_tel").val(); 
		}else if(message == ''){
			$("#message").focus();
			error_msg = $("#err_msg").val(); 	
		}else if(agree_policy == '' || agree_policy == '0'){ 
			error_msg = $("#err_agree_policy").val(); 	
		} 
			  
		 if(error_msg != ''){
			$("#error_msg").html('<span style="color:#F00">'+error_msg+'</span>'); 
			return false;
		 }  
		 
		jQuery.ajax({
				type: "POST",
				url: "https://www.nexstgo.com/module/contact_mail.php",
				data: {"offer_enquiry_mail" : "Y", "first_name" : first_name, "last_name" : last_name, "email" : email, "phone" : phone, "company" : company, "position" : position, "company_size" : company_size, "business_nature" : business_nature, "company_district" : company_district, "know_us" : know_us, "receive_newsletter" : receive_newsletter, "message" : message, "site_email": site_email, "current_lang": current_lang},
				cache: false,
				success: function(html){  
					 
					if(html.indexOf("Thank") != -1){
						//send success ,set default value to text 
						$("#first_name").val('');
						$("#last_name").val('');
						$("#email").val('');
						$("#phone").val(''); 
						$("#company").val(""); 
						$("#position").val(""); 
						$("#company_size").val(""); 
						$("#business_nature").val(""); 
						$("#company_district").val("");   
						$("#message").val("");  
						$('input[type=checkbox]').prop('checked',false);  
						$('#company_size option:first').prop('selected',true);
						$('#business_nature option:first').prop('selected',true);
						$('#company_district option:first').prop('selected',true);
						$('#know_us option:first').prop('selected',true);
						
						$("#error_msg").html($("#err_success").val()); 
						 
					}else{ 
						$("#error_msg").html($("#err_fail").val()); 		
						
					}
					
					
				}
			}); 
	});
	
	
	$("#offer-enquiry-reset").click(function(e){
	
		$("#first_name").val('');
		$("#last_name").val('');
		$("#email").val('');
		$("#phone").val(''); 
		$("#company").val(''); 
		$("#position").val('');  
		$("#message").val('');
		$('input[type=checkbox]').prop('checked',false);  
		$('#company_size option:first').prop('selected',true);
		$('#business_nature option:first').prop('selected',true);
		$('#company_district option:first').prop('selected',true);
		$('#know_us option:first').prop('selected',true);
		  
	});
	    
	    
	
function validEmail(v){
    var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    return (v.match(r) == null) ? false : true;
}


$('#name').keypress(function(e) {
    	if(e.which == 13) {
			$("#email").focus();
 		}
});

$('#email').keypress(function(e) {
    	if(e.which == 13) {
			$("#website").focus();
 		}
});

$('#phone').keypress(function(e) {
    	if(e.which == 13) {
			$("#message").focus();
 		}
});

$('#message').keypress(function(e) {
    	if(e.which == 13) {
			$("#submit").click();
 		}
});

<!-- End Contact Us -->

 