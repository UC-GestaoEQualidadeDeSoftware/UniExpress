import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";
import logo from "../../assets/Group 1logoUniEx.svg";
import logo2 from "../../assets/logo2.jpeg";
import img1 from "../../assets/Group 14img1.svg";
import img2 from "../../assets/Group 49.svg";
import img3 from "../../assets/Mask Groupimg2.svg";
import img4 from "../../assets/W3img3.svg";
import img5 from "../../assets/W4img4.svg";
import img6 from "../../assets/W5.svg";
import img7 from "../../assets/W6.svg";
import img8 from "../../assets/W7.svg";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  useEffect(() => {}, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: 30,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            alignItems: "center",
          }}
        >
          <img style={{ width: 150 }} src={logo2} />
          <h2 style={{ marginTop: 40 }}>Categorias</h2>
          <div style={{ marginTop: 100 }}>
            <ul style={{ listStyle: "none" }}>
              <li style={{ cursor: "pointer", marginBottom: 10 }}>Novos</li>
              <li style={{ cursor: "pointer", marginBottom: 10 }}>Roupas</li>
              <li style={{ cursor: "pointer", marginBottom: 10 }}>Sapatos</li>
              <li style={{ cursor: "pointer", marginBottom: 10 }}>
                Acessorios
              </li>
              <li style={{ cursor: "pointer", marginBottom: 10 }}>
                Atividades
              </li>
              <li style={{ cursor: "pointer", marginBottom: 10 }}>Presentes</li>
              <li style={{ cursor: "pointer" }}>Inspiração</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <input
                style={{
                  borderRadius: 5,
                  border: "1px solid #eee",
                  width: 300,
                  height: 25,
                }}
                type="buscar"
                id="buscar"
                placeholder="Buscar"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginRight: 10,
                }}
              >
                Produtos
              </div>
              <div style={{ cursor: "pointer", marginRight: 10 }}>Produtos</div>
              <div style={{ cursor: "pointer", marginRight: 10 }}>Produtos</div>
              <div style={{ cursor: "pointer", marginRight: 10 }}>Produtos</div>
              <div style={{ cursor: "pointer", marginRight: 10 }}>Produtos</div>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={img1} style={{ width: 500 }} />
                <img src={img3} style={{ width: 500, marginTop: 15 }} />
              </div>
              <div>
                <img src={img8} style={{ height: 360 }} />
                <img src={img5} style={{ height: 360, marginLeft: 10 }} />
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img src={img4} style={{ height: 360 }} />
                <img src={img2} style={{ height: 360, marginLeft: 10 }} />
              </div>
              <div>
                <img src={img6} style={{ width: 500 }} />
                <img src={img7} style={{ width: 500, marginTop: 15 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
