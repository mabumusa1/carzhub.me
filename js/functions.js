"use strict";
var $window = $(window),
    $document = $(document),
    $this = $(this),
    $body = $("body");

function dataCustomOptions() {
    $("*[data-pattern-overlay-darkness-opacity]").each(function() {
        var e = $(this).data("pattern-overlay-darkness-opacity");
        $(this).css("background-color", convertHex("#000000", e))
    }), $("*[data-pattern-overlay-background-image]").each(function() {
        "none" == $(this).data("pattern-overlay-background-image") ? $(this).css("background-image", "none") : "yes" == $(this).data("pattern-overlay-background-image") && $(this).css("background-image")
    }), $("*[data-remove-pattern-overlay]").each(function() {
        "yes" == $(this).data("remove-pattern-overlay") && $(this).css("background", "none")
    }), $("*[data-bg-color]").each(function() {
        var e = $(this).data("bg-color");
        $(this).css("background-color", e)
    }), $("*[data-bg-color-opacity]").each(function() {
        var e = $(this).data("bg-color-opacity"),
            t = $(this).css("background-color").replace("rgb", "rgba").replace(")", ", " + e + ")");
        $(this).css("background-color", t)
    }), $("*[data-bg-img]").each(function() {
        var e = $(this).data("bg-img");
        $(this).css("background-image", "url('" + e + "')")
    }), $("*[data-parallax-bg-img]").each(function() {
        var e = $(this).data("parallax-bg-img");
        $(this).css("background-image", "url('./images/files/parallax-bg/" + e + "')")
    })
}

function responsiveClasses() {
    jRespond([{
        label: "smallest",
        enter: 0,
        exit: 479
    }, {
        label: "handheld",
        enter: 480,
        exit: 767
    }, {
        label: "tablet",
        enter: 768,
        exit: 991
    }, {
        label: "laptop",
        enter: 992,
        exit: 1199
    }, {
        label: "desktop",
        enter: 1200,
        exit: 1e4
    }]).addFunc([{
        breakpoint: "desktop",
        enter: function() {
            $body.addClass("device-lg")
        },
        exit: function() {
            $body.removeClass("device-lg")
        }
    }, {
        breakpoint: "laptop",
        enter: function() {
            $body.addClass("device-md")
        },
        exit: function() {
            $body.removeClass("device-md")
        }
    }, {
        breakpoint: "tablet",
        enter: function() {
            $body.addClass("device-sm")
        },
        exit: function() {
            $body.removeClass("device-sm")
        }
    }, {
        breakpoint: "handheld",
        enter: function() {
            $body.addClass("device-xs")
        },
        exit: function() {
            $body.removeClass("device-xs")
        }
    }, {
        breakpoint: "smallest",
        enter: function() {
            $body.addClass("device-xxs")
        },
        exit: function() {
            $body.removeClass("device-xxs")
        }
    }])
}

function fullscreenSection() {
    $(".fullscreen, #home-header, #home-banner").css("height", $(window).height()), $("#banner.fullscreen").css("height", $(window).height())
}
$document.on("ready", function() {
    responsiveClasses(), dataCustomOptions(), fullscreenSection(), imageBG(), fitVideos(), BGVideoYTPlayer(), lightboxImage(), lightboxGallery(), lightboxIframe(), scrollToAnchor(), bannerParallaxImageBG(), sectionParallaxImageBG(), sliderBoxesFeatures(), sliderClients(), sliderTestimonials(), sliderImageBG(), optimizeSliderImageBG(), whiteTextSwitching(), formCTASubscribe2()
}), $window.on("load", function() {
    parallaxStellar()
}).on("resize", function() {
    responsiveClasses(), fullscreenSection()
}).on("scroll", function() {
    scrollTopIcon(), scrollProgress()
}), $(".banner-parallax").each(function() {
    var e = $(this).data("banner-height"),
        t = $(this).find(".row > [class*='col-']");
    $(this).css("min-height", e), $(t).css("min-height", e)
});
var owlRtl, HTMLDir = $("html").css("direction");

