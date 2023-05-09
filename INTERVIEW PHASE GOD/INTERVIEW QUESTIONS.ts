export {};
// Write a function that takes a string and returns the number of vowels in the string. Do not use any inbuilt methods.

// function countVowels(str){
// let map = new Map([["a",1],["e",1],["i",1],["o",1],["u",1]])
// let count =0
// for(let char of str){
//   if(map.get(char)) count++
// }
// return count
// }

// console.log(countVowels("sainath"));

// function countVowels(str) {
//   const vowels = /[aeiou]/gi;
//   const matches = str.match(vowels);
//   return matches ? matches.length : 0;
// }

/*The reason that the Map method may not be as efficient for longer strings is because it involves iterating over each character in the string and performing a lookup in the Map for each character.

For example, consider the string "the quick brown fox jumps over the lazy dog", which contains 32 characters. Your countVowels function would need to iterate over each character and perform 32 lookups in the Map to determine the count of vowels in the string.

In contrast, the regular expression solution I provided earlier uses the match() method, which internally uses a highly optimized algorithm to efficiently search the input string for matches to the given regular expression.

For longer strings, the overhead of iterating over each character and performing lookups in the Map could become significant, especially if the Map contains a large number of entries. In such cases, using a regular expression or other more efficient algorithms and data structures may be more appropriate. **/

// Write a function that takes two arrays of integers and returns a new array containing the intersection of the two arrays (i.e., the values that are present in both arrays). Do not use the filter() or includes() methods.

// function intersectionOnly(arr1:number[], arr2:number[]):number[] {
// // [1,2,3] [2,3,4]

// // taking two pointers which i will be moving on two arrays
// //according to the condition

// let i=0, j=0, result:number[] =[]
// while(i<arr1.length && j<arr2.length){
//   if(arr1[i]==arr2[j]){result.push(arr1[i])
//     console.log(arr1[i]);
//     i++
//     j++}
// else if(arr1[i]<arr2[j])i++
// else if(arr1[i]>arr2[j])j++
// }

// return result
// }
// console.log(intersectionOnly([2,3,4],[3,4,5]));
// function intersectionOnly(arr1 , arr2){

//   let result =[]

// let i=0, j=0
// while(i<arr1.length && j < arr2.length){
// if(arr1[i]===arr2[j]){result.push(arr1[i])
// i++
// j++}
// else if(arr1[i]>arr2[j])j++
// else i++
// console.log(i,j,result);
// }
// return result
// }

// console.log(intersectionOnly([1,2,3,5,6], [2,4,5,7]));

//Write a function that takes a string and returns the first non-repeated character in the string. Do not use any inbuilt methods.
// function firstNonRepeatedChar(str:string){
//   //put a pointer on the 1st char if it is repeared i will move forward
//   //if it is not repeated just return it
// for(let i=0; i<str.length; i++){
//   for(let j=i+1; i<str.length;j++){
//     let flag =0
// if(str[i]==str[j]) break
// else if(j==str.length-1 ) return str[i]
//   }
// }
// }
// console.log(firstNonRepeatedChar("sainaths"));

//Write a function that takes a sorted array of numbers and a target number, and returns the index of the target number in the array. If the target number is not in the array, return -1. Do not use the indexOf() method.

// function findNumIndex(arr: number[], target: number) {
//   let start = 0,
//     end = arr.length-1,
//     mid = Math.floor((start + end) / 2);
//   while (start <= end) {
//     if (arr[mid] == target) return mid;
//     else if (arr[mid] > target) {
//       end = mid-1;
//       mid = Math.floor((start + end) / 2);
//     } else if (arr[mid] < target) {
//       start = mid+1;
//       mid = Math.floor((start + end) / 2);
//     }
//   }
//   return -1
// }

