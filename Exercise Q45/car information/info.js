var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function storeCarInfo(manufacturer, model, extras) {
    var carInfo = __assign({ manufacturer: manufacturer, model: model }, extras // Store the rest of the keyword arguments in the carInfo object
    );
    return carInfo;
}
// Call the function with the required information and two other name-value pairs
var carData = storeCarInfo('Toyota', 'Camry', { color: 'Silver', features: ['Navigation', 'Sunroof'] });
// Print the object returned by the function
console.log(carData);
