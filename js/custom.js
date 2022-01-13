//$(function () {
    
    
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


   $(".slide_active").slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
//        fade: true
//        vertical:true,
        dots:true,
        nextArrow: '.left_arrow',
        prevArrow: '.right_arrow',
//        verticalSwiping:true
    });


//=======
	//toggle the component with class accordion_body
	$(".accordion_head").click(function(){
		if ($('.accordion_body').is(':visible')) {
			$(".accordion_body").slideUp(300);
			$(".plusminus").text('+');
		}
        if( $(this).next(".accordion_body").is(':visible')){
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        }else {
            $(this).next(".accordion_body").slideDown(300); 
            $(this).children(".plusminus").text('-');
        }
	});

$("a[href$='#demo']").click(function() {

  let attr = $("#demo").attr("class");
   if (attr=="collapse show") {
    $("i").removeClass("fas fa-chevron-up");
    $("i").addClass("down");
} else {
   $("i").removeClass("fas fa-chevron-down");
    $("i").addClass("fas fa-chevron-up");
  }


})
//});