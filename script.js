let currentSection = 0;

document.body.addEventListener('keydown', function (event) {
    const sections = document.querySelector('.container');
    
    if (event.key === 'ArrowRight') {
        currentSection = (currentSection + 1) % 2; // 2 bölüm olduğu için 0-1 arasında döner
        sections.style.transform = `translateX(-${currentSection * 100}vw)`;
    } else if (event.key === 'ArrowLeft') {
        currentSection = (currentSection - 1 + 2) % 2; // 2 bölüm olduğu için 0-1 arasında döner
        sections.style.transform = `translateX(-${currentSection * 100}vw)`;
    }
});

// Butonlar için olay dinleyiciler
document.getElementById('next').addEventListener('click', () => {
    currentSection = (currentSection + 1) % 2;
    const sections = document.querySelector('.container');
    sections.style.transform = `translateX(-${currentSection * 100}vw)`;
});

document.getElementById('prev').addEventListener('click', () => {
    currentSection = (currentSection - 1 + 2) % 2;
    const sections = document.querySelector('.container');
    sections.style.transform = `translateX(-${currentSection * 100}vw)`;
});
