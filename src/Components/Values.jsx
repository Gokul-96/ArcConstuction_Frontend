import React from 'react'
import committed from '../assets/commited.png'
import inspired from '../assets/inspired.png'
import people from '../assets/people.png'
import efficient from '../assets/efficient.png'
import transparent from '../assets/transparent.png'

const allValues=[
  { img: committed, title: "Committed", des: "At Arc Constructions, we walk the talk. We don't just build; we invest. By developing properties ourselves, we pour our heart and soul into delivering on time and within budget. It's a personal commitment, etched in every brick and beam." },
   { img: inspired, title: "Inspired", des: "We don't see empty lots, we see possibilities. We're not just builders, we're architects of transformation. We breathe new life into assets, shape communities, and unlock real value in places"},
{ img: people, title: "People Centric", des: "We build more than homes; we build the foundation for thriving families. It's not just about walls, it's about fostering communities where comfort and spirit flourish."},
{ img: efficient, title: "People Centric", des: "Functionality isn't a burden, it's our artistic signature. We craft spaces with visual integrity, maximising every square foot without sacrificing aesthetics."},
{ img: transparent, title: "Transparent", des: "Honesty isn't a tagline, it's our way of life. From clear communication to open processes, we believe in building trust, brick by transparent brick. Client testimonials speak louder than words, budgets are demystified, and progress unfolds openly."},

]
const Values = () => {
  return (
    <div className='Core-Container'>
        <h1 className='core-h'>Core Values</h1>
        <div className='values-cards'>
          {allValues.map((values,index)=>(
           <div className='value-card'  key={index}>
            <img src= {values.img} alt={values.titile} className='value-image'/>
            <div className='values-title'>{values.title}</div>
            <div className='values-des'>{values.des}</div>
           </div>
           
          ))}
          <div>
            


        {/* Left: Form */}
        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </div>

            
          </div>
        </div>

        
    </div>
  )
}

export default Values