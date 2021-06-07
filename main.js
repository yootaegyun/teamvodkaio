const t1 = gsap.timeline({default: {ease: 'power1.out'} });

t1.to(".text", { y: "0%", duration: 1.2, stagger: 0.25 });
t1.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
t1.to(".intro", { y: "-100%", duration: 1 }, "-=1");