function imageBG() {
    $(".img-bg").each(function() {
        var e = $(this),
            t = e.find("img").attr("src");
        e.parent(".section-image").length ? e.css("background-image", "url('" + t + "')") : (e.prepend("<div class='bg-element'></div>"), e.find(".bg-element").css("background-image", "url('" + t + "')"));
        e.find("img").css({
            opacity: 0,
            visibility: "hidden"
        })
    })
}

function parallaxStellar() {
    $(function() {
        ($body.hasClass("device-lg") || $body.hasClass("device-md") || $body.hasClass("device-sm")) && $.stellar({
            horizontalScrolling: !1,
            verticalOffset: 0,
            responsive: !0
        })
    })
}

function fitVideos() {
    $("#full-container").fitVids()
}

function BGVideoYTPlayer() {
    $(".video-background").each(function() {
        $(this).YTPlayer({
            mute: !1,
            autoPlay: !0,
            opacity: 1,
            containment: ".video-background",
            showControls: !1,
            startAt: 0,
            addRaster: !0,
            showYTLogo: !1,
            stopMovieOnBlur: !1
        })
    })
}

function lightboxIframe() {
    $(".lightbox-iframe").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    })
}

function lightboxImage() {
    $(".lightbox-img").magnificPopup({
        type: "image",
        gallery: {
            enabled: !1
        },
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    })
}

function lightboxGallery() {
    $(".lightbox-gallery").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        },
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    })
}

function scrollTopIcon() {
    $(window).scrollTop();
    800 < $(window).scrollTop() ? $(".scroll-top-icon").addClass("show") : $(".scroll-top-icon").removeClass("show")
}

function scrollProgress() {
    var e = $(document).height() - $(window).height(),
        t = $(document).scrollTop() / (e / 100);
    $("#scroll-progress .scroll-progress").width(t + "%"), $(".scroll-percent").text(t.toFixed(0) + "%")
}

function scrollToAnchor() {
    var e = $(".header-bar.sticky"),
        t = e.height(),
        a = e ? t : 0;
    $(".scroll-to").on("click", function(e) {
        e.preventDefault();
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - a
        }, 1200, "easeInOutExpo")
    })
}

function bannerParallaxImageBG() {
    var e = $(".banner-parallax"),
        t = e.children("img:first-child").attr("src");
    e.prepend("<div class='bg-element'></div>"), e.find("> .bg-element").css("background-image", "url('" + t + "')").attr("data-stellar-background-ratio", .2)
}

function sectionParallaxImageBG() {
    $(".parallax-section").each(function() {
        var e = $(this),
            t = e.children("img:first-child").attr("src");
        e.prepend("<div class='bg-element'></div>"), e.find("> .bg-element").css("background-image", "url('" + t + "')").attr("data-stellar-background-ratio", .2)
    })
}
owlRtl = "rtl" == HTMLDir, $(".scroll-top").on("click", function(e) {
    e.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, 1200, "easeInOutExpo")
});
var logo = $(".logo-header img"),
    logoSrc = logo.attr("src"),
    logoAlt = logo.data("logo-alt");

function whiteTextSwitching() {
    $("#header").hasClass("sticky") || ($(".owl-item.active").find(".banner-center-box").hasClass("text-white") ? ($("#header").addClass("text-white"), logo.attr("src", logoAlt), $(".header-btn").removeClass("hover-dark").addClass("hover-white")) : ($("#header").removeClass("text-white"), $(".header-btn").removeClass("hover-white").addClass("hover-dark"), logo.attr("src", logoSrc))), 1 == !$(".banner-slider").parents(".banner-parallax").length && ($(".banner-center-box").hasClass("text-white") ? ($("#header").addClass("text-white"), logo.attr("src", logoAlt), $(".header-btn").removeClass("hover-dark").addClass("hover-white")) : ($("#header").removeClass("text-white"), logo.attr("src", logoSrc), $(".header-btn").removeClass("hover-white").addClass("hover-dark")))
}

