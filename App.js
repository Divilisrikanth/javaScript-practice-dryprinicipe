const person={
    firstName:'john',
    lastName:'smith',
    getDetails: function(){
        return this.firstName +" "+ this.lastName;
    }

}
const person2={
    firstName:"Mitchell",
    lastName:"Marsh",
}
const person3={
    firstName: "Shaun",
    lastName:"Marsh"
}
const person4={
    firstName:"Larry",
    lastName:"page"
}
const person5={
    firstName:"sergey",
    lastName: "Brin"
}
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

console.log(person.getDetails.apply(person4))
console.log(person.getDetails.apply(person5))
console.log(person.getDetails())
console.log(person.getDetails.call(person2))
let getDetails=person.getDetails.bind(member);
console.log(getDetails())