import Button from "./components/Button";
import Message from "./components/Message";
import "./index.css";

const App = () => {
  const showReactMessage = () => {
    document.getElementById("message").innerText =
      "React helps you build fast and interactive user interfaces.";
  };

  const showProjectMessage = () => {
    document.getElementById("message").innerText =
      "Building small projects daily is the best way to learn React.";
  };

  const showConsistencyMessage = () => {
    document.getElementById("message").innerText =
      "Consistency beats intensity. Show up every day.";
  };

  return (
    <div className="wrapper">
      <Message />

      <div className="button-container">
        <Button label="Learn React" handleClick={showReactMessage} />
        <Button label="Build Projects" handleClick={showProjectMessage} />
        <Button label="Stay Consistent" handleClick={showConsistencyMessage} />
      </div>
    </div>
  );
};

export default App;
