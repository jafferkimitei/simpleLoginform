document.addEventListener('scroll', function() {
    const layers = document.querySelectorAll('.layer');
    const scrollPosition = window.pageYOffset;

    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -(scrollPosition * speed / 100);
        layer.style.transform = `translateY(${yPos}px)`;
    });
});
