export const removeDuplicationValues = <T>(array: T[]) => {
  return array.filter((value, index, self) => self.indexOf(value) === index);
};
