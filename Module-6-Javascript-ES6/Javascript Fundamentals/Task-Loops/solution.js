
// for (let i = n; i >= 1; i--) {
//     // adding i to sum in each iteration
//     sum += i; // sum = sum + i
// }

// for (var i = 0;  i < 10; i++) {
//     console.log('Index:' + "  " + i)
// }


function printLoop(counter = 10) {
    for (var i = 0; i < counter; i++) {
        console.log('Index:' + "  " + i)
    }
}

// INVOKE!! ==> call the function..



/*
TASK

1. Create a for Loop for 10 Iterations

- Write a for loop that iterates 10 times.In each iteration, 
output the current index value to the console.

Index: 0
Index: 1
Index: 2

2. Create a function that has the index defined as a paramter.  When the funciton is called, it will
print out the number passed in as an argument.

printLoop(2)

Index: 1
Index: 2

printLoop(5)

Index: 1
Index: 2
Index: 3
Index: 4
Index: 5

*/