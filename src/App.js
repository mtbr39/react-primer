import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';

import {ThemeProvider, BaseStyles} from '@primer/react'


function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
          </div>
        </Router>
        <div>
          
        </div>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App;


