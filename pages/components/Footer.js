import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center my-4'>
  <div className="container footercontainer">
    <div className="row justify-content-around">
      <button className='btn text-center col-2' href="#Home"><a href="#Home" className="btn-f">Home</a></button>
      <button className='btn text-center col-2' href="https://twitter.com/DystopiaEarth_"><a href="https://twitter.com/DystopiaEarth_" className='btn-f'>Twitter</a></button>
      <button className='btn text-center col-2' href="#home"><a href="#discord" className='btn-f'>Discord</a></button>
      <button className='btn text-center col-2' href="https://medium.com/@Dystopia.Earth/about"><a href="https://medium.com/@Dystopia.Earth/about" className='btn-f'>Medium</a></button>
    </div>
  </div>
</footer>
  )
}

export default Footer