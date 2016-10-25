/**求n-m之间所有数的和*/
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
/**求圆的面积*/
function getCircleArea(r) {
    r = r || 0;
    return Math.PI * Math.pow(r, 2);
}
/**求圆的周长*/
function getCircumference(r) {
    r = r || 0;
    return Math.PI * r * 2;
}
/**求2个数最大值*/
function getMaxOfTwo(a, b) {
    return a > b ? a : b;
}
/**求3个数最大值*/
function getMaxOfThree(a, b, c) {
    var array = [a, b, c];
    array = sort(array);
    return array[array.length - 1];
}
/**求一组数最大，最小值*/
function getMaxAndMin(arr) {
    arr = arr || [];
    arr = sort(arr);
    return [arr[arr.length - 1], arr[0]];
}
/**反转数组*/
function reversalArr(arr) {
    arr = arr || [];
    var array = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        array[array.length] = arr[i];
    }
    return array;
}
/**对数组排序，从小到大*/
function sort(arr) {
    arr = arr || [];
    for (var i = 0; i < arr.length - 1; i++) {
        var isSort = true;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                isSort = false;
            }
        }
        if (isSort) {
            break;
        }
    }
    return arr;
}
