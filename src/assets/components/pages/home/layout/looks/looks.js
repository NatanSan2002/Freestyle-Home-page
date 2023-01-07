import { useEffect, useState, useRef } from "react";

import style from "./looks.module.css";

import ButtonArrow from "../../../../reutilizados/button_arrow/button_arrow";

import look_list from "../../../../../lists/looks/looks_list";
import RoupaCompleta from "../../../../reutilizados/roupa_completa/roupa_completa";

import arrow_icon from "../../../../../images/icons/arrow_light.png";



function Looks() {

    const carrosel = useRef(null);

    const default_jump = 4

    const [jump, Setjump] = useState(default_jump);
    const [win_width, Setwin_width] = useState(window.innerWidth);




    useEffect(() => {

        const brokens = [ //Widts em que o carrosel quebra e diminui o numero de saltos do botao  
            {
                width: 894,
                jumps: 3
            },
            {
                width: 622,
                jumps: 2
            },
            {
                width: 413,
                jumps: 1
            },
        ]

        const ChangeWinWidth = () => {
            Setwin_width(window.innerWidth);
        }

        window.addEventListener("resize", ChangeWinWidth);

        if (brokens[2].width >= win_width) {
            Setjump(brokens[2].jumps)
            
        } else if (brokens[1].width >= win_width) {
            Setjump(brokens[1].jumps)
            
        } else if (brokens[0].width >= win_width) {
            Setjump(brokens[0].jumps)
            
        } else {
            Setjump(default_jump)
        
        }

    }, [win_width])



    function HandleRight() {
        carrosel.current.scrollLeft += carrosel.current.offsetWidth / jump;

    }

    function HandleLeft() {
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth / jump;
    }


    return (
        <article className={style.Looks_Container}>
            <h1> SELECIONAMOS ALGUNS <br /> <strong> LOOKS PRA VOCÊ </strong> </h1>
            <div className={style.carrosel} ref={carrosel}>
                {look_list.map((i) => {
                    return <RoupaCompleta img={i.img} itens={i.pieces} name={i.name} />
                })}
            </div>
            <img onClick={HandleLeft} className={`${style.arrow} ${style.arrowLeft}`} src={arrow_icon} alt="Seta Esquerda" />
            <img onClick={HandleRight} className={`${style.arrow} ${style.arrowRight}`} src={arrow_icon} alt="Seta Direita" />

<ButtonArrow text="Confira Todos"/>

        </article>


    )
}

export default Looks;