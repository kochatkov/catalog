import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from '../atoms/Button';


const onSubmit = values => {
  alert(JSON.stringify(values))
}

const required = val => {
  if (!val || val === '') {
    return 'This field is required';
  }

  return undefined;
}

const OrderForm = ({ handleSubmit, valid }) => {

  return (
    <div className="OrderForm">
      <form className="OrderForm__form" onSubmit={handleSubmit}>
        <Field 
          name="Ім'я"
          component="input"
          type="text"
          placeholder="Ім'я"
          validate={required}
        />
        <Field 
          name="Прізвище"
          component="input"
          type="text"
          placeholder="Прізвище"
          validate={required}
        />
        <Field 
          name="Телефон"
          component="input"
          type="tel"
          placeholder="Телефон"
          validate={required}
        />
        <Button disabled={!valid} type="submit">Замовити</Button>
      </form>
    </div>

  )
}

export default reduxForm({
  form: 'my-customer-registration',
  onSubmit
})(OrderForm);
