import React from 'react';
import '../stylesheets/ContactMn.css'
import SpaceStrz from './SpaceStrz'


export default function ContactMn() {
  return (
    <>
    <div className="ContactMnWrpr">
      <SpaceStrz numberofstars={5} Prim="Reach" Sec='Out'/>
      <div className="ContactMain">
        <div className='ContactCntnt'>
          <div style={{width:'50%', padding:'5px'}}>
            <form action="">
              <fieldset>
              <legend>Fill out the form</legend>
              <label className='c-prim f-sec' htmlFor="Data1">Subject</label><br/>
              <input placeholder='*' type="text" id='Data1' required /><br/>
              <label className='c-prim f-sec'>Name</label><br/>
              <input type="text" name="" id="" /><br/>
              <label className='c-prim f-sec'>Email</label><br/>
              <input placeholder='*' type="email" name="" id="" required/><br/>
              <label className='c-prim f-sec' htmlFor="">Your Message:</label><br/>
              <textarea rows='5' cols='100%' style={{resize:'none'}}></textarea><br/>
              <input className='c-prim f-sec' type="submit" value="Submit" />
              </fieldset>
            </form>

          </div>
          <div>

          </div>
        </div>

      </div>
    </div>
  </>
  )
}
