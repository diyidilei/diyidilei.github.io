/* this js has been minified, if you purchase this item, you will get unminified source code */
$(document).ready(function() {
    $(function(t) {
        "use strict";
        t(".animated").appear(function() {
            var e = t(this),
            o = e.data("animation");
            if (!e.hasClass("visible")) {
                var i = e.data("animation-delay");
                i ? setTimeout(function() {
                    e.addClass(o + " visible")
                },
                i) : e.addClass(o + " visible")
            }
        })
    }),
    $(function() {
        "use strict";
        $(".navbar-collapse ul li a:not(.dropdown-toggle)").on("click",
        function(t) {
            $(".navbar-toggle:visible").click()
        })
    }),
    $(function() {
        "use strict";
        $(".navbar-sticky").length > 0 && ($(".navbar-sticky").sticky({
            topSpacing: 0
        }), $(".navbar-sticky").css("z-index", "100"), $(".navbar-sticky").addClass("bg-light"), $(".navbar-sticky").addClass("top-nav-collapse"))
    }),
    $(function() {
        "use strict";
        $(".navbar-op ul li a, .navbar-op a.navbar-brand, .intro-direction a").on("click",
        function(t) {
            t.preventDefault();
            var e = this.hash;
            $("html, body").animate({
                scrollTop: $(e).offset().top
            },
            900,
            function() {
                window.location.hash = e
            })
        })
    }),
    $(function() {
        "use strict";
        $(".navbar-standart").length > 0 ? $(".navbar-pasific").addClass("top-nav-collapse") : $(window).scroll(function() {
            $(".navbar").offset().top > 10 ? $(".navbar-pasific").addClass("top-nav-collapse") : $(".navbar-pasific").removeClass("top-nav-collapse")
        })
    }),
    $(function() {
        "use strict";
        $('[data-toggle="tooltip"]').tooltip()
    }),
    $(function() {
        "use strict";
        $(".team-seven").hover(function() {
            var t = $(this).find(".team-seven-overlay");
            t.removeClass(t.data("return")).addClass(t.data("hover"))
        },
        function() {
            var t = $(this).find(".team-seven-overlay");
            t.removeClass(t.data("hover")).addClass(t.data("return"))
        })
    }),
    $(function() {
        "use strict";
        var t = $(".portfolio-masonry-one").isotope({
            itemSelector: ".portfolio-masonry-one-item",
            masonry: {
                columnWidth: 180,
                gutter: 10
            }
        }),
        e = $(".portfolio-masonry-one-fullwidth").isotope({
            itemSelector: ".portfolio-masonry-one-item",
            masonry: {
                columnWidth: 180,
                gutter: 10
            }
        }),
        o = $(".portfolio-masonry-two").isotope({
            itemSelector: ".portfolio-masonry-two-item",
            masonry: {
                columnWidth: 250,
                gutter: 10
            }
        }),
        i = $(".portfolio-masonry-two-fullwidth").isotope({
            itemSelector: ".portfolio-masonry-two-item",
            masonry: {
                columnWidth: 250,
                gutter: 10
            }
        }),
        a = $(".portfolio").isotope({
            itemSelector: ".portfolio-item",
            masonry: {
                rowHeight: 280
            }
        });
        $(".blog-masonry-6col").isotope({
            itemSelector: ".blog-masonry-item",
            masonry: {
                columnWidth: ".col-lg-2",
                gutter: 0
            }
        }),
        $(".blog-masonry-4col").isotope({
            itemSelector: ".blog-masonry-item",
            masonry: {
                columnWidth: ".col-md-3",
                gutter: 0
            }
        }),
        $(".blog-masonry-3col").isotope({
            itemSelector: ".blog-masonry-item",
            masonry: {
                columnWidth: ".col-md-4",
                gutter: 0
            }
        }),
        $(".blog-masonry-2col").isotope({
            itemSelector: ".blog-masonry-item",
            masonry: {
                columnWidth: ".col-md-6",
                gutter: 0
            }
        });
        $("ul.filters li a").on("click",
        function() {
            var s = $(this).attr("data-filter");
            t.isotope({
                filter: s
            }),
            e.isotope({
                filter: s
            }),
            o.isotope({
                filter: s
            }),
            i.isotope({
                filter: s
            }),
            a.isotope({
                filter: s
            })
        }),
        $("ul.filters li a").on("click",
        function() {
            $("ul.filters li a").removeClass("active"),
            $(this).addClass("active")
        })
    }),
    $(function() {
        "use strict";
        $(".fact-number").appear(function() {
            var t = $(this).attr("data-perc");
            $(this).each(function() {
                $(this).find(".factor").delay(6e3).countTo({
                    from: 10,
                    to: t,
                    speed: 3e3,
                    refreshInterval: 50
                })
            })
        })
    }),
    $(function() {
        "use strict";
        var t = $("#owlSectionOneItem");
        t.owlCarousel({
            autoPlay: 5e3,
            items: 1,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            itemsMobile: !1
        });
        var e = $("#owlSectionTwoItem");
        e.owlCarousel({
            autoPlay: 5e3,
            items: 2,
            itemsDesktop: [1e3, 2],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [600, 2],
            itemsMobile: !1
        });
        var o = $("#owlSectionThreeItem");
        o.owlCarousel({
            autoPlay: 5e3,
            items: 3,
            itemsDesktop: [1e3, 3],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [600, 1],
            itemsMobile: !1
        });
        var i = $("#owlSectionFourItem");
        i.owlCarousel({
            autoPlay: 5e3,
            items: 4,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [600, 2],
            itemsMobile: !1
        });
        var a = $("#owlSectionFiveItem");
        a.owlCarousel({
            autoPlay: 5e3,
            items: 5,
            itemsDesktop: [1e3, 5],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [600, 3],
            itemsMobile: !1
        });
        var s = $("#owlSectionSixItem");
        s.owlCarousel({
            autoPlay: 5e3,
            items: 6,
            itemsDesktop: [1e3, 6],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [600, 3],
            itemsMobile: !1
        })
    }),
    $(function() {
        "use strict";
        var t = $("#owlShop");
        t.owlCarousel({
            slideSpeed: 1e3,
            autoPlay: !0,
            pagination: !1,
            items: 4
        }),
        $(".shop-control-next").on("click",
        function() {
            t.trigger("owl.next")
        }),
        $(".shop-control-prev").on("click",
        function() {
            t.trigger("owl.prev")
        })
    }),
    $(function() {
        "use strict";
        $(".loader-item").delay(700).fadeOut(),
        $("#pageloader").delay(800).fadeOut("slow")
    }),
    $(function() {
        "use strict";
        $("#typed").length > 0 && $("#typed").typed({
            stringsElement: $("#typed-strings"),
            startDelay: 2e3,
            typeSpeed: 50,
            backDelay: 500,
            loop: !0,
            contentType: "html",
            loopCount: !1
        })
    }),
    $(function() {
        "use strict";
        $("#typed-2").length > 0 && $("#typed-2").typed({
            stringsElement: $("#typed-strings-2"),
            startDelay: 100,
            typeSpeed: 50,
            backDelay: 500,
            loop: !1,
            contentType: "html"
        })
    }),
    $(function() {
        "use strict";
        $(".tlt").length > 0 && $(".tlt").textillate({
            loop: !0,
            minDisplayTime: 5e3,
            out: {
                effect: "hinge",
                delayScale: 1.5,
                delay: 50,
                sync: !1,
                shuffle: !1,
                reverse: !1,
                callback: function() { }
            }
        })
    }),
    $(function() {
        "use strict";
        $(".rotate").length > 0 && $(".rotate").textrotator({
            animation: "fade",
            separator: ",",
            speed: 2e3
        })
    }),
    $(function() {
        var t = $("#shop-range-price");
        if (t.length > 0) {
            t.ionRangeSlider({
                type: "double",
                grid: !0,
                min: 0,
                max: 250,
                from: 45,
                to: 200,
                prefix: "$"
            })
        }
    })
} (jQuery));