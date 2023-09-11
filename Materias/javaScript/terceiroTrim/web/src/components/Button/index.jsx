import "./styles.css";

export default function Button(props) {
  function sabo() {
    alert('eu não sabo');
  }

  const getHours = () => {
    const clock = document.getElementsByClassName("clock")[0];
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    const second = seconds < 10 ? `0${seconds}` : seconds;
    clock.innerHTML = `${hour}:${minute}:${second}`;
  };
  setInterval(() => {
    getHours();
  }, 1000);

  return (
    <form className="form">
      <div className="container">
        <div className="clock"></div>
      </div>
      <button onClick={sabo} type="submit">
        {props.content}
      </button>
    </form>
  );
}
