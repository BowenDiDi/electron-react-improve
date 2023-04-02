import Settings from './pages/settings';
import { getQueryParam } from './utils/utils';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-im.prove</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Hello
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const path = getQueryParam('path');
  console.log('getQueryParam', getQueryParam('path'));
  switch (path) {
    case 'settings':
      return <Settings />;
    default:
      return <Hello />;
  }
  // window.history.push({ pathname: '/index/demo3', query: { id: 1 } })
  // return (
  //   <Settings />
  //   // <Router>
  //   //   <Routes>
  //   //     <Route path="/" element={<Hello />} />
  //   //     <Route path="/settings" element={<Settings />} />
  //   //   </Routes>
  //   // </Router>
  // );
}
