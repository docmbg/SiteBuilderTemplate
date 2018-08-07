const numbersLetters = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function genColor() {
    let color = '#';
    while (color.length < 7) {
        color += numbersLetters[Math.floor(Math.random() * numbersLetters.length)];
    }
    return color;
}