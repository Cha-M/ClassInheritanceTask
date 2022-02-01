const a = "hello";
const b  = 1;
const c = false;

const d = [1,2,3,4];

d.push(5);

for (let i of d)
{
    console.log(d);
}

let balance = 1000;
// let amount = 0;

const withdraw = () => {
    let amount = prompt("How much do you want to withdraw?")
    balance -= amount;
    alert(`You have ${balance} remaining.`)

};

// let rosie = {
//     _name: "Rosie",
//     _thirst: 50,
//     _isWiggling: false,
//     _isHopping: false,
//     get name() {
//         return this._name;
//     },
//     get drink() {
//         this._thirst -= 10;
//         return this._thirst; 
//     }
// }

// console.log(rosie.name);
// console.log(rosie.drink);


let rosie = {
    _name: "Rosie",
    _thirst: 50,
    _isWiggling: false,
    _isHopping: false,


}
withdraw();


class Cars {
    constructor(reg, arrival, hourlyRate) {
        this._reg = reg;
        this._arrival = arrival;
        
        this._hourlyRate = hourlyRate;
        this._parkingPaid = false;
    }
    // _hoursParked = 0;
    // _reg = "ABC1";
    // _hourlyRate = 1.50;
    doDeparture(departure) {
        this._departure = departure;
    }
    get hoursParked() {
        return this._hoursParked;
    }
    get reg() {
        return this._reg;
    }
    get hourlyRate() {
        return this._hourlyRate;
    }
    payTotal(departure) {
        return (departure - this._arrival) * this._hourlyRate;
    }
    makePayment(amountPaid) {
        if (amountPaid >= this.payTotal())
        {
            console.log("Paid");
        }
        else
        {
            console.log("Not paid");
        }
    }
}

let firstCar = new Cars("ABC1", 3, 4);
firstCar.doDeparture(17);

alert(`Pay ${firstCar.payTotal()}`);

class Enemy {
    constructor(name, health) {
        this._name = name;
        this._health = health;
        this._weapons = ["sword", "bow"];
    }

    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
    get weapons() {
        return this._weapons;
    }

    reduceHealth(amount) {
        return this._health -= amount;
    }
}

// class Bunny extends Enemy {
//     constructor(name, lovesCarrot) {
//         super(name);
//         this._lovesCarrot = lovesCarrot;
//     }
//     get lovesCarrots() {
//         return this._lovesCarrot;
//     }
// }

const enemy1 = new Enemy("Jordan", 110);


enemy1.reduceHealth(100);
console.log(enemy1.health);

class Bunny extends Enemy {
    constructor(name, lovesCarrot) {
        super(name);
        // dynamic stuff needs to be passed through
        this._lovesCarrot = lovesCarrot;
    }
    get lovesCarrots() {
        return this._lovesCarrot;
    }
}

const rosie2 = new Bunny ("Rosie", true);