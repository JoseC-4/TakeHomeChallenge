import Dashboard from '../Pages/dashboard/Dashboard'
import JobDetails from '../Pages/jobdetails/JobDetails'
import './App.css'
import {Routes, Route} from "react-router-dom"
function App() {


  return (
    <div className="App">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/jobdetails" element={<JobDetails />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

