$('#check').click(function() {
	var x = $('#homeadd').val();
	$('#compadd').attr('value', x);

});

$('#cpass').blur(function() {
	if (validate() == true) {
		$('#submit').removeAttr("disabled");
	}
});


$('#submit').click(function() {
	if (validate() == true) {
		alert("Registered");
		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var mail = $('#mail').val();
		//$('#dashboard').add('<li id="newregid" class="body-dashboard-eles" title="mail">fname + " " + lname</li>');
		$('#dashboard').append('<li id="newregid" class="body-dashboard-eles" title="' + mail + '">' + fname + " " + lname + '</li>');
	}
}); //this.form



// $('#newregid').on("mouseover", function() {
// 	var mail = document.forms["regform"]["email"].value;
// 	var mailtoid = document.getElementById('newregid');
// 	console.log(mailtoid.class);
// 	mailtoid.setAttribute("title", mail);
// });



function validate() {
	var fname = $('#fname').val();
	var inpMatch = fname.match(/[a-z]+/i);
	if (inpMatch != fname) {
		alert("Name Field Cannot Be Empty or Inappropriate character");
		return false;
	}
	var homeadd = $('#homeadd').val();
	var inpMatch2 = homeadd.match(/[a-z0-9\s#-/]+/i);
	if (inpMatch2 != homeadd) {
		alert("Home Address Field Cannot Be Empty or Inappropriate character");
		return false;
	}

	var offadd = $('#compadd').val();
	var inpMatch3 = offadd.match(/[a-z0-9\s#-/]+/i);
	if (inpMatch3 != offadd) {
		alert("Office Address Field Cannot Be Empty");
		return false;
	}

	var mail = $('#mail').val();
	var inpMatchn = mail.match(/[a-z0-9._+-]+@[a-z0-9]+\.[a-z]+/g);
	if (inpMatchn != mail) {

		alert("Enter Valid Email");
		return false;
	}

	var pass = $('#pass').val();
	var inpMatch4 = pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/g);
	if (inpMatch4 != pass) {
		alert("Password should contain One Digit One SmallCase One UpperCase One from !@#$%^&*  and Must Be 8 characters long");
		return false;
	}

	var cpass = $('#cpass').val();
	if (cpass != pass) {
		alert("Passwords dont match");
		return false;
	}
	return true;
}


$('#namedrop').on("click", function() {
	$('#myDropdown').removeAttr("class");
	$('#myDropdown').attr("class", "dropdown-content show");
});



// function dropfunction() {
// 	document.getElementById("myDropdown").classList.toggle("show");
// }


$(window).on("load", function() {
	$('#pass').on("paste", function(e) {
		alert("Paste not allowed");
		e.preventDefault();
	});
	$('#cpass').on("paste", function(e) {
		alert("Paste not allowed");
		e.preventDefault();
	});
	$('#pass').on("copy", function(e) {
		e.preventDefault();
	});
	$('#cpass').on("copy", function(e) {
		e.preventDefault();
	});
}).on("click", function(event) {
	if (!event.target.matches('.header-list2-name')) {
		var dropdowntotals = $(".dropdown-content");
		var i;
		for (i = 0; i < dropdowntotals.length; i++) {
			var openDropdown = dropdowntotals[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
});;