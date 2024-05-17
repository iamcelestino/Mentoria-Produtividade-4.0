const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click',  () => {
        const x = dropdown.nextElementSibling;
        x.classList.toggle('hidden');
    })
})