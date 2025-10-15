import { Dice } from "./dice";

export function determineDice(amount: number): Dice {
    switch (amount) {
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
        case 20:
        case 100:
            return amount as Dice;
    }

    for (let v of Dice.Values) {
        if (v < amount) {
            continue;
        }
        let r = v % amount;
        if (r === 0) {
            return v;
        }
    }

    return 100;
}

export function determineSectionSize(dice: Dice, amount: number): number {
    return Math.floor(dice / amount);
}