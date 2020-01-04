const animals = {
    time: 1000,
    pets: ['dog', 'cat', 'frog', 'rabbit', 'cow'],
    print() {
        const self = this;

        setTimeout(function () {
            for (let i = 0; i < self.pets.length; i++) {
                console.log(self.pets[i].toUpperCase())
            }
        }, self.time)
    }
}

animals.print()