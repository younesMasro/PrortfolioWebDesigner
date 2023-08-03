import React from 'react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IosShareIcon from '@mui/icons-material/IosShare';

export default function () {
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
        {
          id: 4,
          title: "Digital Marketing",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          cover: "./assets/work/work4.jpg",
        },
        {
          id: 5,
          title: "Digital Marketing",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          cover: "./assets/work/work5.jpg",
        },
        {
          id: 6,
          title: "Digital Marketing",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          cover: "./assets/work/work6.jpg",
        },
      ]
      
  return (
    <>
    <section className="work">
        <div className="heading">
            <h3>My Works</h3>
            <h1>Some Of My Competed Projects</h1>
        </div>
        <div className="content">
            {Data.map((val)=>{
                return(
                    <>
                    <div className="box">
                        <div className="img">
                            <img src={val.cover}></img>
                        </div>
                        <div className="overlay">
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                            <div className="icon">
                                <FullscreenIcon className='iconWork'></FullscreenIcon>
                                <IosShareIcon className='iconWork'></IosShareIcon>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </section>
    </>
  )
}
