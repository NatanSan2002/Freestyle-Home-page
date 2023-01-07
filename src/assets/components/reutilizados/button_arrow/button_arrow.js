import {useState} from "react";

import style from "./button_arrow.module.css";

import arrow from "../../../images/icons/arrow_big.png";

function ButtonArrow({ text, input }) { // se for um input passa-lo como "true"

const [value,Setvalue] = useState();


    return (
        <button className={style.ButtonArrow_Container}>
            {input === true ? (
                <input type="text" placeholder={text} onChange={(e) => Setvalue(e.target.value)}/>
            ) : (
                <p> {text}</p>
            )}
            <div> <img src={arrow} alt="Icon Seta"  /></div>
        </button>
    )
}

export default ButtonArrow;