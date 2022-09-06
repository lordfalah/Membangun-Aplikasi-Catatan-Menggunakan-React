import React, { useState } from "react";
import ButtonCmp from "../button/ButtonCmp";
import InputCmp from "../input/InputCmp";
import TextAreaCmp from "../input/TextAreaCmp";

const MainCatatan = ({ setDataForm, dataForm, addCatatan }) => {
  const [count, setCount] = useState({
    initial: 50,
    count: 0,
  });

  const submitDataForm = (e) => {
    e.preventDefault();

    addCatatan(dataForm);
  };

  return (
    <div className="container mx-auto flex items-center flex-col">
      <form onSubmit={submitDataForm} className="w-1/2">
        <h1>Buat Catatan</h1>
        <p className="text-right">
          Sisa Karakter : {count.count >= 50 ? 0 : count.initial - count.count}{" "}
        </p>
        <InputCmp
          setDataForm={setDataForm}
          dataForm={dataForm}
          setCount={setCount}
          count={count}
          placeholder="judul..."
        />
        <TextAreaCmp
          placeholder="tuliskan catatanmu disini..."
          setDataForm={setDataForm}
          dataForm={dataForm}
        />
        <ButtonCmp type="submit">Buat</ButtonCmp>
      </form>
    </div>
  );
};

export default MainCatatan;
