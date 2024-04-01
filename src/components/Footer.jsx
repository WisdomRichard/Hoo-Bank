import styles from '../style.js';
import {logo} from '../assets'
import {footerLinks, socialMedia} from "../constants/index.js";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} p-[1rem] flex-col`}>
        <div className={`${styles.flexStart} flex-row lg:flex-col w-full mb-8`}>
            <div className={`flex-1 flex flex-col justify-start`}>
                <img src={logo} alt={`Hoo Bank`} className={`w-[266px] h-[72px] object-contain`}/>
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable
                    and secure.</p>
            </div>
            <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-0 lg:mt-10`}>
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key} className={`flex flex-col xl:my-4 my-0 min-w-[150px]`}>
                        <h4 className={`font-manrope font-medium text-white text-[18px] leading-[27px]`}>{footerLink.title}</h4>
                        <ul className={`list-none mt-4`}>
                            {footerLink.links.map((link, index) => (
                                <li key={link.name}
                                    className={`font-manrope font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className={`w-full flex justify-between items-center flex-row lg:flex-col pt-6 border-t-[1px] border-t-[#3f3e45]`}>
            <p className={`font-manrope font-normal text-white text-center text-[18px] leading-[27px]`}>2021 HooBank. All Rights Reserved.</p>
            <div className={`flex flew-row mt-0 lg:mt-6 `}>
                {socialMedia.map((social, index) => (
                    <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
                ))}
            </div>
        </div>
    </section>
)
export default Footer