function sliderImageBG() {
    $(".slider-img-bg .owl-item > li").each(function() {
        var e = $(this),
            t = e.find(".slide").children("img").attr("src");
        e.prepend("<div class='bg-element'></div>"), e.find("> .bg-element").css("background-image", "url('" + t + "')")
    })
}

function optimizeSliderImageBG() {
    $(".slider-img-bg").each(function() {
        var e = $(this).closest("div").height();
        $(".banner-parallax").children(".banner-slider").length, $(this).find(".owl-item > li .slide").children("img").css({
            display: "none",
            height: e,
            opacity: 0
        })
    })
}

function sliderBoxesFeatures() {
    $(".slider-boxes-features > .owl-carousel").owlCarousel({
        rtl: owlRtl,
        autoplay: !1,
        autoplaySpeed: 500,
        autoplayTimeout: 5e3,
        dragEndSpeed: 350,
        autoplayHoverPause: !0,
        loop: !1,
        slideBy: 1,
        margin: 0,
        stagePadding: 0,
        nav: !1,
        dots: !1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        },
        autoHeight: !0,
        autoWidth: !1,
        navRewind: !0,
        center: !1,
        dotsEach: 1,
        dotData: !1,
        lazyLoad: !1,
        smartSpeed: 600,
        fluidSpeed: 5e3,
        navSpeed: 400,
        dotsSpeed: 400
    })
}

function sliderClients() {
    $(".slider-clients > .owl-carousel").owlCarousel({
        items: 6,
        rtl: owlRtl,
        autoplay: 3e3,
        autoplaySpeed: 500,
        autoplayTimeout: 3e3,
        dragEndSpeed: 350,
        autoplayHoverPause: !0,
        loop: !0,
        slideBy: 1,
        margin: 30,
        stagePadding: 0,
        nav: !1,
        dots: !1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        },
        autoHeight: !1,
        autoWidth: !1,
        navRewind: !0,
        center: !1,
        dotsEach: 1,
        dotData: !1,
        lazyLoad: !1,
        smartSpeed: 600,
        fluidSpeed: 5e3,
        navSpeed: 400,
        dotsSpeed: 400
    })
}

function sliderTestimonials() {
    $(".slider-testimonials > .owl-carousel").owlCarousel({
        rtl: owlRtl,
        autoplay: !1,
        autoplaySpeed: 500,
        autoplayTimeout: 5e3,
        dragEndSpeed: 350,
        autoplayHoverPause: !0,
        loop: !1,
        slideBy: 1,
        margin: 30,
        stagePadding: 0,
        nav: !1,
        dots: !1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        },
        autoHeight: !0,
        autoWidth: !1,
        navRewind: !0,
        center: !1,
        dotsEach: 1,
        dotData: !1,
        lazyLoad: !1,
        smartSpeed: 600,
        fluidSpeed: 5e3,
        navSpeed: 400,
        dotsSpeed: 400
    })
}
$(".scroll-to").on("click", function(e) {
    e.preventDefault();
    var t = $(this);
    $("html, body").stop().animate({
        scrollTop: $(t.attr("href")).offset().top
    }, 1200, "easeInOutExpo")
});
var csNotifications = $(".cs-notifications");

function formCTASubscribe2() {
    $("#form-cta-subscribe-2").validate({
        rules: {
            cs2Name: {
                required: !0,
                minlength: 3
            },
            cs2Email: {
                required: !0,
                email: !0
            },
            cs2PhoneNum: {
                required: !0,
                number: !0,
                minlength: 12,
                maxlength: 12
            }
        }
    });
    var e = csNotifications.data("error-msg"),
        t = e || "Please Follow Error Messages and Complete as Required";
    $("#form-cta-subscribe-2").on("submit", function(e) {
        e.isDefaultPrevented() ? (cs2SubmitMSG(!1, '<i class="cs-error-icon fas fa-times"></i>' + t), cs2Error()) : (e.preventDefault(), cs2SubmitForm())
    })
}

