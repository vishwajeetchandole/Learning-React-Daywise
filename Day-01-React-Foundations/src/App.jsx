import './index.css'

const App = () => {
  return (
    <div className="container">

      <h1 className="heading">What is React?</h1>
      <p className="text">
        React is a JavaScript library used to build fast and interactive user
        interfaces. It helps developers create dynamic web applications by
        efficiently updating only the necessary parts of the UI.
      </p>

      <h1 className="heading">Why React?</h1>
      <ul className="list">
        <li>Makes UI development easier</li>
        <li>Uses Virtual DOM for better performance</li>
        <li>Widely used in modern web development</li>
      </ul>

      <h1 className="heading">Real DOM vs Virtual DOM</h1>

      <h3 className="subheading">Real DOM</h3>
      <p className="text">
        The Real DOM directly represents the structure of a web page. When
        changes happen, the entire DOM can be re-rendered, which may reduce
        performance in large applications.
      </p>

      <h3 className="subheading">Virtual DOM</h3>
      <p className="text">
        The Virtual DOM is a lightweight copy of the Real DOM. React compares
        changes and updates only the required parts of the Real DOM, making
        updates faster and more efficient.
      </p>

      <h1 className="heading">Project Purpose</h1>
      <p className="text">
        This project was created to understand the fundamentals of React,
        including React basics, Virtual DOM, and setting up a React application
        using Vite.
      </p>

    </div>
  )
}

export default App
