let newDie = document.getElementById('newDie');
let rollDice = document.getElementById('rollDice');
let sumDice = document.getElementById('sumDice');
let container = document.getElementById('container');
let dice = [];
////////////////////////////////////////////////////////
newDie.addEventListener('click', function(){
    let die = new Die();
    dice.push(die);
});
////////////////////////////////////////////////////////
rollDice.addEventListener('click', function(){
    for (i = 0; i < dice.length; i++) {
        dice[i].roll();
        dice[i].textContent = dice[i].value;
    };
});
////////////////////////////////////////////////////////
sumDice.addEventListener('click', function(){
    let totalSum = 0;
    for (i = 0; i < dice.length; i++){
        totalSum += dice[i].value;
    };
    alert('The sum of all dice is ' + totalSum);
});
///////////////////////////////////////////////////////
class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.div.textContent = this.value; 
        this.roll();
        container.appendChild(this.div);
    /////////////////////////////////////////////////// 
        this.div.addEventListener('click', () => { 
            this.roll(); 
        });
    ///////////////////////////////////////////////////
        this.div.addEventListener('dblclick',()=>{
            let deleter = 0;
            dice.forEach((die, activate) => {
                if (this.value == die.value) {
                    deleter = activate;
                };
            });
            dice.splice(deleter, 1);
            container.removeChild(this.div);
        });
    };
    ///////////////////////////////////////////////////
    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.div.textContent = this.value;
    };
};
    