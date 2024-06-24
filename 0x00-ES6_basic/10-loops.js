/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const finalArray = [];
  for (const item of array) {
    finalArray.push(appendString + item);
  }

  return array;
}
