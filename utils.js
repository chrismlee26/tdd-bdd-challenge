// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return (w * h)
}

const perimeter = (w, h) => {
  return ((w * 2) + (h * 2))
}

const circleArea = r => {
  return (Math.PI*Math.pow(r, 2))
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  console.log(shoppingCart)
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.length

}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const removeId = shoppingCart.indexOf(item)
  shoppingCart.splice(removeId, 1)
  return shoppingCart
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
