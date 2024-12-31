import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CheckUser from './pages/CheckUser';
import WishPage from './pages/ShowMessage';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckUser />} />
        <Route path="/wish/:userId" element={<WishPage />} />
      </Routes>
    </Router>
  )
}

export default App
