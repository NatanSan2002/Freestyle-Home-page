import style from "./home.module.css";

import BannerInitial from "./layout/banner_initial/banner_initial.js";
import Looks from "./layout/looks/looks";
import Buscando from "./layout/buscando/buscando";
import Marcas from "./layout/marcas/marcas";
import Lojas from "./layout/lojas/lojas";
import PrimerioSaber from "./layout/primerio_saber/primeiro_saber";

import special_womans from "../../../images/geral/special_womans.jpg";
import adidas_banner from "../../../images/geral/adidassuperstar_banner.png";
import Loja from "../../../images/geral/store.jpg";
import adidas_golden from "../../../images/geral/golden_adidas.jpg";

function Home() {
    return (
        <section className={style.Home_Container}>
            <BannerInitial img1={require("../../../images/geral/banner1.jpg")}
                img2={require("../../../images/geral/banner2.jpg")}
                img3={require("../../../images/geral/banner3.jpg")}
                img4={require("../../../images/geral/banner4.jpg")}
            />
            <Looks/>
            <Buscando img1={special_womans} alt1={"Special Mulheres: Mulher na Floresta com blusa da Adidas"}
            img2={adidas_banner} alt2={"Foto Ténis: Adidas Super Star"}/>
            
            <Marcas/>
            <Lojas img={Loja} alt="Loja fisica por dentro"/>
            <PrimerioSaber img={adidas_golden} alt={"Tênis Adidas Dourado"}/>
        </section>
    )
}

export default Home;