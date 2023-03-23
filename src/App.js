// import logo from "./logo.svg";
import "./App.css";
import SongsList from "./features/SongsList/SongsList";
import AddSong from "./features/AddSong/AddSong";
import DeleteSong from "./features/DeleteSong/DeleteSong";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./features/Login/Login";
// import Header from "./Header";
// import UserDetails from "./shared/UserDetails/UserDetails";
// import Capitalize from "./shared/components/Capitalize/Capitalize";
// import Counter from "./shared/Counter/Counter";
// import Accordion from "./shared/components/Accordion/Accordion";
// import Calculator from "./features/Calculator/Calculator";
import Loader from "./shared/components/Loader/Loader";
import { useState } from "react";
import { GlobalData } from "./data/GlobalData.js";

function App() {
  const [loaderSpinnig, setLoaderSpinning] = useState(false);
  return (
    <div className="App">
      {loaderSpinnig && <Loader />}
      <GlobalData.Provider value={{ setLoaderSpinning }}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/song-list" element={<SongsList />}></Route>
          <Route path="/add-song" element={<AddSong />}></Route>
          <Route path="/delete-song" element={<DeleteSong />}></Route>
          <Route path="/" element={<Navigate to={"/login"} />}></Route>
          <Route path="*" element={<h1>Page not found</h1>}></Route>
        </Routes>
      </GlobalData.Provider>
    </div>
  );
}

export default App;
