import React from 'react'

const BTS = () => {
  return (
    <div className="container" id='BTS'>
<h1 id='Gallery' className='text-center pt-4 mx-auto'>Behind the scenes</h1>
<hr className="mx-auto" />
  {/* ROW IMG LEFT */}
  <div className="row">
  </div>
  <div className="row align-items-center justify-content-around my-5">
    <div className="col-md-7 col-10 my-5">
      <div className="card">
        <img src="https://i.imgur.com/Ovj2xn5.gif" alt="Gif showcasing day and night cycles with weather." className="card-img-top" />
      </div>
    </div>
    <div className="col-md-5 p-2 col-10">
      <h4 className='text-wrap text-center'>Here are some of the day cycles this project includes. Rain or shine we are shoving that "little guy" into the scene.</h4>
    </div>
  </div>

  {/* ROW IMG RIGHT */}
  <div className="row align-items-center justify-content-center my-5">
    <div className="col-md-7 order-md-1 col-10 my-5">
    <div className="card">
        <img src="https://i.imgur.com/Ovj2xn5.gif" alt="Showcasing the assets made for the project." className="card-img-top"/>
      </div>  
    </div>
    <div className="col-md-5 p-2 col-10">
    <h4 className='text-wrap text-center'>Assets were made with love and under the careful vision of our artist's spiders that invade his home.</h4>
    </div>
  </div>
  
  {/* ROW IMG LEFT */}
  <div className="row align-items-center justify-content-center my-5">
    <div className="col-md-7 col-10 my-5">
      <div className="card">
        <img src="https://i.imgur.com/Ovj2xn5.gif" alt="Gif of the original first piece that goes from 3d primitives to finished project." className="card-img-top"/>
      </div>
    </div>
    <div className="col-md-5 p-2 col-10">
      <h4 className='text-wrap text-center'>The founding piece that helped establish what we would want for the rest Chapter 1.</h4>
    </div>
  </div>
</div>
  )
}

export default BTS