const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it('area should equal w * h', function() {
  const width = 5, height = 10, area = utils.area(width, height)

  expect(width).to.be.a('number')
  expect(height).to.be.a('number')
  expect(area).to.be.a('number')
  expect(area).to.be.equal(width * height)
  expect(area).to.be.equal(50)
})


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a('array')
  expect(cart.length).to.equal(0)
})

it("Should add a new item to the shopping cart", function() {
  let item = utils.createItem("banana", .50)
  expect(item).to.be.a('object')
  utils.addItemToCart()
  expect(utils.getShoppingCart().length).to.equal(1)
  utils.createItem("pineapple", 4.00)
  utils.addItemToCart()
  expect(utils.getShoppingCart().length).to.equal(2)
  
})

it("Should return the number of items in the cart", function(){
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart.length).to.equal(0)
})

it("Should remove items from cart", function() {
  const item = utils.createItem("banana", .50)
  utils.addItemToCart()
  utils.getShoppingCart()
  expect(utils.getShoppingCart()).to.been.a("array")
  expect(utils.getShoppingCart().length).to.equal(1)
  utils.removeItemFromCart(item)
  utils.getShoppingCart()
  expect(utils.getShoppingCart().length).to.equal(0)
  
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
