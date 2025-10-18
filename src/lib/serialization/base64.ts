export namespace Base64 {
  export function encode(input: string): string {
    return btoa(input);
  }
  export function decode(input: string): string {
    return atob(input);
  }

  export function encodeObject<T>(obj: T): string {
    const json = JSON.stringify(obj);
    return encode(json);
  }
  export function decodeObject<T>(b64: string): T {
    const json = decode(b64);
    return JSON.parse(json) as T;
  }
}
