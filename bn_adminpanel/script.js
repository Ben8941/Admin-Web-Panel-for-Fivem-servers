const items = document.querySelectorAll('.all-menus li');
const box = document.getElementById('self-perms');
let size = 10;

items.forEach(li => {
    li.addEventListener('click', () => {
        items.forEach(el => el.classList.remove('active'));
        li.classList.add('active');
    });
});

while (box.scrollHeight > box.clientHeight) {
    size--;
    box.style.fontSize = size + 'px';
}

