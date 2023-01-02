import { v4 as uuidv4 } from "uuid";
uuidv4();
let students = [
  {
    id: "1",
    grade: 10,
    name: "taqwa",
  },
  {
    id: "2",
    grade: 10,
    name: "asmaa",
  },
  {
    id: 3,
    grade: 10,
    name: "omar",
  },
];
export const addStudent = (request, response) => {
  const body = request.body;
  const newStudent = { ...body, id: uuidv4() };
  students.push(newStudent);
  response.send(students);
};
export const getAll= (request, response) => {
    response.send(students);
  }

export const getstudent = (request, response) => {
  const id = request.params.id;
  let student = students.find((student) => student.id == id);
  // find {object} student.name
  // filter [{}]  student
  if (student) {
    response.send(student);
  } else {
    response.status(404);
  }
};
export const updateStudent = (request, response) => {
  const id = request.params.id;
  const { name, grade } = request.body;
  let student = students.find((student) => student.id == id);
  if (name) {
    student.name = name;
  }
  if (grade) {
    student.grade = grade;
  }
  response.send(student);
};
export const putStudent = (request, response) => {
    const id = request.params.id;
    const body = request.body;
    let student = students.find((student) => student.id == id);
    student=body
    response.send(student);
  };
export const deleteStudent = (request, response) => {
  const id = request.params.id;
  students = students.filter((student) => student.id != id);
  response.send(students);
};
