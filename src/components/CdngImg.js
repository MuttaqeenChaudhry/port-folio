import React from 'react'
import '../stylesheets/CdngImg.css'
import cdimg from '../images/Coding.jpg'

export default function CdngImg() {
  return (
    <div className='CdngImg_Wrpr'>
      <div className='CdngImg'>
      <img src={cdimg} alt="IMG" className='cd_or_img blur' />
      </div>
    </div>
  )
}
