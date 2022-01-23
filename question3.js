const palyndrome = (value) => {
    if (value === undefined || value === '' || value === null) {
        throw new TypeError('invalid type of value or undefined')
    }

    let tempValue = ''
    for (let i = value.length - 1; i >= 0; i--) {
        tempValue += value[i]
    }

    if(value === tempValue) {
        return true
    } else {
        return false
    }
}

module.exports = palyndrome
