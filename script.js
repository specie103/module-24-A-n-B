let people = [{
        name: "Eliza",
        city: "Los Angeles",
        likes: ["pizza", "karaoke", "improv", "dancing"],
    },
    {
        name: "Shiela",
        city: "Denver",
        likes: ["photography", "painting", "movies"],
    },
    {
        name: "Ben",
        city: "Los Angeles",
        likes: ["pizza", "karate", "sci-fi", "poetry"],
    },
    {
        name: "Mohammed",
        city: "Los Angeles",
        likes: ["sailing", "golf", "kayaking"],
    },
    {
        name: "Yukiko",
        city: "Tokyo",
        likes: ["ramen", "karaoke", "jazz", "hamburgers"],
    },
    {
        name: "Chris",
        city: "Brooklyn",
        likes: ["pizza", "karaoke", "improv", "cooking"],
    },
];

//1A. Write a function 'findPerson' called with an array of people and a name, it should return a person object that matches

function findPerson(people, nameToMatch) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].name === nameToMatch) {
            return people[i];
        }
    }
}
console.log(findPerson(people, "Eliza"));

console.log('***************************************************');


// function addLike(people, topic) {
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].likes === topic) {
//             people[i].likes.push(topic);
//             return people[i];
//         }
//     }

// }
// console.log(addLike(people, "pizza"));

// console.log('***************************************************');


//1B. Secondly, write an 'addLike' function. Write a function 'addLikeToPerson' using the helper functions

function addLikeToPerson(people, nameToMatch, topic) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].name === nameToMatch) {
            people[i].likes.push(topic);
            return people[i];
        }
    }
}
console.log(addLikeToPerson(people, "Chris", "coding"));

console.log('***************************************************');


//2. Write a function 'countThePeople'with a loop inside a loop
function countLikesByTopic(people, topic) {
    // create a count and set it to zero
    let count = 0;
    // loop through the collection of people
    for (let i = 0; i < people.length; i++) {
        // loop through the collection of likes for that person
        for (let j = 0; j < people[i].likes.length; j++) {
            // if the like matches the topic, add one to the count
            if (people[i].likes[j] === topic) {
                count++;
            }
        }
    }
    // return the count
    return count;
}
console.log(countLikesByTopic(people, "pizza"));

console.log('***************************************************');



// 1. Write chained if/else if statements to fulfill the following conditions:
// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function testSize(num) {
    if (num < 5) {
        console.log("Tiny");
    } else if (num < 10) {
        console.log("Small");
    } else if (num < 15) {
        console.log("Medium");
    } else if (num < 20) {
        console.log("Large");
    } else {
        console.log("Number is Huge");
    }
}

testSize(29);

console.log('***************************************************');


//2. Create a function called addCandyToInventory that takes in:

let inventory = [
    { candy: "Skittles", inStock: 180, weeklyAverage: 200 },
    { candy: "M&Ms", inStock: 90, weeklyAverage: 100 },
    { candy: "Snickers", inStock: 300, weeklyAverage: 170 },
    { candy: "Starburst", inStock: 150, weeklyAverage: 40 }
];

let newCandy = {
    candy: "Mars",
    inStock: 200,
    weeklyAverage: 10,
}

function addCandyToInventory(inventory) {
    inventory.push(newCandy);
    console.log(inventory);
}
addCandyToInventory(inventory);