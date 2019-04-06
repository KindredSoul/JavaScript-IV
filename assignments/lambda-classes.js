// CODE here for your Lambda Classes
class Person {
    constructor(personInfo) {
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.gender = personInfo.gender;
        this.location = personInfo.location
    }
    greet() {
        return console.log(`Hello, my name is ${this.name}, I am from ${this.location}. Nice to meet you.`);
    }
}

class Instructor extends Person {
    constructor (instructorInfo) {
        super (instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase
    }
    demo(subject) {
        return console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        return console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor (studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects
    }
    listsSubjects(favSubject1, favSubject2) {
        return console.log(`My favorite subjects are ${favSubject1} and ${favSubject2}.`);
    }
    PRAssignment(subject) {
        return console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        return console.log(`${this.name} has begun a sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(PMInfo) {
        super(PMInfo);
        this.gradClassName = PMInfo.gradClassName;
        this.favInstructor = PMInfo.favInstructor
    }
    standUp(channel) {
        return console.log(`${name} announces to ${channel}, @channel standy times`)
    }
    debugsCode(student, subject) {
        return console.log(`${name} debugs ${student.name}'s code on ${subject}`)
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  fred.demo("React");