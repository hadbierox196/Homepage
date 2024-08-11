function searchGoogle() {
    const query = document.getElementById('searchInput').value;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
}

function changeTheme() {
    const themes = [
        { background: '#0a0f24', color: '#1b1f3a' },
        { background: '#1a1c34', color: '#2b3055' },
        { background: '#2b2f54', color: '#3c4180' },
        { background: '#3c4180', color: '#4d52a9' },
        { background: '#4d52a9', color: '#5e63d2' },
        { background: '#5e63d2', color: '#6f74f3' },
        { background: '#6f74f3', color: '#8085ff' },
        { background: '#8085ff', color: '#9aa0ff' }
    ];
    const theme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.backgroundColor = theme.background;
    const elements = document.querySelectorAll('#bookmarkGrid a, #addBookmark');
    elements.forEach(el => {
        el.style.backgroundColor = theme.color;
    });
}

function showNotifications() {
    alert('Notifications feature is currently a placeholder. Integration with specific services requires API access.');
}

function changeBackgroundImage() {
    const url = prompt('Enter the URL for the new background image:');
    if (url) {
        document.body.style.backgroundImage = `url(${url})`;
    }
}

const bookmarkGrid = document.getElementById('bookmarkGrid');
const addBookmarkButton = document.getElementById('addBookmark');

addBookmarkButton.addEventListener('click', () => {
    const url = prompt('Enter the URL for the bookmark:');
    const name = prompt('Enter a name for the bookmark:');
    if (url && name) {
        const a = document.createElement('a');
        a.href = url;
        a.innerText = name;
        a.title = name;
        a.target = '_blank';
        bookmarkGrid.appendChild(a);
    }
});
