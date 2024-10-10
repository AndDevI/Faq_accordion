const accordionHeaders = document.querySelectorAll('.accordionHeader');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const isActive = header.classList.contains("active");
        const icon = header.querySelector('img'); 

        accordionHeaders.forEach(otherHeader => {
            otherHeader.classList.remove("active");
            const body = otherHeader.nextElementSibling;
            body.style.maxHeight = '0';
            body.classList.remove('mt-5');
            
            const otherIcon = otherHeader.querySelector('img');
            otherIcon.setAttribute('src', 'assets/icons/icon-plus.svg');
        });

        if (!isActive) {
            header.classList.add("active");
            const accordionBody = header.nextElementSibling;
            accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`; 
            accordionBody.classList.add('mt-5');
            icon.setAttribute('src', 'assets/icons/icon-minus.svg');
        }
    });
});
