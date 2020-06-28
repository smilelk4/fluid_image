const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');

console.log(document.querySelectorAll('.gallery img'));

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');

        const originalSrc = preview.getAttribute('data-original');
        original.src = originalSrc;

        const altText = preview.alt;
        imgText.innerHTML = altText;
    });
});

modal.addEventListener('click', e => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});
