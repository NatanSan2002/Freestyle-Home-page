import { useState, useRef, useEffect } from "react"

import style from "./carrosel.module.css";

import arrow from "../../../images/icons/arrow_light.png"


function Carrosel(props) {

    const itens = props.itens; // numero de itens que ficaram dentro do carrosel com base no tamanho total deles

    const carrosel = useRef(null);

    const [jump, Setjump] = useState(props.jump); // numero da divisão para os pulos (exp: 4, em itens de 25% de width da um pulo de cada 1 )

    const [window_size, Setwindow_size] = useState(window.innerWidth);

    const [section, Setsection] = useState(1);

    const [childrens, Setchildrens] = useState();




    useEffect(() => {
        Setchildrens(carrosel.current.children.length)

        

        const brokens = [ // Widht de pontos de quebra para mudar o numero de saltos ao click do botao
            {
                width: props.resize1,
                jumps: props.jumpRS1
            },
            {
                width: props.resize2,
                jumps: props.jumpRS2
            },
            {
                width: props.resize3,
                jumps: props.jumpRS3
            },
        ]
        function ChangeWindowSize() {
            Setwindow_size(window.innerWidth);
        }

        window.addEventListener("resize", ChangeWindowSize);

        if (brokens[0] != undefined) {
            if (window_size <= brokens[0].width) {
                Setjump(brokens[0].jumps);
            } else if (brokens[1] != undefined) {
                if (window_size <= brokens[1].width) {
                    Setjump(brokens[1].jumps);
                } else {
                    Setjump(props.jump);
                }
            } else if (brokens[2] != undefined) {
                if (window_size <= brokens[2].width) {
                    Setjump(brokens[2].jumps);
                } else {
                    Setjump(props.jump);
                }
            } else {
                Setjump(props.jump);
            }
        }



    }, [window_size])




    function handleClickLeft() {
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth / jump
        if (section > 1) {
            Setsection(section - 1)
        }
    }

    function handleClickRight() {
        carrosel.current.scrollLeft += carrosel.current.offsetWidth / jump;
        if (section < childrens / itens) {
            Setsection(section + 1)
        }
    }



    return (
        <div className={style.Carrosel_Container}>
            <div className={style.carrosel} ref={carrosel}>
                {props.children}
            </div>
            <div className={style.balls}>
                <div className={section == 1 ? (style.selected) : ""}></div>
                {childrens / itens >= 2 ? (<div className={section == 2 ? (style.selected) : ""}></div>) : ""}
                {childrens / itens >= 3 ? (<div className={section == 3 ? (style.selected) : ""}></div>) : ""}
                {childrens / itens >= 4 ? (<div className={section == 4 ? (style.selected) : ""}></div>) : ""}

                {childrens / itens >= 5 ? (<div className={section == 5 ? (style.selected) : ""}></div>) : ""}
            </div>
            <img onClick={handleClickLeft} className={`${style.arrow_Left} ${style.arrow}`} src={arrow} alt="Seta Esquerda" />
            <img onClick={handleClickRight} className={`${style.arrow_Right} ${style.arrow}`} src={arrow} alt="Seta Direita" />
        </div>
    )
}

export default Carrosel;