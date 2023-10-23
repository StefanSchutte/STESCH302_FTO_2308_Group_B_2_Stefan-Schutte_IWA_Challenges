const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';

const PRICES = {
    shoes: 300,
    toys: 100,
    shirts: 150,
    batteries: 35,
    pens: 5
};

//calculate shipping
function calculateShipping(location, totalCost, customerCount) {
    if (location === 'NK') {
        console.log(BANNED_WARNING);
        return;
    }

    let shipping = 0;
    if (location === 'RSA') {
        shipping = 400;
    } else if (location === 'NAM') {
        shipping = 600;
    } else {
        shipping = 800;
    }

    //shipping conditions
    if ((location === 'RSA' || location === 'NAM') && totalCost >= 1000 && customerCount === 1) {
        shipping = 0;
    } else if (shipping === 0 && customerCount !== 1) {
        console.log(FREE_WARNING);
        // Reset shipping to default if conditions are not met
        shipping = (location === 'RSA') ? 400 : 600; // Assuming only RSA and NAM are applicable here
    }

    return shipping;
}

//handle the purchase logic
function processPurchase(customers, location) {
    //total cost of the items
    let totalCost = PRICES.shoes * 1 + PRICES.toys * 5 + PRICES.batteries * 2;

    // Calculate shipping cost
    let shipping = calculateShipping(location, totalCost, customers);

    if (shipping !== undefined) { // Check if shipping was calculated (not banned country)
        let finalPrice = totalCost + shipping;

        let currency = (location === 'RSA') ? 'R' : '$';

        console.log('Price:', currency + finalPrice);
    }
}

const customerCount = 1;
const customerLocation = 'RSA';

processPurchase(customerCount, customerLocation);

