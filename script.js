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


















const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const suggestionsList = document.getElementById('suggestions');
const productCards = Array.from(document.querySelectorAll('.product-card'));

// Extract product names and reference their card
const productNames = productCards.map(card => ({
  name: card.querySelector('.product-name').textContent.trim(),
  card: card
}));

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = '';

  if (!query) {
    productCards.forEach(p => p.card.style.display = '');
    return;
  }

  const matched = productNames.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  // Build suggestion list
  matched.slice(0, 5).forEach(match => {
    const li = document.createElement('li');
    li.textContent = match.name;
    li.addEventListener('click', () => {
      searchInput.value = match.name;
      suggestionsList.innerHTML = '';
      performSearch(match.name.toLowerCase());
    });
    suggestionsList.appendChild(li);
  });
});

// ✅ NEW: Search on pressing Enter inside input
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value.toLowerCase();
    performSearch(query);
    suggestionsList.innerHTML = '';
  }
});

// Handle actual search on button click
searchButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  performSearch(query);
  suggestionsList.innerHTML = '';
});

function performSearch(query) {
  let found = false;

  productNames.forEach(p => {
    if (p.name.toLowerCase().includes(query)) {
      p.card.style.display = '';
      found = true;
    } else {
      p.card.style.display = 'none';
    }
  });

  const noResults = document.getElementById('noResults');
  if (found) {
    noResults.style.display = 'none';
  } else {
    noResults.style.display = 'block';
  }
}












