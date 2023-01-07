import style from "./marcas.module.css";

import Carrosel from "../../../../reutilizados/carrosel/carrosel";

import marcas from "../../../../../lists/marcas/marcas_list";

function Marcas(){
return(
<article className={style.Marcas_Container}>
<h6>Nossas <strong>Marcas</strong></h6>
<Carrosel jump={4} resize1={659} jumpRS1={1} itens={4}> 
{ marcas.map( (i) => {
return (<div className={style.marca}> 
<img src={require("../../../../../images/geral/"+i.icon)} alt={"Imagem Marca: "+i.name}/>
</div> /*Marcas. array de simulação*/
)})
}
</Carrosel>
</article>
)
}

export default Marcas;