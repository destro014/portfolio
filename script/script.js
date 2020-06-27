AOS.init({
  once: false,
  easing: "ease-out-quart",
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    tabs.forEach(tab => tab.classList.remove("active"));
    tab.classList.add("active");
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent =>
      tabContent.classList.remove("tab-active")
    );
    target.classList.add("tab-active");
  });
});

window.onscroll = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

$(".nav-toggle").on("click", function () {
  $(this).toggleClass("active");
  $("nav ul").slideToggle("600ms", "swing");
});

$(window).on("load resize", function () {
  var docWidth = $("body").width(),
    $clients = $(".clients"),
    w = $(window).width(),
    x = 991;
  if (window.matchMedia("(min-width: 991px)").matches) {
    $(document).on("mousemove", function (e) {
      var mouseX = e.pageX;
      var offset = (mouseX / docWidth / 2.22) * 100;
      $clients.css({
        "-webkit-transform": "translate3d(" + -offset + "%,0,0)",
        transform: "translate3d(" + -offset + "%,0,0)",
      });
    });
  } else {
    $clients.css({
      // "-webkit-transform": "translate3d(0,0,0)",
      // transform: "translate3d(0,0,0)",
    });
  }
  var y = 768;
  if (w < y) {
    $("nav ul").css({ display: "none" });
  }
  $(".exp").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".experience-section").offset().top,
      },
      500
    );
  });
  $(".work").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".project-section").offset().top,
      },
      1000
    );
  });
  $(".photo").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".photography-section").offset().top,
      },
      1500
    );
  });
  $(".contact").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".contact-section").offset().top,
      },
      2000
    );
  });
});
