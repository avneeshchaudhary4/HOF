let arr = {apple: 100,papaya: 150,banana: 70, pen: 10};

function convertToINR(priceInUSD){
const exchangerate =80;
return priceInUSD*exchangerate;
}
const itemsInINR= Object.fromEntries(
    Object.entries(arr).map(([item,price]) => [item, convertToINR(price)])
);
console.log(itemsInINR);