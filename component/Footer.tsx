import React from 'react'
import Style from '@/styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <div
            className={Style.Footer}>
            <div style={{position: "relative"}}>
                <Image
                    src={"/Footer/footer.png"}
                    alt={"Picture of the author"}
                    width={500}
                    height={500}
                    layout='responsive'
                />
            </div>
            <div className={Style.content}>
                <div className={Style.one}>
                <Image
                    src={"/Footer/lo.png"}
                    alt={"Picture of the author"}
                    width={200}
                    height={300}
                    layout='responsive'
                />


                </div>
                <div className={Style.two}>

                </div>
            </div>
        </div>
    )
}
