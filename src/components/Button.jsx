function Button({ text, btnClass }) {
  return (
    <td>
      <button className={btnClass}>{text}</button>
    </td>
  );
}
export default Button;
