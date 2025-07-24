function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

  //nav bar ends and slider starts
 




   const slides = document.querySelectorAll('.slide-img');
  const caption = document.getElementById('slider-caption');
  const subcaption = document.getElementById('slider-subcaption');

  const captions = [
    {
      heading: "Nature’s Bounty, Packed for You",
      sub: "Premium Dry Fruits from Kashmir"
    },
    {
      heading: "From Kashmir’s Heart to Your Home",
      sub: "Crafted with care, delivered with love"
    }
  ];

  let current = 0;

  setInterval(() => {
    // Remove current image
    slides[current].classList.remove('active');

    // Update index
    current = (current + 1) % slides.length;

    // Add new image
    slides[current].classList.add('active');

    // Reset animations
    caption.style.animation = "none";
    subcaption.style.animation = "none";
    void caption.offsetWidth; // Reflow to restart animation
    void subcaption.offsetWidth;

    // Update text
    caption.textContent = captions[current].heading;
    subcaption.textContent = captions[current].sub;

    // Re-apply animation
    caption.style.animation = "fadeUp 1s ease-in-out";
    subcaption.style.animation = "fadeUp 1s ease-in-out";
  }, 5000);








