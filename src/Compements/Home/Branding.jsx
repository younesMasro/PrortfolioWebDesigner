import React from 'react'

export default function Branding() {
    const Data = [
        {
          id: 1,
          title: "Digital Marketing",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          cover: "./assets/work/work1.jpg",
        },
        {
          id: 2,
          title: "Digital Marketing",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          cover: "./assets/work/work2.jpg",
        },
        {
          id: 3,
          title: "Digital Marketing",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          cover: "./assets/work/work3.jpg",
        },
       
       
      ]
  return (
    <>
    <section className='branding'>
     <div className="container grid">
     {Data.map((value)=>{
       return <div className="box flex">
        <div className="text">
            <h1 key={value.id}>{value.id}</h1>
        </div>
        <div className="para">
            <h2>{value.title}</h2>
            <p>{value.desc}</p>
        </div>
       </div>
     })}
     </div>
    </section>
    </>
  )
}
