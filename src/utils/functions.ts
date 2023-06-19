export const repeatArray = (array: any[], quantity: number) => {
    const newArray = [] as any
    for(let i=0;i<quantity;i++){
        newArray.push(array);
    }

    return newArray;
};