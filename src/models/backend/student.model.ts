export interface IStudent {
  acceptance_year: number;
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  level: number;
  phone: string;
  program: { id: string; name: string };
  total: number;
  uid: string;
}

export interface IStudentSemestrList {
  id: string;
  semester: string;
}

export interface IStudentCourses {
  student_id: string;
  course_id: string;
  student_uid: number;
  title: string;
  code: string;
  credits: number;
  semester: string;
  grade: number;
  score: string;
  gpa: number;
}

export interface IStudentCourseDetails {
  id: string;
  title: string;
  weight: number;
  score: number;
  actual: number;
  total: {
    gpa: number;
    grade: string;
    total: number;
  };
}