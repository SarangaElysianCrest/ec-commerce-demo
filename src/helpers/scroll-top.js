import React, { useState, useEffect } from "react";
  
const ScrollToTop = ({showBelow}) => {

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if(window.pageYOffset > showBelow){
      if(!show) setShow(true)
    }else{
      if(show) setShow(false)
    }
  }

  useEffect(() =>{
    if(showBelow){
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  return(
    
      <button onClick={handleClick} className="scroll-top show">
        <i className="fa fa-angle-double-up"></i>
      </button>
  )
}
export default ScrollToTop;