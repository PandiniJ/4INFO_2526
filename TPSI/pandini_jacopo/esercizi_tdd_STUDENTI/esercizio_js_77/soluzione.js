export class Fibonacci {
    calc(n) {
        if (n <= 0) return 0;
        if (n === 1 || n === 2) return 1;

        let a = 1; 
        let b = 1; 
        let result = 0;

        for (let i = 3; i <= n; i++) {
            result = a + b;
            a = b;
            b = result;
        }

        return result;
    }
}
