import React from "react";

import ButtonCmp from "../button/ButtonCmp";
const CatatanAktif = ({ children, catatan, updateCatatan, deleteCatatan }) => {
  return catatan.length > 0 ? (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold my-6">{children}</h1>
      <div className="grid grid-cols-3 gap-4">
        {catatan.map((data) => {
          const { title, body, id, createdAt, archived } = data;
          return (
            <div key={id} className="border-2 border-white rounded-md p-3">
              <h4>{title}</h4>
              <span className="text-white/50 inline-block my-1">
                {createdAt}
              </span>
              <p className="my-2">{body}</p>
              <div className="flex gap-3">
                <ButtonCmp
                  type="button"
                  onClick={() => deleteCatatan(data)}
                  className="text-red-500"
                >
                  Delete
                </ButtonCmp>
                <ButtonCmp
                  onClick={() => updateCatatan(id, data)}
                  className="text-green-500"
                >
                  {archived ? "Pindahkan" : "Arsipkan"}
                </ButtonCmp>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold">{children}</h1>

      <p className="text-xl text-white/50 font-medium text-center">
        Tidak ada catatan
      </p>
    </div>
  );
};

export default CatatanAktif;
