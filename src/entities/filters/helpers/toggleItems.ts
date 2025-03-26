export const toggleItems = <T>(stateArray: T[], itemsToToggle: T[]): T[] => {
  const set = new Set(stateArray);
  itemsToToggle.forEach(item => set.has(item) ? set.delete(item) : set.add(item));
  return [...set];
}