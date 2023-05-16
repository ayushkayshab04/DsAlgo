
//1st ex.
// const nemo = ["dory","nemo Dad","marlin","nemo","squirt","darla","hank","nigel","bloat"]

// function findNemo(arr){
//     for(let i = 0 ; i<arr.length;i++){
//         console.log("running")
//         if(arr[i] === "nemo"){
//             console.log("Found Nemo!")
//             break;
            
//         }
//     }
// }


// findNemo(nemo)  //O(n)

//2nd ex. Big oh rule 1
// function funChallenge(input){
//     let a = 10 ; //O(1)
//     a=50+3; //O(1)

//     for(let i = 0; i<input.length;i++){//O(n)
//         anotherFunction();//O(n)
//         let stranger = true;//O(n)
//         a++ // O(n)
//     }
//     return a //O(1)
// }

// funChallenge();

//3rd ex.Big Oh rule 2

// function printFirstItemThenFirstHalfThenSatHi100Times(items){
//     console.log(items[0])

//     var middleIndex = math.floor(items.length/2);

//     var index = 0;

//     while (index< middleIndex){
//         console.log(items[index])
//         index++
//     }

//     for(var i = 0;i<100;i++){
//         console.log("hi");
//     }
// }

//O(n)

// function booo(n){
//     for(let i = 0 ; i< n.length;i++){
//         console.log("booooo")
//     }
// }

// booo([1,2,3,4,5]) 

//O(1)

// function arrayOfHiNTimes(n) {
//     let hiArray = []; //Created new data structure which requires space 

//     for (let i = 0; i < n; i++) {
//         hiArray[i] = "hi"
//     }
//     return hiArray
// }

// console.log( arrayOfHiNTimes(6))
//O(n)


//Q1-Find the first and last tweet of an account?
//Find 1s, Find Nth...
// const array = ["hi","this","Tweet"]
// array[0]
// array[array.length-1]

//Q2-Compare the dated of the tweets?

// const array = [
//     {
//         tweet: "hi",
//         date: 2012
//     }, {
//         tweet: "this",
//         date: 2014
//     }, {
//         tweet: "Tweet",
//         date: 2018
//     }
// ]

//o(n^2)

//Q3 - length of an string

// "sdvcsdvsdvsdvsdvsdv".length
//It is an property of an object O(n)
