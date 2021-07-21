const { doors } = require("./zapasData");

class Car {
    constructor(data) {
        this.data = data;
        //console.log(this);
    }

    intro() {
        console.log(`This is ${this.data.brand}.`);
    }

    doorsCount() {
        console.log(`${this.data.brand} has ${this.data.doors.length} doors.`);
    }

    doorsWorking() {
        //susikuriame kintamaji duru kiekiui
        let workingDoorsCount = 0;
        //einame per sarasa ir tikriname ar durys veikia, jei salyga tenkina pridedame prie duru kiekio
        for (let i = 0; i < this.data.doors.length; i++) {
            const doors = this.data.doors[i];
            if (doors.working === true) {
                ++workingDoorsCount;
            }
        }
        //jei visos objekto saraso durys veikia, tenkinama pirma salyga(if), jei ne, antroji(else)
        if (this.data.doors.length === workingDoorsCount) {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors and all works! `);

        } else {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors, but only ${workingDoorsCount} is working.`);
        }
    }

    maxDistance() {
        const maxDistance = Math.round((this.data.tank.maxSize / this.data.fuelComsumption) * 100);

        console.log(`${this.data.brand} can travel maximum ${maxDistance} km.`);
    }

    canTravel(travelDistanceKm) {
        const distance = Math.round((this.data.tank.currentSize / this.data.fuelComsumption) * 100);
        if (travelDistanceKm < distance) {
            console.log(`${this.data.brand} can travel ${travelDistanceKm} km.`);
        } else {
            console.log(`${this.data.brand} can't travel ${travelDistanceKm} km, it has fuel only for ${distance} km.`);
        }
    }


}

module.exports = Car;


