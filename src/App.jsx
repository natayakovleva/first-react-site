import "./App.css";
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <div className="flex gap-10">
        <Sidebar />
        <HomePage />
      </div>
    </>
  );
}

export default App;
