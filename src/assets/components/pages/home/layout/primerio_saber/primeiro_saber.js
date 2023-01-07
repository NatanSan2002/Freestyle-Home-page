import style from "./primeiro_saber.module.css";

import ButtonArrow from "../../../../reutilizados/button_arrow/button_arrow";

function PrimerioSaber({img,alt}) {
return(
<article className={style.PrimerioSaber_Container}>
<h6>Seja o primeiro a saber</h6>

<p>Receba as novidades da <strong> Freestyle </strong> e saiba antes dos <strong> futuros lançamentos! </strong></p>
<ButtonArrow text={"Digite seu e-mail"} input={true}/>
<img src={img} alt={alt}/>
</article>

)
}


export default PrimerioSaber;