function cs2SubmitForm() {
    var e = $("#cs2Name").val(),
        t = $("#cs2Email").val()
    $.ajax({
        type: "POST",
        url: "https://hook.us1.make.com/iqelz75bx1vny7vyvp45o4qcalvccdsu",
        data: "cs2Name=" + e + "&cs2Email=" + t,
        success: function(e) {
            "success" == e ? cs2Success() : (cs2Error(), cs2SubmitMSG(!1, e))
        }
    })
}

function cs2Success() {
    var e = csNotifications.data("success-msg"),
        t = e || "Thank you for your submission :)";
    $("#form-cta-subscribe-2")[0].reset(), cs2SubmitMSG(!0, '<i class="cs-success-icon fas fa-check"></i>' + t), $(".cs-notifications-content").addClass("sent"), csNotifications.css("opacity", 0), csNotifications.slideDown(300).animate({
        opacity: 1
    }, 300).delay(5e3).slideUp(400), $("#form-cta-subscribe-2").hasClass("redirected") && setTimeout(function() {
        window.location.href = "thank-you-page.html"
    }, 3e3)
}

function cs2Error() {
    csNotifications.css("opacity", 0), csNotifications.slideDown(300).animate({
        opacity: 1
    }, 300), $(".cs-notifications-content").removeClass("sent")
}

function cs2SubmitMSG(e, t) {
    var a;
    a = "shake animated", csNotifications.delay(300).addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        $(this).removeClass("shake bounce animated")
    }), csNotifications.children(".cs-notifications-content").html('Thanks you are part of our community now!')
}

function switcherFire() {
    setTimeout(function() {
        $(".style-switcher").addClass("show"), $(".ss-icon").toggleClass("rotating")
    }, 2e3), $(".demos-preview li a").each(function() {
        var t = $(this);
        t.hover(function() {
            var e = t.find("img").attr("src");
            $(".dp-img").attr("src", e).toggleClass("appeared")
        })
    }), $(".ss-icon").on("click", function(e) {
        e.preventDefault(), $(".style-switcher").toggleClass("show"), $(this).toggleClass("rotating")
    }), $(".switch-button").each(function() {
        $(this).on("click", function() {
            $(this).toggleClass("active"), $(this).next().toggleClass("active"), $(this).prev().toggleClass("active")
        }), $(this).prev("span").on("click", function() {
            $(this).addClass("active"), $(this).nextAll().removeClass("active")
        }), $(this).next("span").on("click", function() {
            $(this).addClass("active"), $(this).prev(".switch-button").addClass("active").prevAll("span:first-child").removeClass("active")
        })
    }), $(".list-patterns li button").each(function() {
        $(this).on("click", function() {
            $("body").addClass("boxed"), $(".page-width-option .switch-button").addClass("active"), $(".page-width-option .switch-button").next().addClass("active"), $(".page-width-option .switch-button").prev().removeClass("active");
            var e = "bg-pattern-" + $(this).attr("class");
            $("body").removeClass(function(e, t) {
                return (t.match(/(^|\s)bg-pattern-\S+/g) || []).join(" ")
            }), $("body").addClass(e), $(".list-patterns li button").removeClass("active"), $(this).addClass("active")
        })
    }), $(".page-width-option .switch-button").each(function() {
        $("body").hasClass("boxed") && ($(this).addClass("active"), $(this).prev("span").removeClass("active"), $(this).next("span").addClass("active"), $(".list-patterns").removeClass("hidden")), $(this).on("click", function() {
            $("body").toggleClass("boxed"), $("body").hasClass("boxed") && $("body").is("[class*='bg-pattern-']")
        }), $(this).prev("span").on("click", function() {
            $("body").removeClass("boxed")
        }), $(this).next("span").on("click", function() {
            $("body").addClass("boxed")
        })
    })
}

function convertHex(e, t) {
    return e = e.replace("#", ""), r = parseInt(e.substring(0, 2), 16), g = parseInt(e.substring(2, 4), 16), b = parseInt(e.substring(4, 6), 16), result = "rgba(" + r + ", " + g + ", " + b + ", " + t + ")", result
}