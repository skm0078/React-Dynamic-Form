import FormData from './formData.json'
import { useState, useEffect } from 'react'
import Element from './components/Element'

function App() {
  const [elements, setElements] = useState(null)
  useEffect(() => {
    setElements(FormData)
  }, [])
  console.log(FormData)
  const { formName, formDesc, data: fields } = elements ?? {}
  return (
    <div className='App container'>
      <h3>{formName}</h3>
      <blockquote>
        <h5>{formDesc}</h5>
      </blockquote>
      <form>
        {fields
          ? fields.map((field, i) => <Element key={i} field={field} />)
          : null}
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
