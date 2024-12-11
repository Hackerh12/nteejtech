const videoData = [
    {
        id: 1,
        thumbnail: 'assets/images/WA-ban.jpg',
        duration: '4:17',
        title: 'Unban your WhatsApp with 3hours',
        
    },
    {
        id: 2,
        thumbnail: 'assets/images/t-phisher.jpg',
        duration: '1:47',
        href: 'w.n.m',
        title: 'Facebook phishing page👿',
        
    },

    {
        id: 3,
        thumbnail: 'assets/images/new-sni.jpg',
        duration: '2:22',
        href: 'w.n.m',
        title: 'New SNI bug generator and test it for free internet with HA tunnel 2024',
        
    }
    ];
   
// Generate video cards
const videosContainer = document.querySelector('.videos');
videoData.forEach((video) => {
    const videoCard = `
        <div class="video-card">
            <div class="thumbnail">
                <img src="${video.thumbnail}" alt="Video thumbnail">
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-info">
                <div class="channel-icon"></div>
                <div class="video-details">
                    <h3 class="video-title">${video.title}</h3>
                    
                </div>
            </div>
        </div>
    `;
    videosContainer.insertAdjacentHTML('beforeend', videoCard);
});

// Category selection with filter functionality
const categories = document.querySelectorAll('.category');
categories.forEach((category) => {
    category.addEventListener('click', () => {
        categories.forEach((c) => c.classList.remove('active'));
        category.classList.add('active');
        filterVideos(category.dataset.category); // Assume data-category attributes are set
    });
});

function filterVideos(category) {
    videoCards.forEach((card) => {
        const title = card.querySelector('.video-title').textContent.toLowerCase();
        // Assuming a category filter is based on title or similar logic
        card.style.display = title.includes(category) ? 'block' : 'none';
    });
}

// Toggle sidebar
const menuButton = document.querySelector('.header__menu');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
});

// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    videoCards.forEach((card) => {
        const title = card.querySelector('.video-title').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});
