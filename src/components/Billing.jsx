import {apple, bill, google} from '../assets'
import styles, {layout} from "../style.js";

const Billing = () => {
    return (
        <section id={`product`} className={`${layout.sectionReverse} gap-[2rem] md:gap-[0.5rem]`}>
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill} alt={`billing`} className={`w-[100%] h-[100%] relative z-[5]`}/>
                <div className={`absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient`}/>
                <div className={`absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient`}/>
            </div>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2} mb-[1rem]`}>Easily Control Your <br className={`md:hidden`}/> Billing & Invoicing</h2>
                <p className={`${styles.paragraph} max-w-[470px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className={`flex flex-row flex-wrap mt-10 sm:mt-6`}>
                    <img src={apple} alt={`app store`} className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`}/>
                    <img src={google} alt={`google store`} className={`w-[128px] h-[42px] object-contain cursor-pointer`}/>
                </div>
            </div>
        </section>
    )
}
export default Billing
