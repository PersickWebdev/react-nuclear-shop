export const useUtils = () => {

    // 'processingPattern':
    //      - sentence
    //      - element
    const processArrayToString = (inputArray: string[], processingPattern: string = 'element') => {
        if (!inputArray.length) return [];

        if (processingPattern === 'sentence') {
            const result: string[] = [];
            inputArray.forEach((element: any, index: number) => {
                if (index === 0) {
                    result.push(element.slice(0, 1).toUpperCase() + element.slice(1, element.length - 1));
                } else if (index === inputArray.length - 1) {
                    result.push(`${element}.`);
                } else {
                    result.push(element);
                }
            });
            return result.join(', ');
        }

        if (processingPattern === 'element') {
            return inputArray.join(', ');
        }
    };

    return { processArrayToString };
};