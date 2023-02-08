const keys = document.querySelectorAll('.key');
const display_output = document.querySelector('.display .output')
const display_input = document.querySelector('.display .input');

let input = ""

for (let key of keys) {
    let value = key.dataset.key

    key.addEventListener('click', () => {
        if (value === "clear" || value === 'all clear') {
            input = ""
            display_input.innerHTML = ""
            display_output.innerHTML = ""
        } else if (value === 'backspace') {
            input = input.slice(0, -1)
            display_input.innerHTML = input
        } else if (value === "=") {
            let result = eval(input)
            display_output.innerHTML = result;
        } else if (value === 'dot') {
            input = input + "."
            display_input.innerHTML = input
        } else {
            input += value
            display_input.innerHTML = input
        }
    })
}