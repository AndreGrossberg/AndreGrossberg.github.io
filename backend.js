

ipButton.addEventListener("click", function() {
    fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => {
        document.getElementById('ipAddress').innerText = 'Your IP Address: ' + data.ip;
    })
    .catch(error => {
        console.error('Error fetching IP address:', error);
    });
})