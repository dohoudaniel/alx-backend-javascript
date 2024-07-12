export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((acc, student) => acc + student.id, 0);
}
