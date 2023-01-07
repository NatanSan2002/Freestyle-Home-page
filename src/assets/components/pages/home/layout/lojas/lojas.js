import style from "./lojas.module.css";

import ButtonArrow from "../../../../reutilizados/button_arrow/button_arrow";

function Lojas({ img, alt }) {
    return (
        <article className={style.Lojas_Container}>
            <div style={{ backgroundImage: `url(${img})` }}>

                <div className={style.content}><h6> Nossas <strong> Lojas</strong></h6>
                <p>Compre no site e retire na loja se preferir. Encontre a Freestyle mais próxima de você.</p>
                <ButtonArrow text={"Conheça Nossas Lojas"} />
                </div>
                <div className={style.shadow}></div>
            </div>
        </article>
    )
}

export default Lojas;