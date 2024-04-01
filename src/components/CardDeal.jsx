import {card} from '../assets'
import styles, {layout} from "../style.js";
import Button from "./Button.jsx";

const CardDeal = () => (
    <section className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>Find a Better Card Deal <br className={`sm:hidden`}/> in Few Easy Steps.</h2>
            <p className={`${styles.paragraph} max-w-[520px] mt-[1rem]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <Button styles={`mt-10 sm:mt-7`}/>
        </div>
        <div className={`${layout.sectionImg}`}>
            <img src={card} alt={`card`} className={`w-[100%] h-[100%]`}/>
        </div>
    </section>
)
export default CardDeal
