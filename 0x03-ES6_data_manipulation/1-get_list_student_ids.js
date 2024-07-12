export default function getListStudentIds(argument) {
  if (!Array.isArray(argument)) {
    return [];
  }
  const myArray = argument.map((item) => (item.id));
  return myArray;
}
