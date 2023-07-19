import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layouts from './components/Layouts/Layouts'
import FullCard from './components/FullCard.jsx/FullCard'
import './App.css'

function App() {

  const data = [
    {
      title: "Html",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "Css",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "Javascript",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "ReactJs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "vue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "Npm",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "Paython",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "Angular",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "TaypeScript",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "Jango",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "php",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      title: "Laravel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
  ]
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts data={data} />} />
          <Route path="/:title" element={<FullCard data={data}  />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
