import FormData from './formData.json'
import { useState, useEffect } from 'react'
import Element from './components/Element'
import { FormContext } from './FormContext'

function App() {
  const [elements, setElements] = useState(null)
  useEffect(() => {
    setElements(FormData)
  }, [])
  // console.log(FormData)
  const { formName, formDesc, data: fields } = elements ?? {}

  const handleSubmit = () => {
    console.log(elements)
  }

  const handleChange = (fname, event) => {
    const newElements = [...fields]
    let val = event.target.value
    newElements.forEach((field) => {
      if (fname === field.fieldname) {
        field['value'] += val !== undefined ? val : ''
      }
      console.log(newElements)
    })
  }

  return (
    <FormContext.Provider value={{ handleChange }}>
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
    </FormContext.Provider>
  )
}

export default App
