// JavaScript for adding `visible` class when element comes into view

document.addEventListener('DOMContentLoaded', ()  {
	const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.1,
  

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      }
    
  }, appearOptions)

  faders.forEach(fader ={
    appearOnScroll.observe(fader)
    });
  

 
  
 
  
// Example: Check if there's any JavaScript code interfering
// script.js

