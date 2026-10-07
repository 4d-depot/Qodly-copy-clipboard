export function copyStringSourceValue(
  dataType: unknown,
  value: unknown,
  copy: (value: string) => void,
): void {
  if (dataType !== 'string' || typeof value !== 'string' || value.length === 0) return;
  copy(value);
}
