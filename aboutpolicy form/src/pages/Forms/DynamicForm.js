import React from 'react';
import { Form, Button } from 'react-bootstrap';
import formJSON from './formData.json';
import { useState } from 'react';
import Element from './Element';
import FormLayout from './FormLayout';
import { FormContext } from './FormContext';



function DynamicForm() {

 

  const [elements, setElements] = useState(formJSON[0]);

  


  //leftExpression ?? rightExpression. It returns the right operand (rightExpression) if the left operand (leftExpression) is null or undefined.
  const { fields, page_label, page_description,page_title } = elements ?? {}

  const handleSubmit = (event) => {
    event.preventDefault();

    const newElements = { ...elements }
    newElements.fields.forEach(row => {
      row.fields.forEach(field => {

      if(field.field_mandatory === "yes" && field.field_value === ""){
          field.errors = "Should not be empty";
          setElements(newElements);
      }
    })
    });

    console.log(elements);
  }

  const handleChange = (id, event) => {
    console.log("id" + id);
  

    const newElements = { ...elements }
    newElements.fields.forEach(row => {
      row.fields.forEach(field => {
        // console.log ('option', field.field_options);

      // const { field_type, field_id } = field;
      if (id === field.field_id) {
          console.log ('op1', field.field_id);
        switch (field.field_type) {
          case 'checkbox':
            field.field_value = event.target.checked;
            break;
           case 'multiple_select':
            field.field_value = Array.from(event.target.selectedOptions, option => option.value);
            break;
          case 'checkboxselect':
            field.field_value = event.target.value;


            console.log(field.field_value);
            break;
            
          default:
            field.field_value = event.target.value;
            break;
        }
        }
        
     
        

    

      if(field.legal_owner_fields){
        field.legal_owner_fields.forEach(sub_field =>{
          if (id === sub_field.field_id) {
            switch (sub_field.field_type) {
              
              default:
                sub_field.field_value = event.target.value;
                

                break;
            }
         
            if (sub_field.policy_yes_option) {
  sub_field.policy_yes_option.forEach (sub_field => {
  



  if (id === sub_field.field_id) {
      switch (sub_field.field_type) {
        default:
          sub_field.field_value = event.target.value;

         break;
       }
     }
   });
             

}

          }
        })
        }
        
       


      if(field.registered_keeper_fields){
        field.registered_keeper_fields.forEach(sub_field =>{
          if (id === sub_field.field_id) {
            switch (sub_field.field_type) {
              case 'checkbox':
                sub_field.field_value = event.target.checked;
                break;
    
              case 'multiple_select':
                sub_field.field_value = Array.from(event.target.selectedOptions, option => option.value);
                break;
                
              default:
                sub_field.field_value = event.target.value;
                break;
            }
          }
        })
        }
        
        if (field.dynamic_fields) {
  field.dynamic_fields.forEach (sub_field => {
     if (id === sub_field.field_id) { 
      switch (sub_field.field_type) {
        case 'checkbox':
          sub_field.field_value = event.target.checked;
          break;

        case 'multiple_select':
          sub_field.field_value = Array.from (
            event.target.selectedOptions,
            option => option.value
          );
          break;

        default:
          sub_field.field_value = event.target.value;
          break;
      }
    }
  })
        }
        if (field.CNG_fitment_fields) {
  field.CNG_fitment_fields.forEach (sub_field => {
    if (id === sub_field.field_id) {
      switch (sub_field.field_type) {
        case 'checkbox':
          sub_field.field_value = event.target.checked;
          break;

        case 'multiple_select':
          sub_field.field_value = Array.from (
            event.target.selectedOptions,
            option => option.value
          );
          break;

        default:
          sub_field.field_value = event.target.value;
          break;
      }
    }
  });
        }
        if (field.PA_cover_paid_fields) {
  field.PA_cover_paid_fields.forEach (sub_field => {
    if (id === sub_field.field_id) {
      switch (sub_field.field_type) {
        case 'checkbox':
          sub_field.field_value = event.target.checked;
          break;

        case 'multiple_select':
          sub_field.field_value = Array.from (
            event.target.selectedOptions,
            option => option.value
          );
          break;

        default:
          sub_field.field_value = event.target.value;
          break;
      }
    }
  });
}

    

      field.errors = "";

      

      if(field.field_id === "Personal_Accident_covervalue"){
        if(field.field_value !== ""){
          if(!Number(field.field_value)){
              field.errors = "Must be a number";
          }
        }
      }

        if (field.field_id === 'CNG_fitment_accessoriesvalue') {
  if (field.field_value !== '') {
    if (!Number (field.field_value)) {
      field.errors = 'Must be a number';
    }
  }
}
if (field.field_id === 'CNG_fitment_covervalue') {
  if (field.field_value !== '') {
    if (!Number (field.field_value)) {
      field.errors = 'Must be a number';
    }
  }
        }
        if (field.field_id === 'Non-electrical_accessoriesvalue') {
  if (field.field_value !== '') {
    if (!Number (field.field_value)) {
      field.errors = 'Must be a number';
    }
  }
        }
        if (field.field_id === '"Non-electrical_accessories_covervalue') {
  if (field.field_value !== '') {
    if (!Number (field.field_value)) {
      field.errors = 'Must be a number';
    }
  }
        }
        if (field.field_id === 'current_no_claim_bonus') {
  if (field.field_value !== '') {
    if (!Number (field.field_value)) {
      field.errors = 'Must be a number';
    }
  }
        }
        if (field.field_id === 'sum_of_unnamed_passenger') {
  if (field.field_value !== '') {
    if (!Number (field.field_value)) {
      field.errors = 'Must be a number';
    }
  }
}

        if (field.field_id === 'sum_of_paid_passenger') {
  if (field.field_value !== '') {
    if (!Number (field.field_value)) {
      field.errors = 'Must be a number';
    }
  }
}



      setElements(newElements)
    })
    });
  
  }

    return (
      <>
      <FormContext.Provider value={{ handleChange }}>
        <Form className="container">
          <h3 style={{color: "#5A2F7D"}}><b>{page_label}</b></h3>
          <p style={{color: "#090909", fontSize: "16px"}}>{page_description}</p> 
<p style={{color: '#090909', fontSize: '16px'}}>{page_title}</p>

          {
          fields.map((field, i) => {
          if (field.layout === "row") {  
              return (
                <FormLayout
                  key={i}
                  field={field}
                />
              );
          }
          
          
             
            
            else
            {
              return (
                <Element
                  key={i}
                  field={field.fields[0]}
                />
              );
            }
              })
              }
          <Button variant="secondary" className="button-rounded grey-btn" type="button">
            Cancel
          </Button>
          {' '}
          <Button variant="success" className="button-rounded green-btn" type="submit" onClick={(e) => handleSubmit(e)}>
            Continue
          </Button>
          {' '}
         
      </Form>
      </FormContext.Provider>
      </>
    );
  }
  
  export default DynamicForm;