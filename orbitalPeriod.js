function orbitalPeriod(arr) {
  console.log(arr[0].name)
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let final_arr = []

  for (let item of arr) {
    console.log(item.name)
    let T = 2 * Math.PI * Math.sqrt((earthRadius + item.avgAlt)**3/GM)
    T = Math.round(T)
    console.log(T)
    final_arr.push({name: item.name, orbitalPeriod: T})

  }


  return final_arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
