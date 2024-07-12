export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  // Using 'filter' to check if the location matches the specified city location
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const studentData = { ...student, grade: 'N/A' }
      const studentNewGrade = newGrades.find((grade) => (grade.studentId === student.id));
      if (studentNewGrade !== undefined) {
        studentData.grade = studentNewGrade.grade;
      }
      return studentData;
    });
}
