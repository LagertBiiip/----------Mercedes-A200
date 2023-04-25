const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        //смена стрелок
        btnItem.classList.toggle('feature__link_active');

        //смена показа блока со списком характеристик
        lists[index].classList.toggle('hidden');
    });
});
