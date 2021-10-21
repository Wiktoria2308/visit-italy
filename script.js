   //////////////////////// MODAL AMAZING PLACES 
   var modal = document.getElementById('myModal');
   var img = document.getElementById('myImg');
   var img2 = document.getElementById('myImg2');
   var modalImg = document.getElementById('img01');
   var captionText = document.getElementById('caption');
   img.onclick = function () {
     modal.style.display = 'block';
     modalImg.src = 'images/Cinque-terre.jpg';
     captionText.innerHTML = 'Cinque Terre / Italy';
   };
   img2.onclick = function () {
     modal.style.display = 'block';
     modalImg.src = 'images/venice.jpg';
     captionText.innerHTML = 'Venice / Italy';
   };
   modal.onclick = function () {
     modal.style.display = 'none';
   };
////////////////////////////////// END MODAL

/////////////////////////// SLIDES
   var slideIndex = 1;
   showSlides(slideIndex);
   
   function plusSlides(n) {
     showSlides(slideIndex += n);
   }
   
   function currentSlide(n) {
     showSlides(slideIndex = n);
   }
   
   function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("slides");
     var dots = document.getElementsByClassName("dot");
     if (n > slides.length) {slideIndex = 1}    
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "block";  
     dots[slideIndex-1].className += " active";
   }
// ///////////////////////////////



///////////MODAL VATICAN CITY IMAGES
let modal2 = document.getElementById("myModal2");
let modalImg2 = document.getElementById("modal_img2");
var captionText2 = document.getElementById('caption2');
  
document.querySelectorAll(".vatican-image").forEach((item) => {
  item.addEventListener("click", (event) => {
    modal2.style.display = "block";
    const image = item.src;
    const imageAlt = item.alt;
    captionText2.innerHTML = imageAlt;
    modalImg2.src = image;
  });
});
modal2.onclick = function() { 
  modal2.style.display = "none";
}
// /////////////////////////////////////////