export default function Origin(props) {
  if (props.data) {
    return (
      <div className="origin-box p-4">
        <strong className="origin-title">origin</strong>
        <br />
        <li className="origin mt-3 ms-3">{props.data}</li>
      </div>
    );
  }
  return null;
}
