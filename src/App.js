import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index  path="/" element={<Home />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
