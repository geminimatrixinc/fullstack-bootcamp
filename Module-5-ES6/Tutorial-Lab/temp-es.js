
const user = {
    firstName: "mike",
    lastName: "denton",

    fullName: () => {
        //return user.firstName + " " + user.lastName;
        return `this is the full name: ${user.firstName}  ${user.lastName}`
    }
}

const first = user.firstName;
const second = user.lastName;

console.log(user.firstName)
console.log(user.fullName())


