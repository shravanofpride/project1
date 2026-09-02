document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carouselTrack");
    
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener("mousedown", (e) => {
        isDown = true;
        track.classList.add("active");
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.parentElement.scrollLeft;
    });

    track.addEventListener("mouseleave", () => {
        isDown = false;
    });

    track.addEventListener("mouseup", () => {
        isDown = false;
    });

    track.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.parentElement.scrollLeft = scrollLeft - walk;
    });
});