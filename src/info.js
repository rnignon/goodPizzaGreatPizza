function reloadInfo() {
    const info = document.createElement('div');
    info.id = 'info';

    const hall = document.createElement('img');
    hall.src = "img/pizza_hall.png";
    hall.alt = "Pizza hall";

    const kitchen = document.createElement('img');
    kitchen.src = "img/pizza_kitchen.png";
    kitchen.alt = "Pizza kitchen";

    const time = document.createElement('p');
    time.textContent = "영업시간 : 11:00 ~ 22:00"
    const call = document.createElement('p');
    call.textContent = "전화번호 : 123-456-7890"

    info.append(hall, kitchen, time, call);

    return info;
}

export default reloadInfo;