import React from 'react';
import { Formik, Field, Form } from 'formik';
import FormikObserver from 'formik-observer';

export default () => (
  <Formik>
    {() => (
      <Form class="pa4 black-80">
        <div class="measure">
          <label htmlFor="name" class="f6 b db mb2">
            Name <span class="normal black-60">(optional)</span>
          </label>
          <Field
            id="name"
            name="name"
            class="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
          />
          <FormikObserver
            onChange={({ values }) => console.log('onchange', values)}
          />
        </div>
      </Form>
    )}
  </Formik>
);
