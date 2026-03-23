function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);
  
  const tl = gsap.timeline();
  
  tl.from('.home-greeting', { 
    opacity: 0, 
    y: 20, 
    duration: 0.8, 
    ease: "power2.out" 
  })
  .from('.hero-title', { 
    opacity: 0, 
    y: 30, 
    duration: 1, 
    ease: "power2.out" 
  }, "-=0.4")
  .from('.hero-description', { 
    opacity: 0, 
    y: 20, 
    duration: 0.8, 
    ease: "power2.out" 
  }, "-=0.6")
  .from('.hero-buttons', { 
    opacity: 0, 
    y: 20, 
    duration: 0.6, 
    ease: "power2.out" 
  }, "-=0.4");

  const sections = document.querySelectorAll('.portfolio-section');
  sections.forEach(section => {
    gsap.fromTo(section, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  const workItems = document.querySelectorAll('.work-item');
  workItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      gsap.to(this.querySelector('.work-content'), {
        x: 10,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    item.addEventListener('mouseleave', function() {
      gsap.to(this.querySelector('.work-content'), {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

});