function kgtoLbs(weight: number | string): number {
    // narrowing
    if (typeof weight == "number") {
        return weight * 2.20462;
    } else {
        return parseInt(weight) * 2.20462;
    }
}
