// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

// const ages: number[] = [1,2,3]
const ages: Array<number> = [1,2,3]
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard : string[][] = [["x","o"],["x","o"]]

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type ProductType = {
    name: string
    price: number
}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(productTypes:ProductType[]){

return productTypes.reduce((a,c)=> {return a +c.price}, 0)

}

console.log( getTotal([
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
  ]) );



