//simple randomiser
export const Shuffle = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5)
