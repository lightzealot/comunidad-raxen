"use client";

import { useState } from "react";
import Link from "next/link";

const endpoints = [
  ["POST", "/auth/login", "Acceso y sesión de miembros"],
  ["GET", "/posts", "Publicaciones y comentarios"],
  ["GET", "/courses", "Cursos, lecciones y progreso"],
  ["GET", "/members", "Directorio de miembros"],
  ["GET", "/events", "Eventos e inscripciones"],
  ["POST", "/rewards/redeem", "Canje de créditos"],
];

const requirements = [
  "API REST o GraphQL servida por HTTPS",
  "Base de datos PostgreSQL",
  "Autenticación mediante tokens seguros",
  "CORS limitado al dominio de la comunidad",
  "Copias de seguridad automáticas",
];

export default function ServerPage() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    if (!url.startsWith("https://")) {
      setMessage("La dirección debe comenzar con https://");
      return;
    }
    setMessage("Dirección válida. Falta agregarla como variable segura del despliegue.");
  };

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <Link href="/" style={styles.brand}>
          <span style={styles.logo}>R</span>
          <strong>Comunidad Raxen</strong>
        </Link>
        <Link href="/" style={styles.back}>← Volver a la comunidad</Link>
      </header>

      <section style={styles.hero}>
        <div>
          <span style={styles.eyebrow}>INFRAESTRUCTURA PROPIA</span>
          <h1 style={styles.title}>Conecta tu servidor privado</h1>
          <p style={styles.intro}>
            La plataforma puede usar una API alojada en tu VPS, NAS o servidor
            dedicado. Así mantienes bajo tu control las publicaciones, cursos,
            miembros, progreso y recompensas.
          </p>
        </div>
        <div style={styles.serverIcon}>⌁</div>
      </section>

      <section style={styles.twoColumns}>
        <article style={styles.card}>
          <span style={styles.step}>PASO 1</span>
          <h2>Indica la dirección de tu API</h2>
          <p style={styles.muted}>
            Lo recomendable es usar un subdominio como
            <code style={styles.code}> https://api.tudominio.com</code>.
          </p>
          <label style={styles.label}>
            URL del servidor
            <input
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://api.tudominio.com"
              style={styles.input}
            />
          </label>
          <button onClick={validate} style={styles.button}>Comprobar dirección</button>
          {message && <p style={styles.status}>{message}</p>}
          <small style={styles.help}>
            No escribas contraseñas, tokens ni claves privadas en este campo.
          </small>
        </article>

        <article style={styles.card}>
          <span style={styles.step}>PASO 2</span>
          <h2>Prepara tu servidor</h2>
          <div style={styles.list}>
            {requirements.map((item, index) => (
              <div key={item} style={styles.requirement}>
                <span style={styles.number}>{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section style={{ ...styles.card, marginTop: 20 }}>
        <span style={styles.step}>PASO 3</span>
        <h2>Implementa los endpoints mínimos</h2>
        <p style={styles.muted}>
          Estas rutas reemplazarán los datos de demostración por información real.
        </p>
        <div style={styles.endpointGrid}>
          {endpoints.map(([method, path, description]) => (
            <article key={path} style={styles.endpoint}>
              <span style={{ ...styles.method, background: method === "POST" ? "#ffedf0" : "#eaf1ff", color: method === "POST" ? "#d6415a" : "#245edb" }}>{method}</span>
              <code style={styles.path}>{path}</code>
              <small style={styles.help}>{description}</small>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.notice}>
        <strong>Siguiente paso:</strong> para realizar la conexión real necesito
        saber la URL del servidor, su sistema operativo, dónde está alojado y si
        ya tienes una API o base de datos funcionando.
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#f5f7fb", color: "#111d37", padding: "0 24px 60px", fontFamily: "Inter, system-ui, sans-serif" },
  header: { maxWidth: 1160, margin: "0 auto", height: 84, display: "flex", alignItems: "center", justifyContent: "space-between" },
  brand: { display: "flex", alignItems: "center", gap: 12, color: "#111d37", textDecoration: "none" },
  logo: { width: 42, height: 42, borderRadius: 13, display: "grid", placeItems: "center", color: "white", fontWeight: 800, background: "linear-gradient(135deg,#2864f4,#794ef1)" },
  back: { color: "#2864f4", textDecoration: "none", fontWeight: 700 },
  hero: { maxWidth: 1160, margin: "0 auto 20px", padding: 38, borderRadius: 24, display: "grid", gridTemplateColumns: "1fr auto", gap: 30, alignItems: "center", color: "white", background: "radial-gradient(circle at 80%,#7541db88,transparent 28%),linear-gradient(120deg,#07183d,#17165b)" },
  eyebrow: { color: "#c3b4ff", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em" },
  title: { fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.05, margin: "10px 0 14px" },
  intro: { color: "#c8d0e3", maxWidth: 690, fontSize: 17, lineHeight: 1.65, margin: 0 },
  serverIcon: { width: 120, height: 120, display: "grid", placeItems: "center", borderRadius: 30, fontSize: 60, background: "#ffffff18", border: "1px solid #ffffff24" },
  twoColumns: { maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 },
  card: { maxWidth: 1160, margin: "0 auto", background: "white", border: "1px solid #e4e8f0", borderRadius: 20, padding: 28, boxShadow: "0 10px 30px #0c1c3c0a" },
  step: { color: "#794ef1", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em" },
  muted: { color: "#6d768b", lineHeight: 1.6 },
  code: { color: "#5d3fc0", background: "#f1edff", padding: "3px 6px", borderRadius: 5 },
  label: { display: "block", marginTop: 22, fontSize: 13, fontWeight: 700 },
  input: { display: "block", width: "100%", marginTop: 8, border: "1px solid #dce1ea", borderRadius: 10, padding: "13px 14px", outline: "none", color: "#111d37" },
  button: { marginTop: 14, border: 0, borderRadius: 10, padding: "12px 18px", color: "white", fontWeight: 750, background: "linear-gradient(120deg,#2864f4,#794ef1)" },
  status: { color: "#2864f4", fontWeight: 650, fontSize: 13 },
  help: { color: "#7a8396", lineHeight: 1.5 },
  list: { display: "grid", gap: 12, marginTop: 20 },
  requirement: { display: "flex", alignItems: "center", gap: 12, padding: 11, borderRadius: 10, background: "#f7f8fc" },
  number: { width: 28, height: 28, flex: "0 0 auto", display: "grid", placeItems: "center", borderRadius: "50%", color: "white", fontSize: 12, fontWeight: 800, background: "#794ef1" },
  endpointGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 12, marginTop: 20 },
  endpoint: { display: "grid", gridTemplateColumns: "55px 1fr", gap: "8px 12px", alignItems: "center", padding: 15, border: "1px solid #e7eaf1", borderRadius: 12 },
  method: { padding: "5px 7px", textAlign: "center", borderRadius: 6, fontSize: 10, fontWeight: 800 },
  path: { fontWeight: 700, color: "#283551" },
  notice: { maxWidth: 1160, margin: "20px auto 0", padding: 20, borderRadius: 14, color: "#51417c", background: "#eee9ff", border: "1px solid #dcd2ff", lineHeight: 1.6 },
};
