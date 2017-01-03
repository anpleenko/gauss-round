const gaussRound = (num, decimal = 1) => {
    let d = decimal,
    m = Math.pow(10, d),
    n = +(d ? num * m : num).toFixed(8),
    i = Math.floor(n), f = n - i,
    e = 1e-8,
    r = (f > 0.5 - e && f < 0.5 + e) ?
        ((i % 2 == 0) ? i : i + 1) : Math.round(n);
    return d ? r / m : r;
}

export default gaussRound;
