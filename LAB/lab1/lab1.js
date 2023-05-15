const students = [];
// sử dụng vòng lặp thêm vào mảng newStudent 10 student
for (let i = 0; i < 10; i++) {
    const newStudent = {
        studentId: `${i + 1}`,
        studentName: "manh" + `${i + 1}`,
        studentAge: 20 + i + 1
    };
    students.push(newStudent);
}
console.log(students);
