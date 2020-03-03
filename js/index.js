const calc = {
    addBtn: document.querySelector('button'),
    inputText: document.querySelector('input'),
    h1: document.querySelector('h1'),
    total:0,
    init() {
        this.addBtn.addEventListener('click',this.add.bind(this));
    },

    add() {
        let input = this.inputText.value;

        this.total += Number(input);
        this.h1.textContent = `New value is ${this.total}`;

        this.inputText.value = '';
    }
};

calc.init();