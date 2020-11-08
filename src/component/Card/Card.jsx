import React, { Component, Fragment } from "react";

class Card extends Component {
  render() {
    return (
      <Fragment>
        <div className="card mt-5">
          <div className="card-header">Warta</div>
          <div className="card-body">
            <h5 className="card-title">Pelayanan Secara Online</h5>
            <p className="card-text">
              Diberitahukan kepada seluruh jemaat sekalian mulai bulan Oktober
              akan diadakan persekutuan kategorial secara virtual untuk
              menunjang kerohanian jemaat, link Zoom akan dibagikan berdasarkan
              WA Group perkategorial yang ada. Mohon dukungan dan doa agar
              pelayanan ini dapat berlangsung dengan baik dan kiranya TUHAN
              menolong dan memberkati.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card mt-5">
          <div className="card-header">Pokok Doa</div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">
              Berikut ini adalah pokok doa:
              <ul>
                <li>Berdoa bagi bangsa dan Negara</li>
                <li>Berdoa agar Covid-19 segera berlalu</li>
                <li>Dll</li>
              </ul>
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
