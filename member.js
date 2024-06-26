function skillsMember() {
    var member = {
        name: 'John Doe',
        skills: ['JavaScript', 'React', 'Node'],
        details: {
            age: 30,
            country: 'USA'
        },
        greet: function() {
            console.log(`Hello, I'm ${this.name}`);
        }
    };

    // Access the properties
    console.log(member.name); // John Doe
    console.log(member.skills); // ['JavaScript', 'React', 'Node']
    console.log(member.skills[0]); // JavaScript
    console.log(member.details.age); // 30
    console.log(member.details.country); // USA

    // Call the method
    member.greet(); // Hello, I'm John Doe
}