function lemonadeChange(bills: number[]): boolean {
    let five = 0, ten = 0

    for (const val of bills) {
        if (val === 5) {
            five++
        } else if (val === 10) {
            if (five === 0) {
                return false
            } else {
                five--
            }
        } else {
            if (five > 0 && ten > 0) {
                five--
                ten--
            } else if (five > 3) {
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
}