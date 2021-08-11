import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'

const Input = ({
  fieldname,
  fieldplaceholder,
  fieldlabel,
  fieldrules,
  fieldvalue,
}) => {
  const { handleChange } = useContext(FormContext)
  //handleChange()
  // console.log(fieldrules[0].message)
  return (
    <div className='mb-3'>
      <label htmlFor='exampleInputEmail1' className='form-label'>
        {fieldlabel}
      </label>
      <input
        name={fieldname}
        type='text'
        className='form-control'
        id='exampleInputEmail1'
        aria-describedby='emailHelp'
        placeholder={fieldplaceholder ? fieldplaceholder : ''}
        required={fieldrules[0].required}
        value={fieldvalue}
        onChange={(event) => handleChange(fieldname, event)}
      />
      <div id='emailHelp' className='form-text'>
        {fieldrules[0].message}
      </div>
    </div>
  )
}

export default Input
