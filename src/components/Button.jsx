import React from 'react'

const Button = (props) => {
    return (
        <button type={"button"} className={`py-4 px-6 bg-blue-gradient font-manrope font-medium text-primary text-[16px] sm:text-[14px] rounded-[7px] outline-none ${props.styles}`}>Get Started</button>
    )
}
export default Button
