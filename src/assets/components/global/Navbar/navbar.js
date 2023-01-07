import { useState, useEffect, useRef } from "react";

import style from "./navbar.module.css";

import Search from "../../reutilizados/search/search";

import map_icon from "../../../images/icons/here_map.svg";
import ok_icon from "../../../images/icons/ok_circle.svg";
import logo from "../../../images/icons/freestyle_logo.png";
import arrow from "../../../images/icons/arrow.png";
import user_icon from "../../../images/icons/user_small.svg";
import bolsa_icon from "../../../images/icons/bag.svg";
import info_icon from "../../../images/icons/info.svg";
import bars_icon from "../../../images/icons/bars_menu.png";
import close_icon from "../../../images/icons/x_close.svg";


function Navbar() {

    const mobile_menu = useRef(null);

    const [trigger, Settrigger ] = useState(false); // on/off menu
    const [window_wd,Setwindow_wd] = useState(window.innerWidth);


    useEffect(() => {

       function Change_size(){
            Setwindow_wd(window.innerWidth)
        }

        window.addEventListener("resize",Change_size);


      if(trigger == true && window.innerWidth <= 1036 ){
      mobile_menu.current.style.display = "flex";
      }else{
        mobile_menu.current.style.display = "none";
        Settrigger(false);
      }
    }, [trigger,window_wd])


    return (
        <header className={style.Header_container}>
            <div className={style.up}>
                <p className={style.frete}> <img src={info_icon} alt={"Icon Seta vermelha Mapa"} />  Frete grátis nas  <strong>  compras acima de R$ 100,00 </strong></p>
                <p> Compre  <strong>  tênis, roupas e acessórios autênticos. </strong></p>
                <div>
                    <p> <img src={map_icon} alt={"Icon Seta vermelha Mapa"} /> Encontre uma loja Freestyle</p>
                    <p> <img src={ok_icon} alt={"Icon Conferido"} /> Seja um Franqueado</p>
                </div>
            </div>
            <nav>
                <img src={logo} alt="Logo site" />
                <ul>
                    <li>Novidades <img src={arrow} alt="Seta para baixo" /> </li>
                    <li>Feminino <img src={arrow} alt="Seta para baixo" /> </li>
                    <li>Masculino <img src={arrow} alt="Seta para baixo" /> </li>
                    <li>Infantil <img src={arrow} alt="Seta para baixo" /> </li>
                    <li>Outlet <img src={arrow} alt="Seta para baixo" /> </li>
                    <li>Marcas <img src={arrow} alt="Seta para baixo" /> </li>
                </ul>

                <div className={style.search}>
                    <div className={style.input}> <Search text="O que você procura?" /> </div>
                    <div className={style.ballon}>
                        <img src={user_icon} alt="Icon Usuario" />
                        <div>
                            <p> Olá, Visitante</p>
                            <a href="/"> Entrar</a>
                        </div>
                    </div>
                    <div className={style.bag}>
                        <img src={bolsa_icon} alt="Icon Bolsa" />  {/*Numero de itens no carrinho*/}
                        <p>{0}</p>
                    </div>
            <img className={style.menu_mobile} src={bars_icon} alt="Menu mobile" onClick={(e) => Settrigger(true)} />

                </div>
                <div className={style.mobile_itens} ref={mobile_menu}>
                    <div className={style.container}>
                        <div> <img src={user_icon} alt="Icon Usuário" /> <p> Olá visitante</p></div>

                        <div> <a href="/"> Entrar </a> <a href="/"> Meus Pedidos </a></div>
                    </div>
                  <img className={style.close_menu} src={close_icon} alt="X - fechar" onClick={(e) => Settrigger(false)}/>
                </div>



            </nav>
        </header>
    )
}

export default Navbar;