import { gsap /* Power1 */ /* , Bounce */ , Linear } from "gsap";
import { TimelineMax } from "gsap/gsap-core";
import jQuery from "jquery";
import { TweenMax } from "gsap/gsap-core";
import { Draggable } from "gsap/Draggable";
import { TweenLite, TimelineLite } from 'gsap';
import { setTimeout } from "core-js";

function init() {
    gsap.registerPlugin("TweenMax");
    gsap.registerPlugin("TimelineMax");
    gsap.registerPlugin(Draggable);
    consoleLogAuthor();
    animateMenu();
    scrolltToTop();
    sendEmailHarem();
    redirectGoogleMaps();
    redirectSection(
        ".vinile-wrap-container",
        "#servizio-01",
        "#section-servizio-01"
    );
    redirectSection(
        ".vinile-wrap-container",
        "#servizio-02",
        "#section-servizio-02"
    );
    redirectSection(
        ".vinile-wrap-container",
        "#servizio-03",
        "#section-servizio-03"
    );
    redirectSection("#header-menu", ".chi-siamo-menu", "#chi-siamo");
    redirectSection("#header-menu", ".contatti-menu", "#contatti");
    keywordAnimation();
    draggableImg();
    toggleMenuMobile();
    pageLoader();
    counter();
    gsap.config({
        nullTargetWarn: false,
    });
}

function consoleLogAuthor() {
    console.log("Valerio Corda");
}

function toggleMenuMobile() {
    const menuToggleOpen = jQuery("#hambuerger-menu");
    const menuToggleClose = jQuery("#menu-toggle-close");
    const body = jQuery("body");
    const tl = gsap.timeline({
        paused: true,
    });
    tl.to(".menu-footer-left", {
        x: 0,
        duration: 1.2,
        ease: "expo.inOut",
    });

    tl.from(".menu-footer-left nav a", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "expo.out",
        stagger: 0.5,
    });

    tl.from(".social", {
        y: 40,
        opacity: 0,
        duration: 0.4,
        ease: "expo.out",
    });
    jQuery(menuToggleOpen).click(function() {
        tl.play();
        body.css("overflow-y", "hidden");
    });
    jQuery(menuToggleClose).click(function() {
        tl.reverse();
        body.css("overflow-y", "scroll");
    });
}
/* MENU ANIMATION */
function animateMenu() {
    jQuery(".animate-menu").mouseenter(function() {
        TweenMax.to(jQuery(this), 0.5, {
            x: 20,
        });

        var tlunderline = new TimelineMax();
        tlunderline.fromTo(
            jQuery(this).find(".underline"),
            0.5, {
                width: "0%",
                left: "0%",
            }, {
                width: "calc(250px)",
                marginLeft: "-20px",
                duration: 1,
            }
        );
    });

    jQuery(".animate-menu").mouseleave(function() {
        var tlunderline = new TimelineMax();
        tlunderline.fromTo(
            jQuery(this).find(".underline"),
            0.5, {
                width: "calc(250px)",
                right: "100%",
            }, {
                width: "0%",
                right: "0%",
                marginLeft: "0px",
                duration: 1,
            }
        );

        TweenMax.to(jQuery(this), 0.5, {
            x: -10,
        });
    });
}
/* ScrollToTop */
function scrolltToTop() {
    var button = jQuery('.logo-script');
    button.css('cursor', 'pointer');
    jQuery("#back-top").click(function() {
        jQuery("html, body").animate({
                scrollTop: 0,
            },
            "slow"
        );
        return false;
    });
    jQuery(".back-top").click(function() {
        jQuery("html, body").animate({
                scrollTop: 0,
            },
            "slow"
        );
        return false;
    });
    button.click(function() {
        jQuery("html, body").animate({
                scrollTop: 0,
            },
            "slow"
        );
        return false;
    });
}
/* sendEmailFooter */
function sendEmailHarem() {
    var linkToMail = jQuery(".sendEmailHarem");
    linkToMail.css("cursor", "pointer");
    linkToMail.click(function() {
        window.location.href = "mailto:studio@millenarigroup.com";
    });
}

