const ob = {
    name: "Kwiatek",

    init() {
        console.log("Nazywam się " + this.name);

        function showText() {
            console.log("Nazywam się " + this.name);
        }
        // showText function has this refers to the window object so it will dont show any name
        showText();
    }
}

ob.init();