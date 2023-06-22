import React from 'react'
import Template from './Template'
import Bonus from './components/BonusPage/Bonus';
import { Route, Routes } from "react-router-dom";
import { Link, NavLink, Outlet } from "react-router-dom";
import PeoriaList from './components/Lists/PeoriaList';
import UtahList from './components/Lists/UtahList';
import ArlingtonList from './components/Lists/ArlingtonList';

function app() {
  return (
    <div style={{backgroundColor: "#030712", opacity: ""}}>
      <Routes>
          <Route path="/" element={<Template />} ></Route>
          <Route path="bonus" element={<Bonus />}></Route>
          <Route path="PeoriaList" element={<PeoriaList />}></Route>
          <Route path="UtahList" element={<UtahList />}></Route>
          <Route path="ArlingtonList" element={<ArlingtonList />}></Route>
      </Routes>
    </div>
  )
}

export default app