const modalFunc = () => {
    const modalBtn = document.querySelectorAll('.more');
    const modalWindow = document.querySelector('.modal');

    modalBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            modalWindow.classList.remove('hidden');
        });
    });

    modalWindow.addEventListener('click', (event) => {
        const target = event.target;

        if (
            target.classList.contains('overlay') ||
            target.classList.contains('modal__close')
        )
            modalWindow.classList.add('hidden');
    });
};

export default modalFunc;
