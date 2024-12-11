document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  
  // Check if the current page is the main page ("/" or "index.html")
  if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    // Check if the preloader has been shown
    if (!localStorage.getItem('preloaderShown')) {
      // Show preloader
      preloader.classList.remove('hidden');
      
      // Simulate loading time (adjust as needed)
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 900); // 2 seconds

      // Mark as shown in localStorage
      localStorage.setItem('preloaderShown', 'true');
    } else {
      // Hide preloader immediately
      preloader.classList.add('hidden');
    }
  } else {
    // If not on the main page, hide the preloader immediately
    preloader.classList.add('hidden');
  }
})
