import React from 'react'
import Image from "next/image";
import Style from '@/styles/About.module.css'

export default function About() {
  return (
    <div className={Style.container}>
      <div className={Style.container_main}>
        <h2 className={Style.H2}>About Us</h2>
        <div className={Style.img}>
          <Image
            src="/About/about_logo.png"
            alt="Next.js Logo"
            width={100}
            height={50}
            layout='responsive'
          />
          <div className={Style.text}>
          <p className={Style.p}>
            To help customers make informed decisions, provide detailed product descriptions that include information about the phone's conditions, feadivtures,and specifications. </p>
        </div>
        </div>
        
        <div className={Style.text_flied}>
          <div className={Style.content_1}>
            <h3>Wide reach</h3>
            <p>Online mobile selling allows you to reach a wider audience than traditional methods of selling, such as word-of-mouth or classified ads.this can increase the chances of finding a buyer quickly and at a good price. </p>
          </div>
          <div className={Style.content_2}>
          <h3>Convenience</h3>
          <p>Online mobile selling allows you to reach a wider audience than traditional methods of selling, such as word-of-mouth or classified ads.this can increase the chances of finding a buyer quickly and at a good price. </p>
          </div>
          <div className={Style.content_3}>
          <h3>Competitive pricing</h3>
          <p>Online mobile selling allows you to reach a wider audience than traditional methods of selling, such as word-of-mouth or classified ads.this can increase the chances of finding a buyer quickly and at a good price. </p>
          </div>
        </div>
      </div>
    </div>
  )
}