// function findNumIndex(arr: number[], target: number) {
//   let start = 0,
//     end = arr.length - 1, // subtract 1 from the length to get the last index of the array
//     mid = Math.floor((start + end) / 2);
//   while (start <= end) { // add stopping condition
//     if (arr[mid] == target) return mid;
//     else if (arr[mid] > target) {
//       end = mid - 1; // update end index
//       mid = Math.floor((start + end) / 2);
//     } else if (arr[mid] < target) {
//       start = mid + 1; // update start index
//       mid = Math.floor((start + end) / 2);
//     }
//   }
//   return -1; // target number not found
// }

// console.log(findNumIndex([1, 2, 3, 4, 5, 6, 7], 8)); // -1

// console.log(findNumIndex([1, 2, 3, 4, 5, 6, 7], 9));

//Write a function that takes an array of strings and returns the longest common prefix of the strings. Do not use any inbuilt methods.

//loop on first string  + loop on other string
//set the prefix first string then loop & set the prefix suitably

// function commonPrefix(strs:string[]){
//   let prefix = strs[0],str =""
// for(let i=1; i<strs.length; i++){
//   let j=0
//   str=""
// while(prefix[j]==strs[i][j]){
//   str +=prefix[j]
//   j++
// }
// prefix=str

// }

// return prefix? prefix : "no prefix"
// }

// function commonPrefix(strs: string[]): string {
//     let prefix = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//       let j = 0;
//       while (j < prefix.length && prefix[j] === strs[i][j]) {
//         j++;
//       }
//       prefix = prefix.substring(0, j);
//       if (prefix === "") {
//         return "no prefix";
//       }
//     }
//     return prefix;
//   }

// console.log(commonPrefix(["pam", "pamil", "pamila", "paaa"]));

//Write a function that takes a string and returns the length of the longest substring without repeating characters. Do not use any inbuilt methods.
// function longSubString(str: string) {
//   //will create a map
//   //map will be reset each time as the repeated char comes in & start again
//   //so i will be storing the longest string i have encountered

//   let result: string = "",
//     max: string = "",
//     map = new Map();

//   for (let char of str) {
//     if (map.get(char)) {
//       if(max.length<result.length) {
// max = result
//       }
//       map = new Map();
//       map.set(char, 1);

//     } else {
//       map.set(char, 1);
//       result += char;
//     }
//   }
//   return max
// }

// console.log(longSubString("sainath"));
//Write a function that takes an array of integers and returns the smallest positive integer that is not present in the array. Do not use any inbuilt methods.()

// function missingSmallest(arr: number[]) {
//   let i = 1;
//   while (i < arr.length + 1) {
//     if (arr[i - 1] != i) return i;
//     i++;
//   }
// }
// console.log(missingSmallest([1, 2, 4, 5, 6, 9, 10]));

//Write a function that takes an array of strings and returns a new array containing only the strings that have a length greater than the average length of all the strings. Do not use any inbuilt methods.

//return only those strings whose length is greater than avg

// so i will loop on whole array & get all strings length one by one & add them
// {
// let arr = ["sai", "god", "monjulika", "godOfwar", "dilhairmehindi", "gajaria"]

// let sum = 0, result:string[] = []
// for(let char of arr){
// sum+= char.length
// }
// let avg:number =sum/arr.length
// console.log(avg);
// for(let char of arr){
//     if(char.length>avg) result.push(char)
// }

// console.log(result);}

// function filterStrings(arr: string[]): string[] {
//     let sum = 0;
//     let result: string[] = [];
//     for (let char of arr) {
//       sum += char.length;
//       if (char.length > sum / arr.length) {
//         result.push(char);
//       }
//     }
//     return result;
//   }

//   console.log(filterStrings(["sai", "god", "monjulika", "godOfwar", "dilhairmehindi", "gajaria"]));

//Write a function that takes two sorted arrays of integers and returns a new sorted array containing the union of the two arrays (i.e., all the values from both arrays with duplicates removed). Do not use any inbuilt methods.

//removing the duplicates
//& also merge the array
//MY METHOD
// function nonDupMerge(arr1:number[], arr2:number[]):number[]{

