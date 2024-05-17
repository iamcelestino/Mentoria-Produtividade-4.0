const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click',  () => {
        dropdown.lastElementChild.style.transform ='rotate(90deg)';
        const x = dropdown.nextElementSibling;
        x.classList.toggle('hidden');
    })
})