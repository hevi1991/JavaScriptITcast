function getSum(n, m) {
    n = n || 0;
    m = m || 0;

    if (n > m) {
        var tmp = n;
        n = m
        m = tmp;
    }

    var sum = 1;
    for (var i = n; i <= m; i++) {
        sum *= i;
    }
    return sum;
}
