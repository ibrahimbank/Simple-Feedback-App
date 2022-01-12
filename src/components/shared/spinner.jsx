import Load from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={Load}
      alt="Loading.."
      style={{ width: "100p", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
