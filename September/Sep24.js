//P-  the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
//R- the nth day (as an integer) on which the evaporator will be out of use.
//E- evaporator(10, 10, 5) -> 29

function evaporator(content, evap_per_day, threshold){ 
    let result = 0
    content=100
    while (content>=threshold) {
        content-=content*evap_per_day/100
        result ++
    }
    return result
}

evaporator(10,10,5)  ,29
evaporator(10,10,10) ,22