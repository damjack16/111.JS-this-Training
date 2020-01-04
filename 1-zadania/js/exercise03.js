const freeza = {
    name: "Freeza",
    power: 86000000,
    print() {
        console.log(`
            Dane na temat bohatera:
            Nazwa: ${this.name}
            Moc: ${this.power}
        `);
    }
}

const goku = {
    name: "Goku",
    power: 100000000,
}

// Use print method from freeza object to goku object
freeza.print.call(goku)

// Use independent method by bind for goku object
const data = freeza.print.bind(goku);

data()