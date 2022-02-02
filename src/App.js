import './App.css';
import Video from './component/Video';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        <Video url={``} />
        <Video url={``} />
        <Video url={``} />
      </div>

    </div>
  );
}

export default App;