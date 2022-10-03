// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("colorShuffler", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"];
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];

        expect(colorShuffler(colors1)).toEqual(
            expect.arrayContaining([ 'pink', 'green', 'yellow', 'blue' ])
        );
        expect(colorShuffler(colors2)).toEqual(
            expect.arrayContaining([ 'aquamarine', 'indigo', 'ochre', 'periwinkle', 'saffron' ])
        );
    })
  })
// Good fail: "ReferenceError: colorShuffler is not defined"


// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

// PROCESS:
// first we'll create a function called colorShuffler calling on the array
// using the method array.shift() we can remove the first item from the array
// now with the first item gone, we can use the method array.sort() along with Math.random() to shuffle the items in the array around 
// lastly we return the array, and the output will be a randomly shuffled array with the first item removed
const colorShuffler = (array) => {
    array.shift()
    array.sort(() => 0.5 - Math.random())
    return array
}

// Test is currently failing, I'm not sure what's missing here, when console.logging the code it works exactly how I intend it to work, first item removed and the rest shuffled...
// (this is when I finally looked at the resource provided that I looked at and forgot about until now... 🤦‍♂️)
// I realized I was missing 'expect.arrayContaining' in my test, added that to my test and now works properly and passes!


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.


describe("voteNet", () => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {
        const votes1 = {upVotes: 13, downVotes: 2};
        const votes2 = {upVotes: 2, downVotes: 33};

        expect(voteNet(votes1)).toEqual(11);
        expect(voteNet(votes2)).toEqual(-31)

    })
})
// Good fail: ReferenceError: voteNet is not defined


// b) Create the function that makes the test pass.

// PROCESS
// first we'll create a function called voteNet calling on an object
// to receive the net total votes all we have to do is subtract the downvotes from the upvotes and we'll recieve the net total
// so we can just have votes = upvotes minus downvotes
// return votes, and we have our net total!
const voteNet = (obj) => {
    let votes = obj.upVotes - obj.downVotes
    return votes
}



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("arrayNoDupe", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

        expect(arrayNoDupe(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})

// Good fail: ReferenceError: arrayNoDupe is not defined


// b) Create the function that makes the test pass.
// first we'll make a function called arrayNoDupe accessing both arrays
// using Set we can remove duplicates, as Set lets you only store unique values, removind dupes in a new array
// we'll use a new spread operator on Set and on our arrays and when we return the new Set we'll get our new array with duplicates removed

const arrayNoDupe = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])]
}



