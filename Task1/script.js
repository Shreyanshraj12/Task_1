const form = document.getElementById('newsletter-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Perform form validation here
  
  // Example: Display a success message
  alert('Successfully subscribed to the newsletter!');
  form.reset();
});
