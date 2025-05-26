window.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const loginButton = document.getElementById('login-button');
    const resultsContainer = document.getElementById('results-container');

    searchButton.addEventListener('click', () => {
        console.log('Cunt has just clicked the seacrch button. Cunt is probably looking for something')
        const searchTerm = searchInput.value;
        console.log("Cunt is searching for:", searchTerm)

        resultsContainer.innerHTML = '<p>You searched for: $(searchTerm)</p>'
    });

    loginButton.addEventListener('click', () => {
        console.log('Cunt clicked the login button');
        alert("button fucking works but we arent adding it rn are we cunt")
    });

    function showFakeVideos(searchTerm) {
        resultsContainer.innerHTML = `
            <div class="video-item">
                <img class="video-thumbnail" src="x">
                <h3>First result for ${searchTerm}</h3>
                <p>Channel Name</p>
            </div>
            <div class="video-item">
                <img class="video-thumbnail" src="x">
                <h3>Second result for ${searchTerm}</h3>
                <p>Another Channel</p>
            </div>
        `;
    }

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        showFakeVideos(searchTerm);
    });
});