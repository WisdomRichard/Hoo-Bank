import {clients} from '../constants'
import styles from "../style.js";

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client) => (
                    <div key={client.id} className={`flex-1 ${styles.flexCenter} my-5 min-w-[192px] sm:min-w-[120px]`}>
                        <img src={client.logo} alt={`client`} className={`sm:w-[100px] w-[192px] object-contain`}/>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Clients
