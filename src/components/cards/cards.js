import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';
import fevereiro from '../../images/fevereiro.jpeg'

export default function Card() {
    return (
        <section>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div class="clearfix">
                            <card>
                                <img src={fevereiro} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />
                            </card>
                        </div>
                    </div>
                    {/* <div className="col-sm-4 col-md-4 col-lg-4">
            Card 2
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            Card 3
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            Card 4
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            Card 5
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            Card 6
          </div> */}
                </div>
            </div>
        </section>
    );
}
