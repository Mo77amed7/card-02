document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Add the 'added' class for visual feedback
        button.classList.add('added');
        button.textContent = 'Added to Cart';
  
        // Simulate a cart update
        setTimeout(() => {
          button.classList.remove('added');
          button.textContent = 'Add to Cart';
        }, 2000);
      });
    });
  });