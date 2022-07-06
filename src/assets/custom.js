import { gsap, Power4 /* , Bounce */ } from "gsap";
import { TimelineMax } from "gsap/gsap-core";
import jQuery from "jquery";
import { TweenMax } from "gsap/gsap-core";

function init() {
    gsap.registerPlugin("TweenMax");
    gsap.registerPlugin("TimelineMax");
    consoleLogAuthor();
    animateMenu();
    /* controlVinile(); */
    scrolltToTop();
    sendEmailHarem();
    redirectGoogleMaps();
    redirectSection(
        ".vinile-wrap-container",
        "#servizio-01",
        "#section-servizio-01"
    );
    redirectSection("#header-menu", ".chi-siamo-menu", "#chi-siamo");
    keywordAnimation();
    newVinile();
}

function consoleLogAuthor() {
    console.log("Valerio Corda");
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
/* ANIMATION VINILE */
/* function controlVinile() {
    var vinile = jQuery(".vinile");
    var servizio_01 = jQuery("#servizio-01");
    let count = 0;

    let tl = gsap.timeline({ defaults: { duration: 3, ease: Power1.easeOut } });
    jQuery("#prev").click(function() {
        count = count + 1;
        tl.to(vinile, { rotation: "+=120" }, "+=1").to(
            servizio_01, { y: "-100%", x: "70%" },
            "+1"
        );
    });
} */
/* ScrollToTop */
function scrolltToTop() {
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
    button.mouseenter().css("cursor", "pointer");
    button.click(function() {
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

function newVinile() {

    singleRotationObject('.vinile', '1', '+=360', '2000');


}
/* function to rotate object */
function singleRotationObject(params, duration, rotation, frequency) {
    var newObjectToturn = jQuery(params);
    let tl = gsap.timeline({ defaults: { duration: duration, ease: Power4.easeInOut } });
    setInterval(() => {
        tl.to(
            newObjectToturn, {
                rotation: rotation,
            },
            "+=0"
        )
    }, frequency);
}
jQuery(document).ready(init);