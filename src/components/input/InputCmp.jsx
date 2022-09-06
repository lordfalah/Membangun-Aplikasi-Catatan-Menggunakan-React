import React, { Fragment } from "react";
import { showFormattedDate } from "../../utils";

function generateId() {
  return Date.now();
}

const InputCmp = ({
  placeholder,
  className,
  setDataForm,
  dataForm,
  count,
  setCount,
}) => {
  const textJudul = (e) => {
    setDataForm({
      ...dataForm,
      title: e.target.value,
      id: generateId(),
      createdAt: showFormattedDate(+new Date()),
    });

    setCount({ ...count, count: e.target.value.length });
  };

  return (
    <Fragment>
      <label className="relative block text-black">
        <span className="sr-only">Search</span>

        <input
          className={`placeholder:italic placeholder:text-slate-400 block 
          bg-white w-full border border-slate-300 rounded-md 
          py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 
          focus:ring-sky-500 focus:ring-1 sm:text-sm ${className}`}
          placeholder={`${placeholder}`}
          type="text"
          name="search"
          value={
            count.count >= 50 ? dataForm.title.substr(0, 50) : dataForm.title
          }
          onChange={(e) => textJudul(e)}
        />
      </label>
    </Fragment>
  );
};

export default InputCmp;
