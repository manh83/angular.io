interface IStudent {
    studentId: string,
    studentName: string,
    studentAge: number,
}

const students: IStudent[] = []
// sử dụng vòng lặp thêm vào mảng newStudent 10 student
for (let i = 0; i < 10; i++) {
    const newStudent: IStudent = {
        studentId: (i+1).toString(),
        studentName: "manh"+`${i+1}`,
        studentAge: 20 + i + 1
    }
    students.push(newStudent)
}
console.log(students);