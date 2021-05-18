// 1 Celcius converter

function convertFahrToCelsius(numInFaren){
    // Check If parameter is a number 
    if(isNaN(numInFaren)){
        // check if parameter is an array
        if(numInFaren instanceof Array === true){
            console.log(`${numInFaren} is not a number but a/an array`)
            return
        }
        console.log(`${JSON.stringify(numInFaren)} is not a number but a/an ${typeof(numInFaren)}`)
        return
    }
    let numInCelcius = (numInFaren - 32) * 5/9
    numInCelcius = numInCelcius.toFixed(4)
    numInCelcius = JSON.parse(numInCelcius)
    console.log(numInCelcius)
}
// convertFahrToCelsius(0)
// convertFahrToCelsius("0")
// convertFahrToCelsius([1,2,3])
// convertFahrToCelsius({temp: 0})


// 2 second funcion--->

function checkYuGiOh(num) {
    if(isNaN(num)){
        console.log(`invalid parameter: ${JSON.stringify(num)}`)
        return
    }
    let arr = []
    for (i = 1; i <= num; i++) {
        arr.push(i)
        if (i % 2 === 0) {
            let index = arr.indexOf(i)
            if (i % 3 === 0) {
                arr[index] = "yu-gi"
            } else if (i % 5 === 0) {
                arr[index] = "yu-oh"
            }
            else {
                arr[index] = "yu"
            }
        } else if (i % 3 === 0) {
            let index = arr.indexOf(i)
            if (i % 3 === 0 && i % 5 === 0) {
                arr[index] = "gi-oh"
            }
            else {
                arr[index] = "gi"
            }
        } else if (i % 5 === 0) {
            let index = arr.indexOf(i)
            arr[index] = "oh"
        }
        if (i % 2 === 0 && i % 5 === 0 && i % 3 === 0) {
            let index = arr.indexOf(i)
            arr[index] = "yu-gi-oh"
        }


    }
    console.log(arr)
    return arr
}

// checkYuGiOh(10)
// checkYuGiOh("5")
// checkYuGiOh("fizzbuzz is meh")