import {feedback} from "../constants/index.js";
import styles from "../style.js";
import FeedbackCard from "./FeedbackCard.jsx";

const Testimonials = () => (
    <section id={`clients`} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className={`absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient`}/>
        <div className={`w-full flex justify-around items-center flex-row md:flex-col mb:16 md:mb-6 relative z-[1] gap-[1rem]`}>
            <h1 className={`${styles.heading2} flex-1`}>What People are <br className={`lg:hidden`}/> Saying about Us</h1>
            <p className={`${styles.paragraph} flex-1`}>Everything you need to accept card payments and grow your business <br/> anywhere on the planet.</p>
        </div>
        <div className={`flex flex-wrap justify-start sm:justify-center w-full feedback-container relative z-[1] mt-[3rem] sm:[1rem]`}>
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
)
export default Testimonials
