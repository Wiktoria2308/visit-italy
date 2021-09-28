   // Get the modal
   var modal = document.getElementById('myModal');

   // Get the image and insert it inside the modal - use its "alt" text as a caption
   var img = document.getElementById('myImg');
   var img2 = document.getElementById('myImg2');
   var modalImg = document.getElementById('img01');
   var captionText = document.getElementById('caption');
   var src = 'images/medium.jpg';
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

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName('close')[0];

   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
     modal.style.display = 'none';
   };


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