// Code your solution here

function findMatching(drivers,  name){
   const filteredDrivers =  drivers.filter((driverName) => driverName.toLowerCase() === name.toLowerCase())
    return filteredDrivers
}


 function fuzzyMatch(drivers, substring) {
    const matchedDrivers = drivers.filter(driver => driver.slice(0, substring.length)  === substring)
    return matchedDrivers
 }

 function matchName(driver,hometown){
    const results = driver.filter(element => element.name === hometown )
    return results
}