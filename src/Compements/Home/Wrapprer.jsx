import React from 'react'

export default function Wrapprer() {
    const Data = [
        {
          id: 1,
          title: "Digital Marketing",
          heading: "Digital Marketing heading",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }]
  return (
    <>
    <section className="branding wrapper">
        <div className="container">
            {Data.map((val)=>{
                return(
                    <>
                    <div className="box">
                        <h3>{val.title}</h3>
                        <h2>{val.heading}</h2>
                        <p>{val.desc}</p>
                        <button className="primary-btn">Contact Us</button>
                    </div>
                    </>
                )
            })}
        </div>
    </section>
    </>
  )
}
