import React from 'react'

export default function About() {
    const data = [
        {
          id: 1,
          title:'Younes Masrour',
          desc1: "Lorem ipsum dolor sit amet, consecte tuer 1 adipiscing elit enean.",
          desc2: "Lorem ipsum dolor sit amet, consecte tuer 2 adipiscing elit enean.",
          desc3: "Lorem ipsum dolor sit amet, consecte tuer 3 adipiscing elit enean.",
          cover: "./assets/services/services-1.jpg",
        }]
  return (
    <>
    <section className='about topMargin '>
        <div className="container flex">
            {data.map((val)=>{return(
                <>
                <div className="left mtop">
                    <div className="heading">
                        <h3>About me</h3>
                        <h1>{val.title}</h1>
                    </div>
                    <p>{val.desc1}</p>
                    <p>{val.desc2}</p>
                    <p>{val.desc3}</p>
                    <button className='primary-btn'>Download CV</button>
                </div>
                <div className="right">
                    <div className="img">
                        <img src='https://github.com/sunil9813/Resource-One/blob/master/assets/about.jpg?raw=true'></img>
                    </div>
                </div>
                </>
            )})}
        </div>
    </section>
    </>
  )
}
