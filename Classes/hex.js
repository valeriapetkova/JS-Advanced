class Hex {
    constructor(num) {
        this.value = num;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${(this.value.toString(16)).toUpperCase()}`
    }

    plus(newValue) {
        if (typeof newValue === 'object') {
            return new Hex(this.value + newValue.value);
        } else {
            return new Hex(this.value + newValue);
        }
    }

    minus(newValue) {
        if (typeof newValue === 'object') {
            return new Hex(this.value - newValue.value);
        } else {
            return new Hex(this.value - newValue);
        }
    }

    parse(text) {
        return parseInt(text, 16);
    }
}