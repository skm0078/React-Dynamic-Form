import React from 'react'

const Select = ({ fieldname, fieldplaceholder, fieldlabel, fieldoptions }) => {
  return (
    <>
      <label className='form-label'>{fieldlabel}</label>
      <select
        className='form-select'
        aria-label='Default select example'
        name={fieldname}
        placeholder={fieldplaceholder}
      >
        <option disabled>Select Menu Options</option>
        {fieldoptions.length > 0 &&
          fieldoptions.map((option, i) => <option key={i}>{option}</option>)}
      </select>
    </>
  )
}

export default Select
