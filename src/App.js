import FormData from "./formData.json";
import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";

function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(FormData);
  }, []);
  // console.log(FormData)
  const { formName, formDesc, data: fields } = elements ?? {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const newElements = { ...elements };
    newElements["data"].forEach((field) => {
      const { fieldvalue } = field;
      if (!fieldvalue) {
        return console.error("A Field value cannot be empty");
      }
    });

    console.log(elements);
  };

  const handleChange = (fname, event, fieldtype) => {
    const newElements = { ...elements };
    newElements["data"].forEach((field) => {
      // console.log(field);
      const { fieldname } = field;
      // console.log(newElements['data'].filter((d)=>d.options && d.options.length > 0)[0].options[0]);
      if (fieldtype === "select") {
        field["fieldvalue"] = newElements["data"].filter(
          (d) => d.options && d.options.length > 0
        )[0].options[0];
      }

      if (fname === fieldname) {
        field["fieldvalue"] = event.target.value;
        // console.log(field['fieldvalue']);
      }
      setElements(newElements);
    });
    console.log(newElements);
  };

  const onSelectHandler = (selectedList, selectedItem, fieldtype) => {
    const newElements = { ...elements };
    newElements["data"]
      .filter((d) => d.fieldtype === "multiselect")[0]
      .fieldvalue.push(selectedItem);
    // console.log(
    //   newElements["data"].filter((d) => d.fieldtype === "multiselect")[0]
    // );
    setElements(newElements);
    // console.log(selectedList);
  };
  const onRemoveHandler = (selectedList, removedItem, fieldtype) => {
    const newElements = { ...elements };
    const fvarr = newElements["data"].filter(
      (d) => d.fieldtype === "multiselect"
    )[0].fieldvalue;

    for (let i = 0; i < fvarr.length; i++) {
      if (fvarr[i] === removedItem) {
        fvarr.splice(i, 1);
      }
    }
    newElements["data"].filter(
      (d) => d.fieldtype === "multiselect"
    )[0].fieldvalue = fvarr;
    setElements(newElements);
    // console.log(selectedList);
  };

  return (
    <FormContext.Provider
      value={{ handleChange, onSelectHandler, onRemoveHandler }}
    >
      <div className="App container">
        <h3>{formName}</h3>
        <blockquote>
          <h5>{formDesc}</h5>
        </blockquote>
        <form>
          {fields
            ? fields.map((field, i) => <Element key={i} field={field} />)
            : null}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
