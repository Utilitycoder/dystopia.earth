import React from 'react'

const FAQ = () => {
  return (
    <div className="container col-9 mx-auto mt-5 " id='FAQ'>
<h1 className='text-center pt-4'>FAQ</h1>
<hr className="mx-auto" />
<div  className="row mt-5">
  <h1 className="faq-t ">1 - How many in total will there be?</h1>
  <h2 className="faq-st mt-2 mt-2">The chapter 1 of this project will have a maxinum of 1000 hand-made pieces which is released in batches.</h2>
</div>
<div className="med-spacer"></div>
<div className="row">
  <h1 className="faq-t">2 - Are the pieces generative or weighted based on rarities?</h1>
  <h2 className="faq-st mt-2">No. Pieces first must follow the storyboard, paired with homemade Blender assets, go through review from the team, and then rendered in 3840x2160 (4k). Certain pieces line up to tell a story in a stop-motion type style. </h2>
</div>
<div className="med-spacer"></div>
<div className="row">
  <h1 className="faq-t">3 - What is your roadmap/vision?</h1>
  <h2 className="faq-st mt-2">As we begin Chapter 1 of our project we look forward to catering an organic community that will be with us along the way. We look forward to donating to enviornmental causes and partnering with like-minded projects.</h2>
</div>
<div className="med-spacer"></div>
<div className="row">
  <h1 className="faq-t">4 - How much and why should I?</h1>
  <h2 className="faq-st mt-2">Chapter 1 will be at 0.1 ETH as all of our pieces were crafted individually. The contract will implement ERCA721A and proper security measures to ensure an stress-free mint.</h2>
</div>
<div className="small-spacer"></div>
</div>
  )
}

export default FAQ