document.addEventListener('mousemove', (e) => {
  const target = e.target.closest('.chip');
  
  if (target) {
    const x = e.offsetX;
    const y = e.offsetY;
    
    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  }
});