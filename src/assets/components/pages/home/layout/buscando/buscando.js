import style from "./buscando.module.css";

import tenis from "../../../../../images/geral/tenis_banner.png";
import bolsa from "../../../../../images/geral/bag_banner.png";
import outlet from "../../../../../images/geral/outlet_banner.png";
import nike from "../../../../../images/geral/nike_banner.png";

import ButtonArrow from "../../../../reutilizados/button_arrow/button_arrow";

function Buscando({img1,img2,alt1,alt2}) { // imgs no static
    return (
        <article className={style.Buscando_Container}>
            <h6>O que você <br /> <strong>Esta Buscando? </strong></h6>
            <div className={style.v_squares}>
                
                <div>
                <div className={style.shadow}></div>
                    <img src={nike} alt="Blusa Nike" />
                    <p> Roupas</p>
                
                </div>
                <div className={style.par}>
                <div className={style.shadow}></div>
                    <img src={tenis} alt="Tenis" />
                    <p> Tênis</p>
                </div>
                <div>
                <div className={style.shadow}></div>
                    <img src={bolsa} alt="Bolsa" />
                    <p> Acessórios</p>
                </div>
                <div className={style.par}>
                <div className={style.shadow}></div>
                    <img src={outlet} alt="Jaqueta Outlet" />
                    <p> Outlet</p>
                </div>
                </div>
            <div className={style.static}>
        
          <img src={img1} alt={alt1}/>
           <img className={style.vertical} src={img2} alt={alt2}/>
            </div>

            <ButtonArrow text={"Confira Todos"}/>

        </article>
    )
}

export default Buscando;