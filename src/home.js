function reloadHome() {
    const home = document.createElement('div');
    home.id = 'home';

    const boss = document.createElement('img');
    boss.src = "img/pizza_people.png";
    boss.alt = "Pizza boss";
    home.appendChild(boss);

    let text = document.createElement('p');
    text.textContent = "좋은 피자, 위대한 피자에 어서오세요!"
    home.appendChild(text);
    text = document.createElement('p');
    text.textContent = "최고의 피자를 만듭니다!";
    home.appendChild(text);

    return home;
}

export default reloadHome;