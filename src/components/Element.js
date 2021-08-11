import React from 'react'
import Input from './elements/Input'
import Select from './elements/Select'
const Element = ({
  field: {
    fieldtype,
    fieldname,
    fieldplaceholder,
    fieldlabel,
    fieldrules,
    options,
  },
}) => {
  switch (fieldtype) {
    case 'text':
      return (
        <Input
          fieldname={fieldname}
          fieldplaceholder={fieldplaceholder}
          fieldlabel={fieldlabel}
          fieldrules={fieldrules}
        />
      )
    case 'select':
      return (
        <Select
          fieldname={fieldname}
          fieldplaceholder={fieldplaceholder}
          fieldlabel={fieldlabel}
          fieldrules={fieldrules}
          fieldoptions={options}
        />
      )
    default:
      break
  }
}

export default Element
