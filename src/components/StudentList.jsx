import studentDetails from "./database/studentDetails";
import Student from "./Student";
function StudentList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Sl NO</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>IMAGE</th>
          <th>UPDATE</th>
          <th>VIEW</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        {studentDetails.map((student) => {
          return <Student key={student.id} {...student} />;
        })}
      </tbody>
    </table>
  );
}
export default StudentList;
