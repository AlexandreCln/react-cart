import Nav from './components/common/Nav';
import Route from './components/Routes';
import { StateProvider } from './store';

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Nav />
        <div>
          <Route />
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
