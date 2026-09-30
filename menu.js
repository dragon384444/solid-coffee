// The only file edited each month.
// Price is in thousands of rupiah: "15" shows as "15K". A range like "20-24" shows as "20-24K".
// Category must be one of: "coffee", "non-coffee", "meal".

const MENU = [
  { name: "Americano", price: "17", category: "coffee" },
  { name: "Coffee Latte", price: "18", category: "coffee" },
  { name: "Cappuccino", price: "18", category: "coffee" },
  { name: "Mocaccino", price: "24", category: "coffee" },
  { name: "Lemon Coffee", price: "20", category: "coffee" },
  { name: "Red Dragon", price: "24", category: "coffee" },
  { name: "Flavoured Latte", price: "22", category: "coffee" },
  { name: "Kopi Susu Aren Solid", price: "20", category: "coffee" },
  { name: "Kopi Susu Solid", price: "20", category: "coffee" },
  { name: "Manual Brew V60", price: "20-24", category: "coffee" },

  { name: "Red Velvet Latte", price: "22", category: "non-coffee" },
  { name: "Chocolate Latte", price: "22", category: "non-coffee" },
  { name: "Matcha Latte", price: "24", category: "non-coffee" },
  { name: "Lychee Soda", price: "20", category: "non-coffee" },
  { name: "Lychee Tea", price: "18", category: "non-coffee" },
  { name: "Lemon Tea", price: "15", category: "non-coffee" },
  { name: "Susu + Aren", price: "18", category: "non-coffee" },
  { name: "Susu Aren Jelly", price: "20", category: "non-coffee" },

  { name: "Kentang + Sosis", price: "17", category: "meal" },
  { name: "Kentang French Fries", price: "14", category: "meal" },
  { name: "Rice Bowl", price: "25", category: "meal" },
  { name: "Cireng", price: "15", category: "meal" },
  { name: "Indomie Single", price: "7", category: "meal" },
  { name: "Indomie Double", price: "12", category: "meal" },
  { name: "Indomie Single Telor", price: "10", category: "meal" },
  { name: "Indomie Double Telor", price: "15", category: "meal" },
];
