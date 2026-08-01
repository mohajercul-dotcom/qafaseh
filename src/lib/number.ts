export function toPersian(n: number | string): string {
    return String(n).replace(/\d/g, (d) => String.fromCodePoint(0x06f0 + Number(d)));
}
