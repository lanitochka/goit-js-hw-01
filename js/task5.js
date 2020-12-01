const deliveryCountry = prompt('введите страну');
const normDeliveryCountry = deliveryCountry.toLowerCase();

let price;

switch (normDeliveryCountry) {
    case 'китай':
        price = 100;
        break;
    
    case 'чили':
        price = 250;
        break;
    
    case 'австралия':
        price = 170;
        break;
    
    case 'индия':
        price = 80;
        break;
    
    case 'ямайка':
        price = 120;
        break;
    
    default:
        alert('В вашей стране доставка не доступна'); 
}

console.log(`Доставка в ${normDeliveryCountry} будет стоить ${price} кредитов `)








