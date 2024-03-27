$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1.5,
      },
      1000: {
        items: 3,
      },
      2000: {
        items: 3,
      },
    },
  });

  $(".prevBtn").on("click", function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

  $(".nextBtn").on("click", function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
});
$(document).ready(function () {
  $(".internSheep-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 2.5,
      },
      1000: {
        items: 3.5,
      },
      1500: {
        items: 4.8,
      },
    },
  });

  $(".previous").on("click", function () {
    $(".internSheep-carousel").trigger("prev.owl.carousel");
  });

  $(".next").on("click", function () {
    $(".internSheep-carousel").trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  $(".popular-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 2.5,
      },
      1000: {
        items: 3.5,
      },
      1500: {
        items: 4.8,
      },
    },
  });

  $(".previous-button").on("click", function () {
    $(".popular-carousel").trigger("prev.owl.carousel");
  });

  $(".next-button").on("click", function () {
    $(".popular-carousel").trigger("next.owl.carousel");
  });
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
  const plus = element.querySelector(".plus")
  if(answer.style.display == 'none'){
    plus.classList.remove("fa-minus")
    plus.classList.add("fa-plus")
    
  }
  if(answer.style.display == "block"){
    plus.classList.remove("fa-plus")
    plus.classList.add("fa-minus")
  }
  
}
