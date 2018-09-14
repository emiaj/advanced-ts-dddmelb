
import { time } from './time';
export class Fibonacci {

    @time
    static compute(n: number): number {
        const fib = (x: number): number => {
            if (x === 0) {
                return 0;
            }
            if (x <= 2) {
                return 1;
            }
            return fib(x - 1) + fib(x - 2);
        };

        const result = fib(n);

        return result;
    }
}

