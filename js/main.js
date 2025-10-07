/**
 * js/main.js
 * Basic interactivity for Gomez IT Services landing page
 * - jQuery-based smooth scrolling
 * - Mobile nav toggle
 * - Reveal-on-scroll animations
 * - Active nav link highlighting
 * - Simple client-side form validation (does not replace Netlify Forms)
 */

(function ($) {
  $(document).ready(function () {
    var $window = $(window);
    var $document = $(document);
    var $header = $(".site-header");
    var headerHeight = $header.outerHeight() || 72;

    /* NAV TOGGLE (mobile) */
    $("#nav-toggle").on("click", function () {
      $(".nav-links").toggleClass("open");
      var expanded = $(this).attr("aria-expanded") === "true";
      $(this).attr("aria-expanded", !expanded);
    });

    /* Ensure nav resets on resize */
    $window
      .on("resize", function () {
        if ($window.width() >= 720) {
          $(".nav-links").removeClass("open").show();
          $("#nav-toggle").attr("aria-expanded", false);
        } else {
          $(".nav-links").hide();
        }
      })
      .trigger("resize");

    /* SMOOTH SCROLL FOR INTERNAL LINKS */
    $('a[href^="#"]').on("click", function (e) {
      var targetHash = this.hash;
      if (!targetHash) return;

      var $target = $(targetHash);
      if ($target.length) {
        e.preventDefault();
        headerHeight = $header.outerHeight() || headerHeight;
        var top = $target.offset().top - (headerHeight + 12);
        $("html, body").animate({ scrollTop: top }, 550);
        // Close mobile nav after clicking
        if ($window.width() < 720) {
          $(".nav-links").removeClass("open").hide();
        }
      }
    });

    /* REVEAL ON SCROLL - add reveal class to sections and elements we want to animate */
    // mark sections as reveal targets
    $(".section, .hero-text, .card, .test-card, .family-photos .photo, .trusted-by .logo").addClass("reveal");

    function revealOnScroll() {
      var windowTop = $window.scrollTop();
      var windowHeight = $window.height();

      $(".reveal").each(function () {
        var $el = $(this);
        if ($el.hasClass("visible")) return;

        var elTop = $el.offset().top;
        if (windowTop + windowHeight * 0.85 > elTop) {
          $el.addClass("visible");
        }
      });
    }

    $window.on("scroll", function () {
      var scrollTop = $window.scrollTop();

      // shrink header / add scrolled class
      if (scrollTop > 20) {
        $header.addClass("scrolled");
      } else {
        $header.removeClass("scrolled");
      }

      revealOnScroll();
      highlightNav();
    });

    // initial run
    revealOnScroll();

    /* ACTIVE NAV LINK HIGHLIGHTING */
    var $sections = $("section[id]");
    function highlightNav() {
      var scrollPos = $window.scrollTop() + headerHeight + 24;

      var currentId = null;
      $sections.each(function () {
        var $s = $(this);
        var top = $s.offset().top;
        if (top <= scrollPos) {
          currentId = $s.attr("id");
        }
      });

      $(".nav-links a").removeClass("active");
      if (currentId) {
        $('.nav-links a[href="#' + currentId + '"]').addClass("active");
      } else {
        $('.nav-links a[href="#hero"]').addClass("active");
      }
    }

    // run once on load
    highlightNav();

    /* SIMPLE FORM VALIDATION (client-side only) */
    var $form = $('form[name="contact"]');
    $form.on("submit", function (e) {
      var $submit = $form.find('button[type="submit"]');
      var name = $.trim($form.find('input[name="name"]').val() || "");
      var email = $.trim($form.find('input[name="email"]').val() || "");

      // basic checks
      if (!name || !email) {
        e.preventDefault();
        // simple UI feedback
        if (!name) {
          $form.find('input[name="name"]').focus();
        } else {
          $form.find('input[name="email"]').focus();
        }
        if (!$form.find(".form-error").length) {
          $form.prepend(
            '<div class="form-error" style="color:#b91c1c;font-weight:700;margin-bottom:8px;">Please fill in your name and email before submitting.</div>'
          );
        }
        return false;
      }

      // disable submit to avoid accidental double submits
      $submit.prop("disabled", true).text("Sending...");
      // allow normal submit to Netlify to proceed
      return true;
    });

    // remove error when user starts typing
    $form.find("input, textarea, select").on("input change", function () {
      $form.find(".form-error").remove();
      $form.find('button[type="submit"]').prop("disabled", false).text("Send Message");
    });
  });
})(jQuery);
