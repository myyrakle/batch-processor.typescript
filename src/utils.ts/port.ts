export function generateDynamicPort(): number {
  const dynamicPort = Math.round(Math.random() * 16383) + 49152;
  return dynamicPort;
}
