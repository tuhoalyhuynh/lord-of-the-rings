import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    title: 'The Fellowship of the Ring',
    hours: '2',
    minutes: '58',
  },
  {
    title: 'The Two Towers',
    hours: '2',
    minutes: '59',
  },
  {
    title: 'The Return of the King',
    hours: '3',
    minutes: '21',
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Movie movies={movies[0]} />
      <Movie movies={movies[1]} />
      <Movie movies={movies[2]} />
      </header>
    </div>
  );
}

export default App;
