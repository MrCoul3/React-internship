class Transport {
    constructor(type, price, vendor, model) {
        this.type = type;
        this.price = price;
        this.vendor = vendor;
        this.model = model;
    }

    getInfo() {
        console.log(this.vendor)
        return `${this.vendor}, ${this.model}`;
    }

    getPrice() {
        return this.price.toLocaleString('ru-RU') + ' ₽';
    }
}

let t = new Transport('as', 1212, 'sdasd', 'sds')
t.getInfo()

class Car extends Transport {
    constructor(vendor, model, doorsCount, price) {
        super(price, vendor, model);
        this.doorsCount = doorsCount;
    }

    getDoorsCount() {
        return `Кол-во дверей: ${this.doorsCount}`;
    }
}

class Bike extends Transport {
    constructor(vendor, model, maxSpeed, price) {
        super('bike', price, vendor, model);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return `Макс. скорость: ${this.maxSpeed} км/ч`;
    }
}
