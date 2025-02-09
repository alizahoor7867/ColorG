import { Input } from 'postcss'
import React from 'react'
import Inputs from './Control_inputs/Inputs'
import { Toaster } from 'react-hot-toast'
import Generater from './loremGenerater/Generater'
import Color from '/ColorGenerater/color';

const App = () => {
  return (

    <>

    {/* {/* <Inputs/> */}
   <Toaster/>

    {/* <Generater/> */}
    <Color/>
    </>

  )
}

export default App
