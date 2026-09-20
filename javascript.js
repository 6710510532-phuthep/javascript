const price = 500;    
const quantity = 3;   

const subtotal = price * quantity;
const vat = subtotal * 0.07;
const total = subtotal + vat;

console.log("--- 1. Order Calculator ---");
console.log(`Subtotal: ${subtotal} THB`);
console.log(`VAT (7%): ${vat.toFixed(2)} THB`);
console.log(`Total: ${total.toFixed(2)} THB`);

const orderAmount = 750;
let deliveryCharge = 0;

if (orderAmount >= 1000) {
  deliveryCharge = 0;}
  else if (orderAmount >= 500) {
  deliveryCharge = 40;}
  else {
  deliveryCharge = 80;
}

console.log("\n--- 2. Delivery Rule ---");
console.log(`Order Amount: ${orderAmount} THB -> Delivery Charge: ${deliveryCharge} THB`);


const itemPrices = [120, 250, 45, 99, 310];
let cartTotal = 0;

for (let i = 0; i < itemPrices.length; i++) {
  cartTotal += itemPrices[i];
}

console.log("\n--- 3. Cart Total ---");
console.log(`All items: [${itemPrices.join(", ")}]`);
console.log(`Cart Total: ${cartTotal} THB`);

function calculateDiscount(amount, percentage) {
  const discountAmount = (amount * percentage) / 100;
  const finalPrice = amount - discountAmount;
  return {
    discountAmount: discountAmount,
    finalPrice: finalPrice
  };
}

console.log("\n--- 4. Discount Function ---");

const order1 = calculateDiscount(1000, 10);
console.log(`1,000 THB with 10% off -> Discount: ${order1.discountAmount}, Final: ${order1.finalPrice}`);

const order2 = calculateDiscount(2400, 15);
console.log(`2,400 THB with 15% off -> Discount: ${order2.discountAmount}, Final: ${order2.finalPrice}`);

const products = [
  { name: "Wireless Mouse", price: 450 },
  { name: "Mechanical Keyboard", price: 1890 },
  { name: "USB-C Hub", price: 650 }
];

console.log("\n--- 5. Product Object ---");
products.forEach((product) => {
  console.log(`Product: ${product.name} | Price: ${product.price} THB`);
});