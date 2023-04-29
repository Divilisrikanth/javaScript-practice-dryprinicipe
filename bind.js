// const person={
//     firstName:"larry",
//     lastName:"page",
//     fullName: function(){
//         return this.firstName +" "+this.lastName;
//     }
// }
// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName=person.fullName.bind(member)
// console.log(fullName)


const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName())