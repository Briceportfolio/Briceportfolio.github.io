// TYPED//
var typed = new Typed(".typed", {
  strings: [
    "Enthousiaste et créatif, je suis un développeur front-end dévoué à créer des expériences utilisateur remarquables. Avec une solide expertise dans le développement web, je m'efforce de combiner une esthétique exceptionnelle avec une fonctionnalité optimale. Mon objectif est de concevoir des interfaces intuitives et réactives qui captivent les utilisateurs dès le premier clic. Ma passion pour la technologie et ma capacité à rester à l'avant-garde des dernières tendances du développement web me permettent de livrer des projets qui dépassent les attentes. Je suis compétent dans une variété de technologies front-end telles que HTML5, CSS3, JavaScript ainsi que dans l'utilisation de frameworks tels que React et Angular.",
  ],
  typeSpeed: 20,
  loop: false,
});
// NAVBAR //
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
// compteur live//
let compteur = 0;

$(window).scroll(function () {
  const top = $(".counter").offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $(".counter-value").each(function () {
      let $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 10000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});

// AOS
AOS.init();
