import {toUpper} from 'lodash';

function reloadMenu () {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const sauce = document.createElement('div');
    sauce.id = 'sauce';
    sauce.appendChild(add('sauce', 'red', '토마토 소스'));
    sauce.appendChild(add('sauce', 'green', '바질페스토 소스'));

    const topping = document.createElement('div');
    topping.id = 'topping';
    topping.appendChild(add('topping', 'cheese', '모짜렐라 치즈(이탈리아)'));
    topping.appendChild(add('topping', 'pepperoni', '돼지고기(국산), 옥수수전분(러시아), 정제소금(국산)'));
    topping.appendChild(add('topping', 'sausage', '돼지고기(국산), 대두(미국산)'));
    topping.appendChild(add('topping', 'bacon', '돼지고기(국산), 천일염(국산), 향신조미료(국산)'));
    topping.appendChild(add('topping', 'ham', '돼지고기(국산, 수입산)'));
    topping.appendChild(add('topping', 'mushroom', '버섯(국산)'));
    topping.appendChild(add('topping', 'onion', '양파(국산)'));
    topping.appendChild(add('topping', 'olive', '올리브(미국산)'));
    topping.appendChild(add('topping', 'pineapple', '파인애플(미국산)'));
    topping.appendChild(add('topping', 'pimento', '피망(국산)'));
    topping.appendChild(add('topping', 'basil', '바질(미국산)'));
    topping.appendChild(add('topping', 'anchovy', '멸치(국산)'));

    menu.append(sauce, topping);
    return menu;
}

function add (type, name, description) {
    const element = document.createElement('div');
    element.classList.add('element');

    const img = document.createElement('img');
    img.src = `img/${type}_${name}.png`;
    img.alt = `${type} ${name}`;

    const nameTxt = document.createElement('h2');
    nameTxt.textContent = toUpper(`${name} ${type}`);

    const descriptionTxt = document.createElement('p');
    descriptionTxt.textContent = description;

    element.append(img, nameTxt, descriptionTxt);
    return element;
}

export default reloadMenu;