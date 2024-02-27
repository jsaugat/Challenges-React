import { useState } from 'react'
import './App.css'

function ImageSlider() {
  const [imgIdx, setImgIdx] = useState(0)

  const container = [
    "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
    "https://images.unsplash.com/photo-1553456558-aff63285bdd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    " https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  // on left arrow click
  const prevImg = () => {
    setImgIdx((prev) => (prev === 0) ? container.length - 1 : prev - 1)
  }
  // on right arrow click
  const nextImg = () => {
    setImgIdx((prev) => (prev === container.length - 1) ? 0 : prev + 1)
  }

  return (
    <main className='w-[800px] flex justify-between items-center'>
      <button onClick={prevImg}><i className="ri-arrow-left-s-line"></i></button>

      <img src={container[imgIdx]} alt="" width="400"/> {/* src = container[imgIdx] */}

      <button onClick={nextImg}><i className="ri-arrow-right-s-line"></i></button>
    </main>
  )
}

const App = () => <ImageSlider />

export default App
