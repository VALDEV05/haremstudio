function newVinile() {
    singleRotationObject(".vinile", "1", "+=120", "4000");
}
/* function to rotate object */
function singleRotationObject(params, duration, rotation, frequency) {
    var newObjectToturn = jQuery(params);

    let tl = gsap.timeline({
        defaults: { duration: duration, ease: Power1.easeInOut },
    });
    var count = '0';
    setInterval(() => {
        tl.to(
            newObjectToturn, {
                rotation: rotation,
            },
            "+=0"
        );
        /* Counter per capire in che posizione mi trovo */
        var array = rotation.split('');
        var newArray = [];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (!isNumber(element)) {
                /*  element.push(newArray);*/
                return newArray;
                /* console.log(element, 'numero'); */
            }
        }
        /* console.log(array .splice(1, 3)  ); */
        if (count >= 3) {
            count = 0;
        }
        count++;
        /* Chiamata di funzione dinamica per selezionare il servizio corrispondente */
        servicesDisplay('#servizio-0' + count, "1", "+=120", "4000")

    }, frequency);
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}


function servicesDisplay(params, duration, rotation, frequency) {
    var newObjectToturn = jQuery(params);

    let tl = gsap.timeline({
        defaults: { duration: duration, ease: Power1.easeInOut },
    });
    setInterval(() => {
        tl.to(
            newObjectToturn, {
                rotation: rotation,
            },
            "+=0"
        );
    }, frequency);

}