function prices(product, className) {
    //setting the prices
    if (product == 'memory-8gb') {
        const extraCost = document.getElementById(className + '-extra-cost');
        extraCost.innerText = 0;
    }
    else if (product == 'memory-16gb') {
        const previousCost = document.getElementById(className + '-extra-cost');
        previousCost.innerText = 180;
    }
    else if (product == 'storage-256gb') {
        const previousCost = document.getElementById(className + '-extra-cost');
        previousCost.innerText = 0;
    }
    else if (product == 'storage-512gb') {
        const previousCost = document.getElementById(className + '-extra-cost');
        previousCost.innerText = 100;
    }
    else if (product == 'storage-1tb') {
        const previousCost = document.getElementById(className + '-extra-cost');
        previousCost.innerText = 180;
    }
    else if (product == 'delivery-normal') {
        const previousCost = document.getElementById(className + '-extra-cost');
        previousCost.innerText = 0;
    }
    else if (product == 'delivery-fast') {
        const previousCost = document.getElementById(className + '-extra-cost');
        previousCost.innerText = 20;
    }

    //updating total price and final total by calling a functions
    document.getElementById('total-price').innerText = updateTotalPrice();
    document.getElementById('final-total').innerText = updateTotalPrice();
}
//function for total price
function updateTotalPrice() {
    const bestPrice = document.getElementById('best-cost').innerText;
    const memoryPrice = document.getElementById('memory-extra-cost').innerText;
    const storagePrice = document.getElementById('storage-extra-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-extra-cost').innerText;
    const summation = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);
    return summation;
}
//function for final total price
function finalTotalPrice() {
    const promoCode = document.getElementById('input-code');
    const promoCodeValue = document.getElementById('input-code').value;
    let totalPrice = document.getElementById('total-price').innerText;
    if (promoCodeValue == 'stevekaku') {
        totalPrice = totalPrice - (totalPrice * 0.20);
    }
    document.getElementById('final-total').innerText = totalPrice;
    promoCode.value = '';
}
//event handler for price
document.getElementById('memory-8gb').addEventListener('click', function () {
    prices('memory-8gb', 'memory');
});
document.getElementById('memory-16gb').addEventListener('click', function () {
    prices('memory-16gb', 'memory');
});
document.getElementById('storage-256gb').addEventListener('click', function () {
    prices('storage-256gb', 'storage');
});
document.getElementById('storage-512gb').addEventListener('click', function () {
    prices('storage-512gb', 'storage');
});
document.getElementById('storage-1tb').addEventListener('click', function () {
    prices('storage-1tb', 'storage');
});
document.getElementById('delivery-normal').addEventListener('click', function () {
    prices('delivery-normal', 'delivery');
});
document.getElementById('delivery-fast').addEventListener('click', function () {
    prices('delivery-fast', 'delivery');
});
//event handler for promo code
document.getElementById('promo-code').addEventListener('click', function () {
    finalTotalPrice();
});