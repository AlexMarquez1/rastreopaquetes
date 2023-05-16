import React from 'react';
import { useField } from 'formik';

const CustomFileUpload = ({ id, name, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      <p-fileupload
        id={id}
        name={name}
        onChange={(e) => helpers.setValue(e.value)}
        value={field.value}
        onBlur={field.onBlur}
        {...rest}
      ></p-fileupload>
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  );
};

export default CustomFileUpload;