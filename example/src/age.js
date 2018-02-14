import React from 'react';
import { Formik, Field, Form } from 'formik';
import FormikObserver from 'formik-observer';

export default () => (
  <Formik>
    {() => (
      <Form class="pa4 black-80">
        <div class="measure">
          <label htmlFor="age" class="f6 b db mb2">
            Age <span class="normal black-60">(optional)</span>
          </label>
          <Field
            id="age"
            name="age"
            class="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="number"
            aria-describedby="age-desc"
          />
          <FormikObserver
            onChange={({ values }) => console.log('onchange', values)}
          />
        </div>
      </Form>
    )}
  </Formik>
);
