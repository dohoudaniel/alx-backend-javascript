export default function createEmployeesObject(departmentName, employees) {
  const array = [...employees];
  return `{ ${departmentName}: [${array}] }`;
}
