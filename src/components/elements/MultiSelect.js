import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'
import { Multiselect } from "multiselect-react-dropdown";


const MultiSelect = ({  
    fieldvalue,
    fieldtype,
    fieldname,
    fieldlabel,
    fieldoptions,
}) => {
    const {  onSelectHandler,onRemoveHandler } = useContext(FormContext)

    return (
        <>
<label className='form-label'>{fieldlabel}</label>
    <Multiselect name={fieldname} showArrow options={fieldoptions} selectedValues={fieldvalue} isObject={false} onSelect={(selectedList,selectedItem) => onSelectHandler(selectedList,selectedItem)} onRemove={(selectedList,removedItem,fieldtype)=>onRemoveHandler(selectedList,removedItem,fieldtype)}
/>
</>
        
    )
}

export default MultiSelect
