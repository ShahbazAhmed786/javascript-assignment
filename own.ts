const transportList: string[] = [
    'Honda motorcycle',
    'Tesla Model S',
    'BMW 7 Series',
    'Toyota lexus',
    'Bicycle'
  ];
  
  
  for (let i = 0; i < transportList.length; i++) {
    const transport: string = transportList[i];
    console.log(`I would like to own a ${transport}.`);
  }