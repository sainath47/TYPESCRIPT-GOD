export {};
//FUNCTIONS
//AFTER EVERY MAJOR HEADING 

// function square(num: number){
//     return num* num
// }

// square(3)
// // square(true) // this will give error

//  const doSomething = (person: string, age: number, isFunny:boolean)=>{

//  }

// //  doSomething("sainath") //this line gives out error as you have given only 1 parameter only of 3 // very strict, pass all if provided

// //now how do we provide default value?

// function greet(person: string = "stranger"){
//     return `Hi there ${person}`
// }

// // greet()// now we dont pass in person compulsryly//as the default value is given

// //so we have talked about ANNOTATING the function parameters
// //we can also ANNOTATE, what function should be returning

// const areYouBoring = (answer:boolean = false):string| boolean =>{

// if(answer == true) return true
// else return "NOOOOOOO"

// }
// // i installed ts-node globally for code execution
// console.log(areYouBoring());

// // VOID  is usually used for tellig that this function doesnt return anything

// //NEVER  is return type which never returns any see the below fucntion & hover over the variable name.
// const fun = ()=>{
// while(true){
//     console.log("Jamm");
// }
// }
// // console.log(fun());

//OBJECTS
// describe the shape of the object
// function name(person: { first: string; last: string }) {
//   return `${person.first}${person.last}`;
// }
// console.log(name({first:"sai", last:"nath"}))

//so you cant pass extra parameter but through variable, you can pass more parameters but not less than required by function, in the variable form but not directly into the function
// const t ={first:"sai", last:"nath", title:"reddy"}
// console.log(name(t))

// let coordinate:{x:number , y:number} = {x:34,y:50}

// // function randomCoordinate():{x:number, y:number}//here the object denotes the object which function will return
// // {
// //     return {x:56,y:78}
// // }

// //NESTED OBJECT
// type song ={
//     title:string,
//     artist:string,
//     numStrems:number,
//     credits:{
//         producer: string,
//         writer: string
//     }
// }
// function printSong(mySong :song ):void{
//     console.log(`${mySong.title}-    ${mySong.artist}`);
//     }

//     printSong({
//         title:"chamakchalo",
//         artist:"god",
//         numStrems:9999999999999,
//         credits:{
//             producer:"Phil Spector",
//             writer: "Alex North"
//         }
//     })

// //how to make some of the properties to be optional

// type man = {
// name: string
// type: string
// strength?:string // now this one became optional with the help of question mark
// weakness?:string
// }
// const par = {
//     name: "sai",
//     type:"god",

// }
// function test(parame:man= par ){
//     console.log(parame);
// }

// test()

// // how to make a property readonly

// type User = {
//     readonly id: number
//     userName: string
// }

// const user: User ={
//     id: 12837,
//     userName: "god's guru"
// }

// console.log(user.id);
// // user.id = 55645364  // this will give out as you said the property is readonly
// user.userName = "sainath"

// //COMBINING THE TYPES

// type Circle = {
//     radius: number
// }

// type Colorful = {
//     color: string
// }

// type ColorfulCircle = Circle & Colorful

// const happyFace : ColorfulCircle ={
//     radius : 4,
//     color: "yellow"
// }

// /////
// type Cat ={
//    numLives :  number
// }

// type Dog = {
//     breed: string
// }

// type CatDog = Cat & Dog & {
//     age : number
// }

// const christy : CatDog ={
//     numLives : 7,
//     breed: "Husky",
//     age: 9
// }

//ARRAYS
// const users: string[] = ["colt"];
// const rollNo: number[] = [1];

// // const bools : Array<boolean> = []
// const bools: boolean[] = [];

// type Point = {
//   x: number;
//   y: number;
// };

// const coords: Point[] = [];
// coords.push({ x: 23, y: 8 });
// coords.push({ x: 23, y: 8 });

// const board: string[][] = [
//   ["X", "O", "X"],
//   ["X", "O", "X"],
//   ["X", "O", "X"],
// ];
//array of array of strings

// const demo: number[][][] = [[[1]]];

//now above we have handled only single type of array either it is array of strings or array of objects

// //UNION TYPES

// // //with variables
// // let age : string | number = 25
// // age = "70"

// // //with functions

// // function printAge(age:number  | string) : void {
// //     console.log(`You are ${age} years old`);
// // }

// // printAge('25')

// let mood: "happy" | "joy" = "joy";

// mood = "joy";

// type DayOfWeek =
//   | "Monday"
//   | "Tuesday"
//   | "Wednesday"
//   | "Thursday"
//   | "Friday"
//   | "Saturday"
//   | "Sunday";// this is transofromed by prettier but for real the basic syntax is same


//   let today : DayOfWeek = "Sunday"


//tuples and enums
// as  you seen above that array have dynamic sizes
//while tuples restrict the size & also the type of the data & position of in the array as you can see

//method1
// let myTuple : [number, string]
// myTuple = [6, "sai"]


//vs
//method2
// type response = [number, string]
// const goodRes: response = [200, "ok"]
// const arrRes: response[] = [[1,"god"], [2,"that-me"]]

// enum OrderStatus {
//   PENDING,
//   SHIPPED,
//   DELIVERED,
//   RETURNED
// }


// enum OrderStatus {
//   PENDING =10, // if you assign a value to the first enum the next enum is gonna enum gonna have increased value of it, //& you can assign any value to any enum // you can any data type string , no. , ...
//   SHIPPED,
//   DELIVERED,
//   RETURNED
// }

//generally the enum do populate the js code a lot 
//so we can use enum with const keyword

// const enum OrderStatus1 {
//   PENDING =10, // if you assign a value to the first enum the next enum is gonna enum gonna have increased value of it, //& you can assign any value to any enum // you can any data type string , no. , ...
//   SHIPPED,
//   DELIVERED,
//   RETURNED
// }
// // we can also do this

// const status = OrderStatus.DELIVERED

// function orderStatus(status: OrderStatus){
//   return status === OrderStatus.DELIVERED
// }
// console.log(orderStatus(OrderStatus.RETURNED));

//union types VS enum

// //INTERFACE 
// //it is very similar to type we have learnt earlier
// //so what is the difference

// interface Person{
// name: String
// }
// interface Person{
//   age: 25
// }
// //you cant exetend a type as we are extending here of person, now age is added to the person interface,but we can use "&"" for extending a type from another type , which must have been named differently
// interface Employee{
// readonly id: number
// email: string
// }

// interface Engineer extends Person,Employee{
//   level: string
//   language : string[]
// }

// const sainath : Engineer ={
//   name: "sainath",
//    id: 1234,
//    age:25,
// email: "god@123.god",
// level: "god",
// language : ["all"]
// }


// type vs interface


//I learnt a little about ts config file
//





// TOPICS TO COVER 

//GENERICS 

//TYPE NARROWING