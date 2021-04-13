const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{interval: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
// sr.reveal('.content_heading',{delay :200})
sr.reveal('.about__img',{delay:200}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
// sr.reveal('.contanier',{interval: 200}); 
sr.reveal('.box',{interval:200});
sr.reveal('.card',{delay:200});
/*SCROLL CONTACT*/
sr.reveal('.middle',{interval: 200}); 
// SCROLL HEADING
 sr.reveal('.selection_heading',{interval:200});

