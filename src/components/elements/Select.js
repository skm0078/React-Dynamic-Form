import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'

const Select = ({
  fieldname,
  fieldplaceholder,
  fieldlabel,
  fieldoptions,
  fieldvalue
}) => {
  const { handleChange } = useContext(FormContext)

  return (
    <>
      <label className='form-label'>{fieldlabel}</label>
      <select
        className='form-select'
        aria-label='Default select example'
        name={fieldname}
        placeholder={fieldplaceholder}
        value={fieldvalue ? fieldvalue : fieldoptions[0]}
        onChange={(event) => handleChange(fieldname, event)}
      >
        <option disabled
        >Select Menu Options</option>
        {fieldoptions.length > 0 &&
          fieldoptions.map((option, i) => <option key={i}>{option}</option>)}
      </select>
    </>
  )
}

export default Select
