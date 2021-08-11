import React from 'react'
import Input from './elements/Input'
import Select from './elements/Select'
import Multiselect from './elements/MultiSelect'

const Element = ({
  field: {
    fieldtype,
    fieldname,
    fieldplaceholder,
    fieldlabel,
    fieldrules,
    options,
    fieldvalue,
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
          fieldvalue={fieldvalue}
        />
      )
    case 'select':
      return (
        <Select
          fieldname={fieldname}
          fieldplaceholder={fieldplaceholder}
          fieldlabel={fieldlabel}
          fieldrules={fieldrules}
          fieldvalue={fieldvalue}
          fieldoptions={options}
        />
      )
    case 'multiselect':
      return (
        <Multiselect
        fieldtype={fieldtype}
        fieldname={fieldname}
        fieldplaceholder={fieldplaceholder}
        fieldlabel={fieldlabel}
        fieldrules={fieldrules}
        fieldvalue={fieldvalue}
        fieldoptions={options}
        />
      )
    default:
      break
  }
}

export default Element
