import {ThemeProvider, theme, BaseStyles} from '@primer/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import deepmerge from 'deepmerge'

import Home from './pages/Home';
import MusicListPage from './pages/MusicListPage';



const customTheme = deepmerge(theme, {
  colorSchemes: {
    light: {
      colors: {
        header: {
          text: 'black',
          bg: '#f6f8fa',
          logo: 'black',
          devider: 'black',
        },
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BaseStyles>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<MusicListPage />} />
              <Route path="/primer" element={<Home />} />
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


