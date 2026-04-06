const items = document.querySelectorAll('.all-menus li');

items.forEach(li => {
    li.addEventListener('click', () => {
        items.forEach(el => el.classList.remove('active'));
        li.classList.add('active');
    });
});