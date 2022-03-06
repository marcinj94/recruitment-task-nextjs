export const removeItemFromArray = (arr: string[], compareValue: any) => {
  const copyArr = [...arr];
  const index = copyArr.findIndex((value) => value === compareValue);
  if (index !== -1) copyArr.splice(index, 1);
  return copyArr;
};
