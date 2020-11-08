import React from "react";
import Card from "./component/Card/Card";
import Carousel from "./component/Carousel/Carousel";
import "./styles.css";

export default function App() {
  return (
    <div className="container-fluid p-0">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          GKTB
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Bagian
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Sekolah Minggu
                </a>
                <a class="dropdown-item" href="#">
                  Remaja
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Pemuda
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Pria
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Wanita
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Usia Indah
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Carousel />
        <Card />
      </main>
    </div>
  );
}
