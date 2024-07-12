export default function getListStudentIds(argument) {
  if (typeof argument !== 'array') {
    return [];
  } else {
    const myArray = [];
    Object.keys(argument).map(key => myArray.push(argument[key].id));
    return myArray;
  }
}
