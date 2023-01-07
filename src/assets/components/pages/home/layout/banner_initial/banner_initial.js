import { useRef, useState, useEffect } from "react";

import style from "./banner_initial.module.css";

import arrow from "../../../../../images/icons/arrow_light.png";
import entrega_icon from "../../../../../images/icons/caminhao.png";
import troca_icon from "../../../../../images/icons/change.png";
import map_icon from "../../../../../images/icons/here_map.svg";


function BannerInitial({ img1, img2, img3, img4, img5 }) {

    const carrosel = useRef(null);

    const [banner, Setbanner] = useState(1);



    function handleClickLeft() {

        if (carrosel.current.scrollLeft == 0) {
            carrosel.current.scrollLeft = carrosel.current.scrollWidth;
            Setbanner(carrosel.current.children.length);
        } else {
            carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
            if (banner > 1) {
                Setbanner(banner - 1);
            }
        }

    }

    function handleClickRight() {

        if (carrosel.current.scrollLeft + carrosel.current.children[1].offsetWidth == carrosel.current.scrollWidth) {
            carrosel.current.scrollLeft = 0;
            Setbanner(1);
        } else {
            carrosel.current.scrollLeft += carrosel.current.offsetWidth;
            if(banner < carrosel.current.children.length){
                Setbanner(banner + 1);
            }


        }
    }

    useEffect(() => {

 if(window.scrollY < 200 && window.innerWidth > 488){
        const interval = setInterval(() => {

            handleClickRight();

        }, 3000);
    
        return () => clearInterval(interval);
    }
    }, [banner])

    return (
        <article className={style.BannerIni_Container}>
            <div>
                <img onClick={handleClickLeft} className={`${style.arrow} ${style.left}`} src={arrow} alt="Seta Esquerda" />
                <img onClick={handleClickRight} className={`${style.arrow} ${style.right}`} src={arrow} alt="Seta Direita" />

                <div className={style.carrosel} ref={carrosel}>
                    <img src={img1} alt="Imagem Banner" />
                    {img2 && <img src={img2} alt="Imagem Banner" />}
                    {img3 && <img src={img3} alt="Imagem Banner" />}
                    {img4 && <img src={img4} alt="Imagem Banner" />}
                    {img5 && <img src={img5} alt="Imagem Banner" />}

                </div>

                <div className={style.balls}>
                    <div className={banner == 1 ? (style.selected) : ""}></div>
                    {img2 && <div className={banner == 2 ? (style.selected) : ""}></div>}
                    {img3 && <div className={banner == 3 ? (style.selected) : ""}></div>}
                    {img4 && <div className={banner == 4 ? (style.selected) : ""}></div>}
                    {img5 && <div className={banner == 5 ? (style.selected) : ""}></div>}
                </div>
            </div>
  <div className={style.info}>
    <p><img src={entrega_icon} alt="Icon Caminhão"/>  <strong>Frete Grátis </strong> Confira as regras </p>
    <p className={style.mid}><img src={troca_icon} alt="Icon Setas apontadas"/> <strong>Até 30 dias </strong> Para solicitar sua troca</p>
    <p><img src={map_icon} alt="Icon Mapa Localização"/> <strong>Nossas Lojas</strong></p>
  </div>
        </article>
    )
}

export default BannerInitial;