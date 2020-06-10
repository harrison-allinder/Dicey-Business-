document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById('generate-die'),
        rollButton = document.getElementById('roll-die'),
        sumButton = document.getElementById('sum-die'),
        diceContainer = document.getElementById('dice-container');

    let numOfDice = 0,
    diceArr = [];

    generateButton.addEventListener('click', () => {
        new Die();
    })
    rollButton.addEventListener('click', () => {
        diceArr.forEach(die => die.roll());

    })
    sumButton.addEventListener('click', () => {
        let sum = 0;
        diceArr.forEach(die => {
            sum = sum + die.value;
        });
        alert(sum);

    });

    class Die {
        constructor(value) {
            this.value = value;
            this.div = document.createElement('div');
            this.div.className = 'die';
            this.div.id = numOfDice++;
            this.roll();
            diceArr.push(this);
            console.log(diceArr);
            diceContainer.appendChild(this.div);

        }

        roll() {
            let randomVal = Math.floor((Math.random() * 6) + 1);
            this.value = randomVal;
            this.div.innerText = this.value;
        }
    }

})