// //merging two array
// //moving two pointers similarly
// //as soon as the larger no. comes into picture in arr1 than arr2, push the smaller no. then do j++ pointer in arr2
// //& check will happen again as per the comparison the resulting element will get pushed
// let i=0,j=0,result:number[]=[],temp:number = NaN
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]==arr2[j]){
//         if(temp==arr1[i]) {i++;j++;continue; }
//         result.push(arr1[i]); i++;j++
//         temp = arr1[i]
//     }
//     else if (arr1[i]>arr2[j]){
//         if(temp==arr2[j]) {j++;continue}
//         result.push(arr2[j]); j++
//     temp = arr2[j]
// }
//     else if(arr1[i]<arr2[j]) {

//         if(temp==arr1[i]) {i++;continue}
//         result.push(arr1[i]); i++
//         temp = arr1[i]
// }

// }
// return result
// }

//CHAT GPT
// function nonDupMerge(arr1: number[], arr2: number[]): number[] {
//     let i = 0, j = 0;
//     const result: number[] = [];
//     //TEMP variable creation eliminated
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] === arr2[j]) {
//         if (arr1[i] !== result[result.length - 1]) {
//           result.push(arr1[i]);
//         }
//         i++; j++;
//       } else if (arr1[i] < arr2[j]) {
//         if (arr1[i] !== result[result.length - 1]) {
//           result.push(arr1[i]);
//         }
//         i++;
//       } else {//eliminated the condition check
//         if (arr2[j] !== result[result.length - 1]) {
//           result.push(arr2[j]);
//         }
//         j++;
//       }
//     }
//     //pushing the res
//     while (i < arr1.length) {
//       if (arr1[i] !== result[result.length - 1]) {
//         result.push(arr1[i]);
//       }
//       i++;
//     }

//     while (j < arr2.length) {
//       if (arr2[j] !== result[result.length - 1]) {
//         result.push(arr2[j]);
//       }
//       j++;
//     }

//     return result;
//   }

// console.log(nonDupMerge([1,1,1,2,2,3,3,4],[2,3,4,4,5,6,7]));

//Write a function that takes a string and returns true if the string is a valid palindrome, ignoring spaces and punctuation, false otherwise. Do not use any inbuilt methods.

// function validPalindrome(str:string){
// str = (str.match(/[a-zA-Z]/g) ?? [])?.join("")
// //as the str.match() will return a null to when nothing matched so we had to go for ?? " nullish coalescing operator" ," optional chaining operator (?.) "
// let i=0, j=0
// while(i<j){
// if(str[i]!=str[j]) return false
// i++
// j++
// }
// return true
// }
// console.log(validPalindrome("sainah, htanias."));

/* 
//input: [4, 5, 2, 25, 13];
 //output: [5, 25, 25, -1, -1]

**/
//MY ATTEMPT OF TWO POINTER METHOD FAILED
//i made it even more complicated it is o(n2)
//but i saved the space
// function nextGreater(arr:number[]){
// //move the two pointer, fix one pointer at puting the max & one pointer for searching the greatest
// let j=1, i=0, nextMax:number = arr[0]
// while (j<arr.length) {
//   console.log(i,j,arr,"start");
//     if(arr[j]>=nextMax){
//   while(i<=j-1){
//     arr[i]= arr[j]
//     i++
//     console.log(i,j,arr,"middle");

//   }

//         nextMax = arr[j]

//     }
//     j++
//     console.log(i,j,arr,"end");

// }
// //putting the rest of next elements as -1
// while(i<arr.length){
//     arr[i]=-1
//     console.log(i,j,arr,"rest");
//     i++
// }
// return arr
// }

// function nextGreater(arr) {
//   const n = arr.length;
//   const result = [];

//   for (let i = 0; i < n; i++) {
//     let j;
//     for (j = i + 1; j < n; j++) {
//       if (arr[j] > arr[i]) {
//         result.push(arr[j]);
//         break;
//       }
//     }
//     if (j === n) {
//       result.push(-1);
//     }
//   }

//   return result;
// }

//chat gpt attempt
// function nextGreater(arr: number[]) {
//     const n = arr.length;
//     const result = Array(n).fill(-1); // Initialize all elements to -1
//     let stack: number[] = [];

//     for (let i = 0; i < n; i++) {
//       while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
//         result[stack.pop() as number] = arr[i]; // Update the next greater element
//       }
//       stack.push(i); // Push the current index onto the stack
//     }

//     return result;
//   }

// function nextGreater(arr:number[]){
//   //stack question, why do you think ,we got to go for stack method

//   //iam pushing a next greater index into stack, stack and if grater val is found then
//   let stack:number[]= [], n=arr.length

//   const result = Array(n).fill(-1)

//   for(let i=0; i<n; i++){

//     while(stack.length>0 && arr[i]>arr[stack[stack.length-1]]){
//       result[stack.pop() as number] = arr[i];
//     }
//     stack.push(i)
//   }
// return result
// }

// console.log(nextGreater([4, 5, 2, 25, 13]));


/**
 why does node.js creates an event for the request & adds it to the event loop's queue why not add it to the callstack?


Node.js delegates this operation to the underlying operating system and continues processing other events., how does the processing of events siimultaiously happen?

//write in detail the funcitioning of node.js final


 */





// 8. Prime factor
// 9. Print fibbonacci series
// 10. Print only prime number in fibonacci series upto n
// 11. Check for magic number
// 12. Check for associative sum
// 13. Check for multiplication associative

//prime factors

//prime no.s in range
//how can i write a optimised code here
//i will consider the starting index to be n
//function takes in n,m



// function factorial(n: number): number {
//     if (n <= 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }

// console.log(factorial(5));

//THIS ONE DOESNT WORK IN TS, ABOVE DOES ,WHY?
// function factorial(n:number){
//     if(n<=1) return 1
//     return n*factorial(n-1)
//     }
//     console.log(factorial(5));


// //prime no.s groupoing

// function grouping(n:number){
//     //generate the prime no.s
//     // & push the prime according to multiples of 10
//     //i will keep the const which will increase in multiples of 10
// let seen = Array(n+1).fill(0), godVariable =10,subset:number[]=[],result:number[][]=[]
//     for(let i=2; i<=n; i++){
 
//         if(seen[i]) continue
//         else{
//             if(i>godVariable) {result.push(subset)
//             godVariable+=10
//             subset=[]
//             }
//             subset.push(i);
//             for(let mult=i; mult<=n; mult+=i ){
//                 seen[mult]=1
//             }

//         }
//     }
//     result.push(subset)
//     return result
// }

// console.log(grouping(100));

/**
 o/p=>[ [ 5, 2 ], [ 9, 8 ] ]

 */

// function sai(nums:number[],target:number){
// let map = new Map(), result:number[][] =[]
// for(let i=0; i<nums.length; i++){
//   map.get(nums[i])? map.set(nums[i], [i,...map.get(nums[i])]) : map.set(nums[i], [i])
// }
// // console.log(map.get(8));
// for(let i=0; i<nums.length; i++){
//     if(map.get(target-nums[i])) {
//         let god =map.get(target-nums[i]).pop()
//         if(god>=i) continue
//         result.push([i,god])
//     }
// }
// return result
// }
// console.log(sai([8,5,6,7,8,4,19,60,4,6], 10));

//todo is really simple app
//but experimenting with  lot other concepts like, useRef & implimenting the context api & redux , & using usecallback & all other concepts would really will make you god of gods, play with application
//styling added to li components


//decending order no,s

//implement merge sort in decending order
//function takes in random array 
// function mergeSort(arr:number[]){
// //recursive call
// //split the array until becomes array of 1 element 
// // & then sort it

// }
// console.log(mergeSort([3,2,1,5,6,7]));

// reverse words in string
// function takes in string 
// function reverseWordsInString(str:string){
// //while loop which loops on string 
// //& push the reversed as soon as the space comes in
// let i=0, result:string[]=[], revWord=""
// while(i<str.length){
//     if(str[i]===" "){
//         result.push(revWord)

//     }else{
//         str+= str[i]
//     }

// }
// }

//my mentality of taking more & more questions & perfecting on the previous


