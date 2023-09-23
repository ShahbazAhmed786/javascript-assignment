var transportList = [
    'Honda motorcycle',
    'Tesla Model S',
    'BMW 7 Series',
    'Toyota lexus',
    'Bicycle'
];
// Print a series of statements about these modes of transportation
for (var i = 0; i < transportList.length; i++) {
    var transport = transportList[i];
    console.log("I would like to own a ".concat(transport, "."));
}
