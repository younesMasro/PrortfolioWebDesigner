import React from 'react';
import ServicesData from './ServicesData';

export default function Service() {
  return (
    <>
    <section className='services topMargin'>
        <div className="container">
            <div className="heading">
                <h3>My Services</h3>
                <h1>Interactive Services Offered Me </h1>
            </div>
            <div className="contain grid topMargin">
                {ServicesData.map((val)=>{
                    return(
                        <>
                        <div className="box">
                            <div className="img">
                                <img src={val.cover}></img>
                            </div>
                            <div className="text">
                             <h1>{val.title}</h1>
                             <p>{val.desc}</p>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}
