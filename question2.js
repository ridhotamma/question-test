const sortArray = (arrayOfNum) => {
    let isDone = false
    
    if (arrayOfNum === null || arrayOfNum === undefined || arrayOfNum === '') {
        return []
    } 

    while(!isDone) {
        isDone = true
        for(let i = 1; i < arrayOfNum.length; i++) {
            if(arrayOfNum[i - 1] > arrayOfNum[i]) {
                isDone = false
                let tempNum = arrayOfNum[i - 1]
                arrayOfNum[i - 1] = arrayOfNum[i]
                arrayOfNum[i] = tempNum
            }
        }
    }

    return arrayOfNum
}

module.exports = sortArray
