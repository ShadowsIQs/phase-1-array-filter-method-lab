function findMatching(drivers, string ){
    const names = drivers.filter( driverName => driverName.toLowerCase() === string.toLowerCase())
    // if (string === "Sammy" ){
    //     return ["Sammy"]
    // }
    return names 
}

function fuzzyMatch (drivers, string){
    const names = drivers.filter(driverName => driverName.slice(0, 2)=== string)
    return names
}

function matchName(drivers, string){
    const names = drivers.filter(driverObject => driverObject.name === string )
    return names
}