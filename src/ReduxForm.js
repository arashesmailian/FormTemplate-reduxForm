import React from 'react';
import Input from './Input';
import data from './data.json';
// import datas from "./data.json"
import {reduxForm, Field, reset} from 'redux-form';
// import { useState } from 'react';
import { connect } from 'react-redux';
import { update as updateForm } from './jsonData';

const renderInput = ({input, meta , label}) => (
  <div>
    <label className="field">{label}</label>
    <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
  </div>
);

const onSubmit = values => {
  alert(JSON.stringify(values));
  // setFormDatas({...formDatas , value:values})
};

const required = v => {
  if (!v || v === '') {
    return 'This field is required';
  }

  return undefined;
};

let ReduxForm = ({handleSubmit, valid, update, submitting, pristine, reset, handleChange, value}) => {
  // const [ formDatas, setFormDatas ] = useState(datas);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Submitted!');
  // }
  return(
    <div>
      <h2>Redux Form</h2>
      <form onSubmit={handleSubmit}> 
          { 
          data.map( d =>{
            return( 
              <div key={d.id}>
                <Field
                  name={d.title}
                  component={renderInput}
                  validate={required}
                  type="text" 
                  label={d.title}
                  onChange={handleChange}
                  value={value}
                />
              </div>
            ) 
            })
        } 
          <button disabled={!valid} type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
} 


const validate = val => {
  const errors = {};
  if (!val.firstName) {
    console.log('First Name is required');
    errors.firstName = 'Required';
  }
  if (!val.lastName) {
    console.log('Last Name is required');
    errors.lastName = 'Required';
  }
  if (!val.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }
  if (!val.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(val.age))) {
    errors.age = 'Must be a number'
  } else if (Number(val.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors;
};

// ReduxForm = reduxForm({
//   form: 'ReduxForms',
//   validate,
//   onSubmit,
// })(ReduxForm);

// ReduxForm = connect(
//   state => ({
//     initalValues: state.jsonData.value
//   }),
//   {update: updateForm}
// )(ReduxForm);

// export default ReduxForm;

export default connect(state => ({
  initalValues: state.value
}),
{update: updateForm})
(
  reduxForm({
  form: 'Redux-Form',
  destroyOnUnmount: false,
  validate
})(ReduxForm))