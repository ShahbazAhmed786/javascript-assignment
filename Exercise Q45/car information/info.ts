function storeCarInfo(manufacturer: string, model: string, extras: {[key: string]: any }): object {
    const carInfo: { [key: string]: any } = {
      manufacturer,
      model,
      ...extras // Store the rest of the keyword arguments in the carInfo object
    };
  
    return carInfo;
  }
  
  // Call the function with the required information and two other name-value pairs
  const carData = storeCarInfo('Toyota', 'Camry', {color: 'Silver', features: ['Navigation', 'Sunroof']});
  
  // Print the object returned by the function
  console.log(carData);