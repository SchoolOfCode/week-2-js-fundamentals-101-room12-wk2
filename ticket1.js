function convertGBPtoEUR(gbp){
    return gbp * 1.21;
}

// Write another function `convertGBPtoUSD`
// that takes in a specified amount in £
// and converts it to $ using a given exchange rate.

function convertGBPtoUSD(gbp){
    return gbp * 1.27;
}

// Write a function convertGBPToCurrency
// which takes in both a currency code ("EUR" or "USD")
// and an amount of £ to convert
// It should, based on which code has been entered use one of your previously written functions to return the correct conversion
// If an unknown code is entered, it should return null.

function convertGBPToCurrency(gbp, currencyCode){
    if (currencyCode=="USD"){
        return convertGBPtoUSD(gbp);
    }
    else if (currencyCode=="EUR"){
        return convertGBPtoEUR(gbp);
    }
    else {
        return null;
    }
}