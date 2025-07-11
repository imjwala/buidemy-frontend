export interface IUserInitialState {
  name: string|null,
  address:string |null
}
export interface IInitialStudentData{
  data: string
}
 export interface IInitialTeacherState {
  teacherName: string | null,
  teacherPassword : string | null
 }

 export interface IIncomingUserPayload {
  name: string,
  address: string,
  age: number
 }