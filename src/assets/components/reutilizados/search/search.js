import style from "./search.module.css";

import lupa from "../../../images/icons/lupa.png";

function Search({text}) {
return(
<div className={style.Search_Container}>
<input type="text" placeholder={text}/>
<img src={lupa} alt="Icon Lupa"/>


</div>
)
}

export default Search;