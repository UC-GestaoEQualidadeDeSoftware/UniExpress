import React, { useState } from "react";
import api from "../../services/api";
import logo from "../../assets/UniExpress 1.svg";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  function fazerCadastro() {
    localStorage.setItem("email", email);
    localStorage.setItem("senha", pass);
    history.push("/dashboard");
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
        <p style={{ marginBottom: 10 }}>Crie a sua conta</p>
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
          <label htmlFor="email">Nome *</label>
          <input
            style={{ borderRadius: 5 }}
            type="text"
            id="nome"
            placeholder="Digite o seu nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
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
          <label htmlFor="email">Digite novamente a sua senha *</label>
          <input
            style={{ borderRadius: 5 }}
            type="password"
            id="pass"
            placeholder="Sua senha"
            value={pass2}
            onChange={(event) => setPass2(event.target.value)}
          />
          <div style={{ display: "flex" }}>
            <button
              style={{ borderRadius: 5 }}
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                fazerCadastro();
              }}
            >
              Criar conta
            </button>
          </div>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <a href="/">Já tem conta? Faça login</a>
          </div>
        </form>
      </div>
    </div>
  );
}
