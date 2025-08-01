// window.addEventListener('load', function() {
//             const preloader = document.getElementById('preloader');
//             gsap.to(preloader, {
//                 duration: 2.5,
//                 opacity: 0,
//                 ease: 'power4.out',
//                 onComplete: function() {
//                     preloader.style.display = 'none';
//                     document.body.style.overflow = 'auto';
//                     // const scroll = new LocomotiveScroll({
//                     //     el: document.querySelector('[data-scroll-container]'),
//                     //     smooth: true,
//                     //     smoothMobile: true,
//                     //     inertia: 0.8
//                     // });
//                     // SplitType.create("h1, h2, h3", { types: 'words,chars' });
//                     // gsap.from(".char", {
//                     //     y: 100,
//                     //     opacity: 0,
//                     //     stagger: 0.05,
//                     //     duration: 1,
//                     //     ease: "power4.out"
//                     // });
//                 }
//             });
//         });

//         const counters = document.querySelectorAll('.counter');
//         counters.forEach(counter => {
//             const updateCount = () => {
//                 const target = +counter.getAttribute('data-target');
//                 const count = +counter.innerText.replace(/[^0-9.-]+/g, '');
//                 const increment = target / 200;
//                 if (count < target) {
//                     counter.innerText = count + increment < target ? Math.ceil(count + increment) + (counter.innerText.match(/[A-Za-z%+$]/) || '') : target + (counter.getAttribute('data-target').includes('+') ? '+' : '') + (counter.innerText.match(/[A-Za-z%+$]/) || '');
//                     setTimeout(updateCount, 16);
//                 }
//             };
//             const observer = new IntersectionObserver((entries) => {
//                 if (entries[0].isIntersecting) {
//                     updateCount();
//                     observer.unobserve(counter);
//                 }
//             });
//             observer.observe(counter);
//         });

//         document.addEventListener('DOMContentLoaded', function() {
//             if (typeof particlesJS !== 'undefined') {
//                 particlesJS('particles-js', {
//                     "particles": {
//                         "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
//                         "color": { "value": "#ffffff" },
//                         "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
//                         "opacity": { "value": 0.5, "random": false },
//                         "size": { "value": 3, "random": true },
//                         "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
//                         "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
//                     },
//                     "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true } },
//                     "retina_detect": true
//                 });
//             }
//         });



    // document.addEventListener('DOMContentLoaded', function() {
    //     if (typeof particlesJS !== 'undefined') {
    //         particlesJS('particles-js', {
    //             "particles": {
    //                 "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
    //                 "color": { "value": "#ffffff" },
    //                 "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
    //                 "opacity": { "value": 0.7, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
    //                 "size": { "value": 5, "random": true, "anim": { "enable": true, "speed": 4, "size_min": 0.3, "sync": false } },
    //                 "line_linked": { "enable": false },
    //                 "move": { "enable": true, "speed": 2, "direction": "bottom", "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
    //             },
    //             "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true }, "onclick": { "enable": false }, "resize": true } },
    //             "retina_detect": true
    //         });
    //     }
    // });

    particlesJS("particles-js", 
        {"particles":{"number":{"value":333,"density":{"enable":true,"value_area":333}},
        "color":{"value":"#ffffff"},
        "shape":{"type":"circle","stroke":{"width":0,"color":"#000000"}, "polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},
        "opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
        "size":{"value":3,"random":true,"anim":{"enable":true,"speed":38.288809297799176,"size_min":22.33513875704952,"sync":false}},
        "line_linked":{"enable":false,"distance":15.754233950374157,"color":"#ffffff","opacity":0.4,"width":2},
        "move":{"enable":true,"speed":1,"direction":"bottom","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
        "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},
        "modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":3,"duration":0.161991851809854,"opacity":1,"speed":3},
        "repulse":{"distance":113.3942962668978,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
        "retina_detect":true});
        var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; 
        document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() 
        { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;