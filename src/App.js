import './App.css';

import {ThemeProvider, BaseStyles} from '@primer/react'
import MyComponent from './components/MyComponent';

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <div>
          <MyComponent />
        </div>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App;
