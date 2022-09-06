import "./App.css";
import Navbar from "./components/nav/Navbar";
import MainCatatan from "./components/body/MainCatatan";
import { useState } from "react";
import CatatanAktif from "./components/body/CatatanAktif";
import { getInitialData } from "./utils";
import Arsip from "./components/body/Arsip";

function App() {
  const [catatan, setCatatan] = useState(getInitialData());
  const [dataForm, setDataForm] = useState({
    title: "",
    body: "",
    createdAt: "",
    archived: false,
    id: 0,
  });

  // arsip
  const [arsip, setArsip] = useState([]);

  const moveNotes = (id, bool) => {
    if (bool) {
      const resultData = catatan.filter((data) => {
        return data.id !== id;
      });
      setCatatan(resultData);
    } else {
      const resultData = arsip.filter((data) => {
        return data.id !== id;
      });
      setArsip(resultData);
    }
  };

  const addCatatan = (data) => {
    setCatatan([...catatan, { ...data }]);
    setDataForm({ ...dataForm, title: "", body: "" });
  };

  const deleteCatatan = (dataNotes) => {
    if (!dataNotes.archived) {
      const resultData = catatan.filter((data) => {
        return data.id !== dataNotes.id;
      });
      setCatatan(resultData);
    } else {
      const resultData = arsip.filter((data) => {
        return data.id !== dataNotes.id;
      });
      setArsip(resultData);
    }
  };

  const updateCatatan = (id, { ...data }) => {
    if (data.archived) {
      const indexArsip = arsip.findIndex((ars) => ars.id === id);
      const updateData = { ...data, archived: false };
      arsip[indexArsip] = updateData;

      setArsip(arsip);
      setCatatan([...catatan, { ...updateData }]);
      moveNotes(updateData.id, updateData.archived);
    } else {
      const indexCatatan = catatan.findIndex((catat) => catat.id === id);
      const updateData = { ...data, archived: true };
      catatan[indexCatatan] = updateData;

      setCatatan(catatan);
      setArsip([...arsip, { ...updateData }]);
      moveNotes(updateData.id, updateData.archived);
    }
  };

  // search
  const [search, setSearch] = useState("");





  const serchDataNotes = catatan.filter((notes) =>
      notes.title.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div className="App">
      <Navbar
        catatan={serchDataNotes}
        setCatatan={setCatatan}
        setSearch={setSearch}
        search={search}
      />

      <MainCatatan
        addCatatan={addCatatan}
        setDataForm={setDataForm}
        dataForm={dataForm}
      />
      <CatatanAktif
        catatan={serchDataNotes}
        moveNotes={moveNotes}
        updateCatatan={updateCatatan}
        deleteCatatan={deleteCatatan}
      >
        Catatan Aktif
      </CatatanAktif>

      <Arsip
        catatan={arsip}
        moveNotes={moveNotes}
        updateCatatan={updateCatatan}
        deleteCatatan={deleteCatatan}
      />
    </div>
  );
}

export default App;
