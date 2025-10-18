export class PrefixedLocalStorage {
    readonly prefix : string;

    constructor(prefix: string) {
        this.prefix = prefix;
    }

    load<T>(id: string): T | null {
        const j = localStorage.getItem(this.getID(id));
        if (j) {
            return JSON.parse(j) as T;
        }

        return null;
    }

    save<T>(id: string, data: T): void {
        const j = JSON.stringify(data);
        localStorage.setItem(this.getID(id), j);
    }

    keys() {
        const result: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(this.prefix + ":")) {
                result.push(key.substring(this.prefix.length + 1));
            }
        }
        return result;
    }

    private getID(id: string) {
        return `${this.prefix}:${id}`;
    }
}