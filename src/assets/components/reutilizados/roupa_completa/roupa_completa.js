import style from "./roupa_completa.module.css";


function RoupaCompleta({img,itens,name}){ {/*itens oq vem no combo, nome dado ao conjunto*/}
return(
<div className={style.RPCompleta_Container}>
<img src={require("../../../images/geral/"+img)} alt={`Foto do Conjunto ${name}`} />
<p> {itens} peças</p>
<h6> {name}</h6>


</div>
    )
}

export default RoupaCompleta;