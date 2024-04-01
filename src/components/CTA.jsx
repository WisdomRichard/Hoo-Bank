import styles from "../style.js";
import Button from "./Button.jsx";

const CTA = () => (
        <section className={`flex justify-center items-center sm:items-start ${styles.marginY} ${styles.padding} flex-row sm:flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div className={`flex-1 flex flex-col p-[1rem] sm:p-[0.5rem]`}>
                <h2 className={`${styles.heading2}`}>Let’s try our <br className={`hidden sm:flex`}/> Service Now!</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 sm:mt-3`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>

            <div className={`sm:items-start ml-10 sm:ml-0 mt-0 sm:mt-[0.5rem] p-[2rem] sm:p-[1rem]`}>
                <Button/>
            </div>
        </section>
    )
export default CTA
