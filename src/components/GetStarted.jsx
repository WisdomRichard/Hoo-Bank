import React from 'react'
import styles from "../style.js";
import  {arrowUp} from '../assets'

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[99%] h-[99%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className={`font-manrope mr-1 font-extrabold text-white text-[18px] leading-[23px]`}>
                        <span className={`text-gradient`}>Get</span>
                    </p>
                    <img src={arrowUp} alt='arrow' className={`w-[30px] h-[25px] object-contain`}/>

                </div>
                <p className={`font-manrope font-extrabold text-white text-[18px] leading-[23px] text-center`}>
                    <span className={`text-gradient`}>Started</span>
                </p>
            </div>
        </div>
    )
}
export default GetStarted
