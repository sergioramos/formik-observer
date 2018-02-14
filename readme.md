# formik-observer

[![npm](https://img.shields.io/npm/v/formik-observer.svg?style=flat-square)](https://www.npmjs.com/package/formik-observer)
[![License: BSD 3-clause "New" or "Revised" License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg?style=flat-square)](https://opensource.org/licenses/BSD-3-Clause)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

[![David](https://img.shields.io/david/ramitos/formik-observer.svg?style=flat-square)](https://david-dm.org/ramitos/formik-observer)
[![David](https://img.shields.io/david/dev/ramitos/formik-observer.svg?style=flat-square)](https://david-dm.org/ramitos/formik-observer?type=dev)
[![David](https://img.shields.io/david/peer/ramitos/formik-observer.svg?style=flat-square)](https://david-dm.org/ramitos/formik-observer?type=peer)

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [License](#license)

## Install

```
yarn add formik-observer
```

```
npm install formik-observer
```

## Usage

```js
import React from 'react';
import { Formik, Field, Form } from 'formik';
import FormikObserver from 'formik-observer';

export const Signup = () => (
  <div>
    <h1>My Cool Persisted Form</h1>
    <Formik
      onSubmit={values => console.log(values)}
      initialValues={{ firstName: '', lastName: '', email: '' }}
    >
      {props => (
        <Form className="whatever">
          <Field name="firstName" placeholder="First Name" />
          <Field name="lastName" placeholder="Last Name" />
          <Field name="email" type="email" placeholder="Email Address" />
          <button type="submit">Submit</button>
          <FormikObserver
            onChange={({ values }) => console.log('onchange', values)}
          />
        </Form>
      )}
    </Formik>
  </div>
);
```

## License

BSD-3-Clause
