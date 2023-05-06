export const removeDuplicationFromArray = <T>(array: T[]) => {
  const stringifiedArray = array.map((value) => JSON.stringify(value));

  const removedArray = array.filter((value, index) => {
    const foundIndex = stringifiedArray.indexOf(JSON.stringify(value));
    return foundIndex === index;
  });

  return removedArray;
};
