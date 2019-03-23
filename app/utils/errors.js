import forEach from 'lodash/forEach';

export const parser = (errors, data) => Object.keys(errors).filter((key) => key !== 'general').reduce((ret, key) => {
  ret[key] = {
    value: data[key],
    errors: [new Error(errors[key].join(', '))]
  };

  return ret;
}, {});

export const errorList = (errors) => {
  const results = [];
  forEach(errors, (errorArr) => {
    if (errorArr.length) {
      forEach(errorArr, (errString) => {
        results.push(errString);
      });
    }
  });
  return results.length ? results : null;
};

export const display = (form, errors, data) => form.setFields(parser(errors, data));
