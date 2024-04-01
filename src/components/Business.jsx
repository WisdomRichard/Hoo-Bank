import {features} from '../constants'
import styles, {layout} from "../style.js";
import Button from "./Button.jsx";

const FeatureCard = (props) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${features !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
        <div className={`w-[64px] h-[64px] p-[1rem] rounded-full bg-dimBlue`}>
            <img src={props.icon} alt={`icon`} className={`w-[100%] h-[100%] object-contain`}/>
        </div>
        <div className={`flex-1 flex-col ml-[2rem]`}>
            <h4 className={`text-white font-manrope font-bold text-[20px] leading-[35px] mb-[0.5rem]`}>{props.title}</h4>
            <p className={`${styles.paragraph}`}>{props.content}</p>
        </div>
    </div>
)
const Business = () => {
    return (
        <section id='features' className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>You do the business, <br className={`block sm:hidden`}/> we’ll handle the money.</h2>
                <p className={`${styles.paragraph} mt-[1.5rem]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button styles='mt-10 sm:mt-7'/>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index}/>
                ))}
            </div>

        </section>
    )
}
export default Business
