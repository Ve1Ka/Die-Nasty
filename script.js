document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('intro').classList.add('hidden');
    document.body.classList.add('glitch-background');
    setTimeout(function() {
        window.location.href = 'blog.html';
    }, 1000);
});

// Ajout d'effets sur le blog
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelectorAll('.glitch-text').forEach(function(el) {
            el.style.animation = 'glitch 1s infinite';
        });
    }, 2000);

    // Redirection étrange après 10s
    setTimeout(function() {
        document.querySelectorAll('a').forEach(function(link) {
            if (link.href.includes("404.html")) {
                link.href = "404.html?error=true";
            }
        });
    }, 10000);
});
