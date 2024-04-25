import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GetEx1 from './components/GetEx1.jsx'
import GetEx2 from './components/GetEx2.jsx'
import GetEx3 from './components/GetEx3.jsx'
import PostEx1 from './components/PostEx1.jsx'
import PutEx1 from './components/PutEx1.jsx'
import DeleteEx1 from './components/DeleteEx1.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DeleteEx1/>
  </React.StrictMode>,
)
