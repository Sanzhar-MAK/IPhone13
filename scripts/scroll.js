const links = document.querySelectorAll('.header-menu__item a');
const allCharacteristics = document.querySelector('.card-details__link-characteristics');
seamless.polyfill();
links.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        const id = element.getAttribute('href').substring(1);
        const section = document.getElementById(id)

        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: "smooth",
                block: "start",
            });
        } else {
            console.log('Null')
        }
    })
})

allCharacteristics.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target
    const idAll = target.getAttribute('href').substring(1);
    const sectionAll = document.getElementById(idAll)

    seamless.elementScrollIntoView(sectionAll, {
        behavior: "smooth",
        block: "start",
    });

})