import {quotes} from '../assets'
import styles from "../style.js";

const FeedbackCard = (props) => {
    return (
        <div
            className={`flex justify-between flex-col px-10 py-12 sm:py-4 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card`}>
            <img src={quotes} alt={`double quotes`} className={`w-[42px] h-[27px] object-contain`}/>
            <p className={`${styles.paragraph} font-semibold my-10`}>{props.content}</p>
            <div className={`flex flex-row`}>
                <img src={props.img} alt={`people`} className={`w-[48px] h-[48px] rounded-full`}/>
                <div className={`flex flex-col ml-4`}>
                    <h4 className={`text-white font-manrope font-semibold text-[20px] leading-[32px]`}>{props.name}</h4>
                    <p className={`${styles.paragraph}`}>{props.title}</p>
                </div>
            </div>
        </div>
    )
}
export default FeedbackCard
