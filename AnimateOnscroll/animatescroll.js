const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('show');
        }
    });
}
)
hiddenElements.forEach(element => observer.observe(element));