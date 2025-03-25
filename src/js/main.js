document.addEventListener('DOMContentLoaded', () => {
    // Cursor Trail Effect
    const cursorTrail = document.querySelector('.cursor-trail');
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursorTrail, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: 'power1.out'
        });
    });

    // World Card Interactions
    const worldCards = document.querySelectorAll('.world-card');
    
    worldCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const worldType = card.getAttribute('data-world');
            
            // Dynamic background effect
            gsap.to(card, {
                boxShadow: '0 10px 30px rgba(74,74,255,0.3)',
                scale: 1.05,
                rotation: 3,
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: 'none',
                scale: 1,
                rotation: 0,
                duration: 0.3
            });
        });
    });

    // Scroll-triggered animations
    gsap.utils.toArray('.type-text, .character-text').forEach(text => {
        gsap.fromTo(text, 
            { opacity: 0.1, scale: 0.9 },
            { 
                opacity: 0.5, 
                scale: 1,
                scrollTrigger: {
                    trigger: text,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true
                }
            }
        );
    });

    // Parallax-like effect for typography
    gsap.utils.toArray('.type-row, .character-row').forEach(row => {
        gsap.to(row, {
            xPercent: row.classList.contains('reversed') ? 50 : -50,
            ease: 'none',
            scrollTrigger: {
                trigger: row,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
});