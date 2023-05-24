import './styles/App.scss';
import logo from './assets/images/punchlime.png'

function App() {
  return (
    <div className="App">
      <header>
        <ul id="navbar">
          <li><img id="nav-logo" src={logo}></img></li>
          <li id="brand">Punchlime</li>
          <li id="active" className="navigation">Accueil</li>
          <li className="navigation">Classement</li>
          <li id="connexion" className="navigation">Connexion</li>
        </ul>
      </header>

      <div id="v-body">
        <h1 id="presentation">Trouve qui a écrit la punchline.</h1>
        <div>
          <button id="btn-jouer">JOUER</button>
        </div>
      </div>
    </div>
  );
}

export default App;
