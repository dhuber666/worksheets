interface Options {
    operands: string[];
    range: {
        from: number;
        to: number;
    };
    calculationCount?: number;
    allowOverTen?: boolean;
}

export const generateCalculations = (options: Options) => {


    const {calculationCount = 10, range: {from, to}, operands} = options;

    let indexOfOperands = 0;
    let lengthOfOperands = operands.length;

    const calculations: string[] = [];


    for (let i = 0; i < calculationCount; i++) {
        const num1 = Math.round(from + Math.random() * (to - from));
        const num2 = Math.round(from + Math.random() * (to - from));
        const calcString = `${num1} ${operands[indexOfOperands]} ${num2} = ___`;
        calculations.push(calcString);
        if (indexOfOperands < lengthOfOperands - 1) {
            indexOfOperands++;
        } else {
            indexOfOperands = 0;
        }
    }

    return calculations;
}