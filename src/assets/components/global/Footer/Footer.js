import style from "./Footer.module.css";

import data from "../../../lists/data/data";

import logo from "../../../images/icons/freestyle_logo.png";
import postal_icon from "../../../images/icons/postal_card.svg";
import tel_icon from "../../../images/icons/tel_alert.svg";
import fb_icon from "../../../images/icons/fb.svg";
import insta_icon from "../../../images/icons/instagram.svg";

import cifrao from "../../../images/icons/cifrao.svg";
import cadeado from "../../../images/icons/cadeado.svg";
import visa_icon from "../../../images/icons/visa.png";
import mastercard_icon from "../../../images/icons/mastercard.png";
import diners_icon from "../../../images/icons/diners.png";
import elo_icon from "../../../images/icons/elo.png";
import hipercard_icon from "../../../images/icons/hipercard.png";
import am_expresse_icon from "../../../images/icons/american_express.png"

import safe1_icon from "../../../images/icons/shield_1.png";
import safe2_icon from "../../../images/icons/shield_2.png";
import safe3_icon from "../../../images/icons/shield_3.png";




function Footer() {
    return (
        <footer className={style.MainFooter}>
            <div className={style.mural}>
                <img src={logo} alt="Logo do site" />
                <div className={style.containers}>
                    <div>
                        <h6>NOVIDADES</h6>
                        <a href="/"> Novidades da Semana</a>
                        <a href="/"> Especial Mulheres</a>
                        <a href="/"> Novidades Feminino</a>
                        <a href="/"> Novidades Masculino</a>
                        <a href="/"> Novidades Infantil</a>
                        <a href="/"> Outlet</a>
                    </div>
                    <div>
                        <h6> COLEÇÕES ESPECIAIS</h6>
                        <a href="/"> adidas Forum</a>
                        <a href="/"> adidas Originals</a>
                        <a href="/"> adidas Superstar</a>
                        <a href="/"> Nike Air Force</a>
                        <a href="/"> Nike Air Max</a>
                        <a href="/"> Nike Air Max 2021</a>
                        <a href="/"> Nike Vapormax</a>
                        <a href="/"> Puma Suede</a>
                        <a href="/"> Catálogo de Produtos</a>
                    </div>
                    <div>
                        <h6> Feminino</h6>
                        <a href="/"> Tênis</a>
                        <a href="/"> Tênis Nike</a>
                        <a href="/"> Tênis adidas</a>
                        <a href="/"> Tênis Puma</a>
                        <a href="/"> Roupas</a>
                        <a href="/"> Acessórios</a>

                    </div>
                    <div>
                        <h6> Masculino</h6>
                        <a href="/"> Tênis</a>
                        <a href="/"> Tênis Nike</a>
                        <a href="/"> Tênis adidas</a>
                        <a href="/"> Tênis Puma</a>
                        <a href="/"> Roupas</a>
                        <a href="/"> Acessórios</a>

                    </div>
                    <div>
                        <h6> INSTITUCIONAL</h6>
                        <a href="/"> Quem somos?</a>
                        <a href="/"> Trabalhe Conosco</a>
                        <a href="/"> Seja um franqueado</a>
                        <a href="/"> Nossas lojas</a>
                        <a href="/"> Termos de Uso</a>
                        <a href="/"> Política de Privacidade</a>
                        <a href="/"> Solicite seus Dados</a>
                        <a href="/"> Regulamento CRM</a>
                        <a href="/"> Regulamento Cupom</a>

                    </div>
                    <div>
                        <h6> AJUDA</h6>
                        <a href="/"> Central de Relacionamento</a>
                        <a href="/"> Tipos de entrega</a>
                        <a href="/"> Solicite sua Troca/ Devolução</a>

                    </div>
                    <div className={style.gruop}>
                        <div>
                            <h6> Infantil</h6>
                            <a href="/">Tênis</a>
                            <a href="/"> Acessórios</a>
                        </div>
                        <div>
                            <h6> Outlet </h6>
                            <a href="/">Feminino</a>
                            <a href="/">Masculino</a>
                            <a href="/">Infantil</a>
                        </div>
                        <div>
                            <h6> CONECTE-SE! </h6>
                            <div>
                                <img src={fb_icon} alt={"Icon Facebook"} />
                                <img src={insta_icon} alt={"Icon Instagram"} />
                            </div>

                        </div>
                        <div className={style.buttons}>
                            <button>
                                <img src={postal_icon} alt="Icon Cartão Postal" />
                                <strong>Mande Um E-mail</strong>
                            </button>
                            <button>
                                <img src={tel_icon} alt="Icon Telefone Chamando" />
                                <div>
                                    <p>Atendimento</p>
                                    <strong>{data.tel}</strong>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.infos}> 
            <div>
            <h6> Grupo Freestyle</h6>
            <p className={style.small_size}> © COPYRIGHT 2022 FREESTYLE FRANQUIAS LTDA. TODOS OS DIREITOS RESERVADOS.</p>
            <p className={style.small_text}> 
            Os preços e condições de pagamento exclusivos para compras realizadas através do site e suporte. Os estoques são limitados e os valores não se aplicam à nossa rede de lojas físicas podendo sofrer alterações sem aviso prévio. Em caso de divergência, o preço válido é o do carrinho.
            </p>
            </div>
            <div>
            <h6> <img src={cifrao} alt="Cifrão de pagamento"/> 
                Formas de pagamento</h6>
            <div className={style.flex}>
           <img src={visa_icon} alt="Icon Bandeira VISA"/>
           <img src={mastercard_icon} alt="Icon Bandeira Mastercard"/>
           <img src={am_expresse_icon} alt="Icon Bandeira American Express"/>
           <img src={diners_icon} alt="Icon Bandeira Diners"/>
           <img src={elo_icon} alt="Icon Bandeira Elo"/>
           <img src={hipercard_icon} alt="Icon Bandeira Hipercard"/>
           </div>
             </div>
            <div>
            <h6> <img src={cadeado} alt="Cadeado de Segurança"/> 
                Compra 100% segura</h6>
                <div className={`${style.flex} ${style.black_white}`}>
                <img src={safe1_icon} alt="Icon Segurança Avaliações"/>
           <img src={safe2_icon} alt="Icon Segurança PCI"/>
           <img src={safe3_icon} alt="Icon Segurança E-commerce"/>
                </div>
             
            </div>
            <div className={style.end}>
            <p>
            {data.host} - {data.endereco} - <strong>{data.email}</strong>
            </p>
            </div>
            
            </div>
        </footer>
    )
}


export default Footer;