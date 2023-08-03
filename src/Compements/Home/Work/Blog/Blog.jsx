import React from 'react'
import {KeyboardDoubleArrowRight} from '@mui/icons-material'

export default function Blog() {
  const Blogdata = [
    {
      id: 1,
      date: "26 FEB, 2019",
      title: "The Most Popular New top Business Apps",
      desc: "The Best Marketing top Management Tools",
      cover: "./assets/blog/blog1.jpg",
      category: "Technology",
    },
    {
      id: 2,
      date: "27 FEB, 2019",
      title: "The Best Marketing top Management Tools",
      desc: "The Best Marketing top Management Tools",
      cover: "./assets/blog/blog2.jpg",
      category: "Agency",
    },
    {
      id: 3,
      date: "28 FEB, 2019",
      title: "3 WooCommerce Plugins to Boost Sales",
      desc: "The Best Marketing top Management Tools",
      cover: "./assets/blog/blog3.jpg",
      category: "IT",
    },
  ]
  
  
  return (
    <>
    <section className='blog services'>
        <div className='container topMargin'>
          <div className='heading'>
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational story every week</h1>
          </div>
          <div className='container grid topMargin'>
           {Blogdata.map((val)=>{
            return(<>
             <div className='box'>
              <div className='img'>
                <img src={val.cover}></img>
              </div>
              <div className='text'>
                <span>{val.date}</span>
                <h2>{val.title}</h2>
                <a href='/'>
                  Read more<KeyboardDoubleArrowRight className='icon'></KeyboardDoubleArrowRight>
                </a>
              </div>
            </div>
            
            </>)
           })}
          </div>
        </div>
    </section>
    </>
  )
}