function redirectGoogleMaps() {
    var indirizzo =
        "https://www.google.it/maps/place/Via+Antonio+Maria+Lorgna,+22,+00143+Roma+RM/@41.8248262,12.5043733,16.43z/data=!4m13!1m7!3m6!1s0x13258bca7b7a55b5:0xfc5461eddcf7cdf1!2sVia+Antonio+Maria+Lorgna,+22,+00143+Roma+RM!3b1!8m2!3d41.8242585!4d12.5076442!3m4!1s0x13258bca7b7a55b5:0xfc5461eddcf7cdf1!8m2!3d41.8242585!4d12.5076442";
    var button = jQuery("#top-header").find("#menu-item-1");
    var button2 = jQuery('#contatti').find('#map');
    button.mouseenter().css("cursor", "pointer");
    button.click(function() {
        window.open(indirizzo);
    });
    button2.mouseenter().css("cursor", "pointer");
    button2.click(function() {
        window.open(indirizzo);
    });

}

/* Redirect Serviczio */
function redirectSection(contenitore, partenza, arrivo) {
    jQuery(contenitore)
        .find(partenza)
        .click(function() {
            jQuery("html, body").animate({
                    scrollTop: jQuery(arrivo).offset().top,
                },
                "slow"
            );
            return false;
        });
}

/* Function to apply keywordAnimation() */
function parallaxIt(e, target, movement, container) {
    var $this = jQuery(container);
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
    });
}
/* Function to blog drag on element */
function draggableImg() {
    jQuery("img").mousedown(() => {
        return false;
    });
    jQuery("svg").mousedown(() => {
        return false;
    });
    jQuery("a").mousedown(() => {
        return false;
    });
    jQuery("h1").mousedown(() => {
        return false;
    });
    jQuery("p").mousedown(() => {
        return false;
    });
    jQuery("h2").mousedown(() => {
        return false;
    });
    jQuery("h3").mousedown(() => {
        return false;
    });
}
/* Function keywordAnimation() */
function keywordAnimation() {
    var pageWidth = jQuery(window).width();
    if (pageWidth > 768) {
        /* Keyword #chi-siamoSection */
        jQuery("#chi-siamo").mousemove(function(event) {
            parallaxIt(event, ".content-text .chi-siamo-link.top", 40, "#chi-siamo");
            parallaxIt(
                event,
                ".content-text .chi-siamo-link.middle",
                50,
                "#chi-siamo"
            );
            parallaxIt(
                event,
                ".content-text .chi-siamo-link.bottom",
                60,
                "#chi-siamo"
            );
        });
        /* Name Services SectionSingleService */
        jQuery(".immagine-servizio").mousemove(function(event) {
            parallaxIt(event, ".nome-servizio", 20, ".immagine-servizio");
            parallaxIt(event, ".nome-servizio", 20, ".immagine-servizio");
            parallaxIt(event, ".nome-servizio", -10, ".immagine-servizio");
        });
    }
}

function pageLoader() {
    var pageLoader = jQuery("#page-loader");
    setTimeout(() => {
        pageLoader.addClass('rimuovi');
        setTimeout(() => {
            AnimazioneVinile();
        }, 3000);
    }, 3000);
}

function counter() {
    var span = jQuery(".counter-number");
    let i = 0;
    while (i <= 100) {
        task(i);
        i++;
    }

    function task(i) {
        setTimeout(function() {
            span.text(i);
        }, 30 * i);
    }
}


function AnimazioneVinile() {
    jQuery('.servizi-wrap').children('.servizi').each(function(i) {
        TweenLite.set(this, { rotation: 30 * i });
    }).end();

    var tl = new TimelineLite({ paused: true });
    var nav = jQuery('.servizi-wrap')

    var vinileRotation = gsap.to(nav, 30, { rotation: "360", ease: Linear.easeNone, repeat: -1 });




    jQuery(document).on("mouseenter", ".servizi img", function() {
        tl.pause();
    }).on("mouseleave", ".servizi a", function() {
        tl.play();
    });


    var pageWidth = jQuery(window).width();
    if (pageWidth > 768) {
        Draggable.create(".servizi-wrap", {
            type: "rotation",
            inertia: true,
            onDrag: function() {
                vinileRotation.pause();
            }
        });
    }
}
jQuery(document).ready(init);