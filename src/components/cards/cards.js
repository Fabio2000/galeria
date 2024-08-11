import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';
import fevereiro from '../../images/fevereiro.jpeg';
import marco from '../../images/marco.jpeg';
import abril from '../../images/abril.jpeg';
import maio from '../../images/maio.jpeg';
import junho from '../../images/junho.jpeg';
import julho from '../../images/julho.jpeg';
import Lover from '../../audios/lover.mp3'
import marcoo from '../../audios/02_2024.mp3'

export default function Card() {
    return (
        <section>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="polaroid-card">
                            <img src={fevereiro} className="card-img-top" alt="..." />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p>Essa foto foi na primeira vez que eu te disse eu te amo e primeira vez que te dei flores, ai estavamos na Centauro</p>
                                    <audio controls>
                                        <source src={Lover} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                            <div className="polaroid-caption">Nosso primeiro mês, mas antes do dia 27/02</div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="polaroid-card">
                            <img src={marco} className="card-img-top" alt="..." />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p>Este mês foi muito especial, comemos no shopping, demos muitas risadas, alegria, fofocas, o mês da lily ♡ </p>
                                    <audio controls>
                                        <source src={marcoo} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                            <div className="polaroid-caption">Março/2024 um mês fechado com a mulher da minha vida</div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="polaroid-card">
                            <img src={abril} className="card-img-top" alt="..." />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p>Avançamos uma etapa importante neste mês, fizemos nossa primeira viagem, eu ajudei na churrasqueira com seu pai, ganhei mais a confiança dos familiares, mais um mês feliz e repleto de alegrias</p>
                                    <audio controls>
                                        <source src="path_to_audio_file.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                            <div className="polaroid-caption">Nossa primeira viagem juntos, mais um mês marcante Abril/2023</div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="polaroid-card">
                            <img src={maio} className="card-img-top" alt="..." />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p>Outro mês com nossos testes de convivencia dando certo, com muito sorrio, felicidade, com presentes lindos, felicidades lindas ♡</p>
                                    <audio controls>
                                        <source src="path_to_audio_file.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                            <div className="polaroid-caption">Oque marca muito esse Mês é minha linda camisa ♡ Maio/2024</div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="polaroid-card">
                            <img src={junho} className="card-img-top" alt="..." />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p>Essa foto foi muito especial para mim, eu amei muito esse dia,nosso primeiro dia dos namorados juntos, em um lugar legal com uma pessoa especial.</p>
                                    <audio controls>
                                        <source src="path_to_audio_file.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                            <div className="polaroid-caption">Nosso quinto mês juntos, primeiro dia dos namorados. Junho/2024.</div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="polaroid-card">
                            <img src={julho} className="card-img-top" alt="..." />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p>Todas as fotos são muito especiais, essa aqui foi um dia lindo que vc trouxe mais cor para ele, estava com a minha Mãe e vc em um lugar que pra mim não tinha tanta importancia, mas você trouxe uma COR linda para o local . Eu te amo muito!</p>
                                    <audio controls>
                                        <source src="path_to_audio_file.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </div>
                            <div className="polaroid-caption">Nosso sexto Mês juntos, em um dia muito especial Julho/2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
