import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
