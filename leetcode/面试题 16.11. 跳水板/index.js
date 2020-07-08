var divingBoard = function(shorter, longer, k) {
    if (!k) return []
    if (shorter === longer) {
        return [shorter * k]
    }

    const res = []

    for (let i = 0; i <= k; i++) {
        res.push(longer * i + ( k - i ) * shorter)
    }

    return res
};

console.log(divingBoard(1, 2, 3))