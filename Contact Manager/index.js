function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function() {
        let x = this.name
        let y = this.number
        console.log(x + ": " + y)
    }
}

let a = new contact("David", 12345);
let b = new contact("Amy", 987654321);
a.print();
b.print();
