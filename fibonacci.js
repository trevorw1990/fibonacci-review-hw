
function getFibonacciNumber(n) {
    try {
        if(n<0)return -1; 
        if (n <= 1) return n;
        if (n == 2) return 1;

        let fibNum = 0, p1 = 1, p2 = 1;
        for (var x = 3; x <= n; x++) {
            fibNum = p1 + p2;
            p2 = p1;
            p1 = fibNum;
        }
        console.log('Very good. It is Fibonacci.', fibNum);
        return fibNum;
    } catch (e) {
        throw e;
    } 
}
console.log(getFibonacciNumber(3))


module.exports = {
    getFibonacciNumber
}