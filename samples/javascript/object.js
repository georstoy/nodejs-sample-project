const user = {
    name: "Stoyan",
    age: 30,
    greet() {
        console.log('Hey, it\'s '+this.name+' here!');
    }
};

user.greet();