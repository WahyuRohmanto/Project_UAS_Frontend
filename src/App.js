import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/covid/about";
import Indonesia from "./pages/covid/indonesia";
import Provinsi from "./pages/covid/provinsi";
import data from "./utils/constants/provinces";

function App() {
  const [provincedata, setProvdata] = useState(data.provinces);
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/covid/indonesia" element={<Indonesia />}></Route>
          <Route path="/covid/provinsi" element={<Provinsi provincedata={provincedata} setProvdata={setProvdata} />}></Route>
          <Route path="/covid/about" element={<About />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
