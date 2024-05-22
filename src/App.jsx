import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Sofía")

  const teachers = ["Data", "Reyes", "Yolanda", "Sofía"]

  return (
    <div>
      <h2>Teacher Name: {name}</h2>
      <ul>
      {teachers.map((teacher) => (
          <li key={teacher} onClick={() => setName(teacher)}>  {teacher}  </li>
        ))}
      </ul>
      
    </div>
  )
}

export default App
