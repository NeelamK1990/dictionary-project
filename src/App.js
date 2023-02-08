import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"></img>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by <strong>Neelam Katwal</strong> and is{" "}
            <a
              href="https://github.com/NeelamK1990/dictionary-project"
              className="text-decoration-none"
            >
              OpenSourcedCode
            </a>{" "}
            on{" "}
            <a href="https://github.com/NeelamK1990/dictionary-project">
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
