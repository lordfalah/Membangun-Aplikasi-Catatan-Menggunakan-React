import React from "react";

const TextAreaCmp = ({ setDataForm, dataForm, placeholder }) => {
  return (
    <textarea
      placeholder={placeholder}
      name="w3review"
      rows="7"
      cols="50"
      className="text-black w-full my-6"
      value={dataForm.body}
      onChange={(e) => setDataForm({ ...dataForm, body: e.target.value })}
    ></textarea>
  );
};

export default TextAreaCmp;
