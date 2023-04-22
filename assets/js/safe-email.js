window.onload = function() {
	var mailto = "mailto:";
	var user = "alexckassa";
	var commatSymbol = "&commat;";
	var commat = "@";
	var domain = "gmail";
	var periodSymbol = "&period;";
	var period = ".";
	var domainExt = "com";
	
	var emailAddr = user + commatSymbol + domain + periodSymbol + domainExt;
	var emailAddrHref = mailto + user + commat + domain + period + domainExt;

	$('.safe-email').each(function() {
		$(this).append(emailAddr);
		$(this).attr("href", emailAddrHref);
	});

	$('.safe-email-link-only').each(function() {
		$(this).attr("href", emailAddrHref);
	});
	
	var intcode = "+1";
	var tel = "tel:";
	var areacode = "248";
	var prefix = "880";
	var suffix = "1630";
	
	var phoneNum = intcode + " " + "(" + areacode + ")" + " " + prefix + "-" + suffix;
	var phoneNumHref = tel + intcode + areacode + prefix + suffix;

	$('.safe-phone').each(function() {
		$(this).append(phoneNum);
		$(this).attr("href", phoneNumHref);
	});

	$('.safe-phone-link-only').each(function() {
		$(this).attr("href", phoneNumHref);
	});
}