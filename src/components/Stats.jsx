import {stats} from '../constants'
import styles from "../style.js";

const Stats = () => (
    <section className={`flex flex-row sm:flex-col items-start md:items-center sm:m-[1rem] md:mb-6 mb-20`}>
        {stats.map((stat) => (
            <div key={stat.id} className={`flex-1 flex gap-[1rem] md:gap-[0.5rem] justify-start items-center flex-row m-3 md:m-0 md:mr-[1rem] sm:mb-[1rem]`}>
                <h4 className={`text-white font-manrope font-bold text-[40px] lg:text-[30px] md:text-[20px] leading-[53px] lg:leading-[43px]`}>{stat.value}</h4>
                <p className={`text-gradient uppercase font-manrope font-normal text-[20px] lg:text-[15px] md:text-[13px] leading-[26px] lg:leading-[21px]`}>{stat.title}</p>
            </div>
        ))}
    </section>
)
export default Stats
