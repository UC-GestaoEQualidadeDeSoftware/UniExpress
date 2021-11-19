import React, { useState } from "react";
import api from "../../services/api";
import logo from "../../assets/UniExpress 1.svg";
import Swal from "sweetalert2";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function verificaLogin() {
    if (localStorage.getItem("email") && localStorage.getItem("senha")) {
      if (
        localStorage.getItem("email") !== email ||
        localStorage.getItem("senha") !== pass
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Parece que você não tem cadastro, cadastre-se",
        });
      } else {
        history.push("/dashboard");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Parece que você não tem cadastro, cadastre-se",
      });
    }
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ height: "100%" }}>
        <img style={{}} src={logo} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0px 60px",
        }}
      >
        <p style={{ marginBottom: 10 }}>Faça o seu Login</p>
        <form>
          <label htmlFor="email">E-mail *</label>
          <input
            style={{ borderRadius: 5 }}
            type="email"
            id="email"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="email">Senha *</label>
          <input
            style={{ borderRadius: 5 }}
            type="password"
            id="pass"
            placeholder="Sua senha"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          />
          <div style={{ display: "flex" }}>
            <button
              style={{ borderRadius: 5, marginRight: 20 }}
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                verificaLogin();
              }}
            >
              Logar
            </button>
            <button
              style={{ borderRadius: 5 }}
              className="btn"
              onClick={() => {
                history.push("/cadastro");
              }}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
