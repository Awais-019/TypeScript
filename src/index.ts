function echo<T>(value: T extends { name: string }): T {
  return value;
}