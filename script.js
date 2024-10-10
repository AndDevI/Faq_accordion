const accordionHeaders = document.querySelectorAll('.accordionHeader');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const isActive = header.classList.contains("active");
        const accordionBody = document.querySelectorAll('.accordionBody')

        accordionHeaders.forEach(otherHeader => {
            otherHeader.classList.remove("active");
            const body = otherHeader.nextElementSibling;
            body.style.maxHeight = '0';
            body.classList.remove('mt-5');
        });

        if (!isActive) {
            header.classList.add("active");
            const accordionBody = header.nextElementSibling;
            accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`; 
            accordionBody.classList.add('mt-5');
        }
    });
});
