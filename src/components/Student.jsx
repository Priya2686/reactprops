import StudentAge from "./StudentAge";
import StudentImage from "./StudentImage";
import StudentName from "./StudentName";
import Button from "./Button";

function Student({ id, sname, age, image }) {
  return (
    <tr>
      <td>{id}</td>
      <StudentAge age={age} />
      <StudentName sname={sname} />
      <StudentImage image={image} />
      <Button text="update" btnClass="btn update" />
      <Button text="view" btnClass="btn view" />
      <Button text="delete" btnClass="btn delete" />
    </tr>
  );
}
export default Student;
