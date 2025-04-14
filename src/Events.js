export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.onclick = function () {
        button.remove();
    };
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.onmouseover = function () {
            li.setAttribute('title', item);
        };
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let firstClick = true;

    link.onclick = function (event) {
        if (firstClick) {
            event.preventDefault();
            link.textContent += ' ' + link.href;
            firstClick = false;
        }
    };

    document.body.appendChild(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';

    li.onclick = function () {
        li.textContent += '!';
    };

    ul.appendChild(li);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    button.onclick = function () {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';

        newLi.onclick = function () {
            newLi.textContent += '!';
        };

        ul.appendChild(newLi);
    };

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
