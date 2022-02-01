class Cars {
    constructor(reg, arrival) {
        this._hourlyRate = 7.50;
        this._reg = reg;
        this._arrival = arrival;
        this._parkingPaid = false;
        this._amountPaid = 0;
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

    doDeparture(departure) {
        this._departure = departure;
    }


    pay(amountPaid) {
        this._amountPaid = amountPaid;
        alert(`You have paid ${amountPaid}.`);
    }
    payTotal() {
        // alert("Hi, payTotal", `Pay (${this._departure})(${this._arrival}) (${this._hourlyRate})`);
        console.log("Hi, payTotal", `Pay (${this._departure})(${this._arrival}) (${this._hourlyRate})`);
        return (this._departure - this._arrival) * this._hourlyRate;
    }
    demandPayment() {
        alert(`Pay ${this.payTotal()}`);
    }
    resolveBalance() {
        // alert(this._amountPaid);
        // alert(this.payTotal());
        if (this._amountPaid >= this.payTotal())
        {
            alert("Your parking is paid in full.");
            this._parkingPaid = true;
        }
        else
        {
            alert(`You have ${this.payTotal() - this._amountPaid} left to pay.`);
        }
    }
    carExit() {
        if(this._parkingPaid == true)
        {
            alert("Your car can leave.");
        }
    }

}

// let firstCar = new Cars("ABC1", 3);

// firstCar.doDeparture(8);
// firstCar.demandPayment();
// firstCar.pay(30);
// firstCar.resolveBalance();
// firstCar.pay(7.5);
// firstCar.resolveBalance();
// firstCar.carExit();

// Let’s continue with our car park project.
// Add a subclass for staff, so that staff can provide their
// staff number, and credits they have left to pay for the
// car park fees.
// Given a staff member parked for 5 hours as before,
// show how much it will be charged and remaining
// balance.

// class staffCars extends Cars {
//     constructor(reg, arrival, staffNum, credits) {
//         this.staffNum = staffNum;
//         this.credits = credits;
//         super(reg, arrival);
//     }

//     useCredits() {
//         super._amountPaid += super.credits;
//         super.credits = 0;
//         alert(`You have used your credits and have ${super.payTotal() - super._amountPaid} left to pay.`);
//     }
    
// }

class staffCars extends Cars {
    constructor(reg, arrival, staffNum, credits) {
        super(reg, arrival);
        // this._reg = ;
        // this._arrival = ;
        this._staffNum = staffNum;
        this._credits = credits;
    }

    doDeparture(n) {
        super.doDeparture(n);
    }
    demandPayment() {
        super.demandPayment();
    }
    resolveBalance() {
        super.resolveBalance();
    }
    carExit() {
        super.carExit();            
    }
    

    useCredits() {
        // alert("Hi, usecredits", `Pay (${this._departure})(${this._arrival}) (${this._hourlyRate})`);
        // console.log("Hi, usecredits", `Pay (${this._departure})(${this._arrival}) (${this._hourlyRate})`);
        
        this._amountPaid += this._credits;
        this._credits = 0;

        // let n = this.payTotal() - this._amountPaid;
        // alert(`You have used your credits and have ${n} left to pay.`);
    }
    
}

let workerCar = new staffCars("123A", 5, "4321", 7);

workerCar.doDeparture(10);
workerCar.demandPayment();
workerCar.useCredits();
workerCar.resolveBalance();
workerCar.carExit();
