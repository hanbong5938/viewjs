function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomData(num) {
    const temp = [];
    for (let i = 0; i < num; i++) {
        temp[i] = Math.floor(Math.random() * 101);
    }
    return temp;
}

function getRandomName(num) {
    const letters = '가나다라마바사아자차카타파하'
    let temp = '';
    for (let i = 0; i < num; i++) {
        temp += letters[Math.floor(Math.random() * letters.length)]
    }
    return temp;
}

export {
    getRandomName, getRandomData, getRandomColor
}