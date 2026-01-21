import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./homeBody.css";

import commIco from '../../../../assets/svgs/community.svg'
import userIco from '../../../../assets/svgs/user.svg'
import delatIco from '../../../../assets/iconmini.png'

import CommunitySearcher from "../communitySearcher/communitySearcher";
import UserSearcher from "../userSeacher/userSearcher";
import User from "../user/user";

export default function HomeBody(){

    return (
        <div className="homeBody">
            <div className="infoBody">
                <Swiper
                    key="swiper-fix"
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <div className="card">
                            <div className="cardHeader">
                                <img src={delatIco} style={{height: '30px'}}/>
                                <p style={{fontWeight: '700'}}> Bem vindo! </p>
                            </div>
                            <p style={{fontWeight: 600}}>
                                Delta é uma rede social
                                com o objetivo de unir pessoas com gostos semelhantes
                                em comunidades. Encontre amigos e converse em tempo real. Tudo é possível!
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <div className="cardHeader">
                                <img src={userIco} style={{height: '30px'}}/>
                                <p style={{fontWeight: '700'}}> Encontre amigos! </p>
                            </div>
                            <p style={{fontWeight: 600}}>
                                Precisa de companhia? Temos uma aba exclusiva para amigos em nosso site! 
                                Divirta-se conhecendo novas pessoas e formando laços únicos :)
                                
                            </p>
                                
                        </div>    
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <div className="cardHeader">
                                <img src={commIco} style={{height: '30px'}}/>
                                <p style={{fontWeight: '700'}}> Entre em comunidades! </p>
                            </div>
                            <p style={{fontWeight: 600}}>
                                Que tal fazer parte de um bando? Com a função de comunidades você pode
                                conhecer pessoas com o mesmo gosto que o seu em poucos cliques! Que tal começar 
                                a explorar um pouco do nosso ecossistema?   
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="SearchDiv">
                <div className="sechDivHead">
                    <img src={commIco} alt="commIco" style={{height: 30}}/>
                    <p style={{fontWeight: 600, fontSize: 30}}> COMUNIDADES </p>
                </div>
                <div className="searcher">
                    <input type="text" className="searcherInput" placeholder="Pesquise por comunidades"/>
                    <button className="searchComBtn"></button>
                </div>
                <CommunitySearcher/>
            </div>
            
            <div className="SearchDiv" style={{position: 'relative', top: 100}}>
                <div className="sechDivHead">
                    <img src={userIco} alt="userIco" style={{height: 30}}/>
                    <p style={{fontWeight: 600, fontSize: 30}}> CONHEÇA PESSOAS </p>
                </div>
                <div className="searcher userSearcherBg">
                    <input type="text" className="searcherInput" placeholder="Pesquise por novos amigos"/>
                    <button className="searchUsBtn"></button>
                </div>
                <UserSearcher/>
            </div>
        </div>
    );
}