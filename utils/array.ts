export const removeDuplicationFromArray = <T>(array: T[]) => {
  return array.filter((value, index, self) => self.indexOf(value) === index);
};
