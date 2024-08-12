import Header from './components/Header'
import Input from './components/Input'

import './App.css'

export default function App() {
  return (
    <>
      <div className="body">
        <div className="app-container">
          <div className="app-components">
            <Header />
            <Input />
          </div>
        </div>
      </div>
    </>
  )
}
