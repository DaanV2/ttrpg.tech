export type Dice = 
    | 2
    | 3
    | 4
    | 6
    | 8
    | 10
    | 12
    | 20
    | 100


export namespace Dice {
    export const Values: Dice[] = [2, 3, 4, 6, 8, 10, 12, 20, 100];

    export function roll(dice: Dice): number {
        return Math.floor(Math.random() * dice) + 1;
    }
}