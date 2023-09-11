import "./styles.css";

export default function Button(props) {
  function sabo() {
    alert('eu não sabo');
  }
  return (
    <form className="form">
      <button onClick={sabo} type="submit">
        {props.content}
      </button>
    </form>
  );
}
