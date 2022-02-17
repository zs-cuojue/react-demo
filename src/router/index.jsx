import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import ClassDemo from '../class/classDemo';
import About from '../about/about'
import Chart from '../chart/chart'
import Echarts from '../echarts/echarts'
import Hooks from '../hooks/hooks';

const baseRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<ClassDemo />}/>
        <Route exact path='about' element={<About />} />
        <Route exact path='chart' element={<Chart />} />
        <Route exact path='echarts' element={<Echarts />} />
        <Route exact path='hooks' element={<Hooks />} />
      </Routes>
    </HashRouter>
  )
}

export default baseRouter
