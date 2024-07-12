export default function getListStudentIds(argument) {
  if (typeof argument !== 'object') {
    return [];
  } else {
    const myArray = [];
    Object.keys(argument).map(key => myArray.push(argument[key].id));
    return myArray;
  }
}
