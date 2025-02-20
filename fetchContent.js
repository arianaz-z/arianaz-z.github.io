function fetchAndSetContent(elementId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
}

// Call the function for header and footer
fetchAndSetContent('header', 'header.html');
fetchAndSetContent('footer', 'footer.html');