
$(document).ready(function() {
	$("body").append( "<div class='MessageBox'><span class='MessageContent'></span></div>" );
});
//////////////////////////////////////////////////////////////////////////////////
function ShowSuccessBox(){ $(".MessageBox").slideToggle(); }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function MessageBox(Noidung)
{
	$(".MessageContent").html(Noidung);
	ShowSuccessBox();
	setTimeout(ShowSuccessBox, 2500);
}