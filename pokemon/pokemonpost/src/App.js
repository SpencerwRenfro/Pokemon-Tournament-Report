import React from 'react'
import Template from './Template'
import Bonus from './components/BonusPage/Bonus';
import { Route, Routes } from "react-router-dom";
import { Link, NavLink, Outlet } from "react-router-dom";
import ListOne from './components/Lists/ListOne';
import ListTwo from './components/Lists/ListTwo';

function app() {
  return (
    <div style={{backgroundColor: "#030712", opacity: ""}}>
      <Routes>
          <Route path="/" element={<Template />} ></Route>
          <Route path="bonus" element={<Bonus />}></Route>
          <Route path="listOne" element={<ListOne />}></Route>
          <Route path="listTwo" element={<ListTwo />}></Route>
      </Routes>
    </div>
  )
}

export default app