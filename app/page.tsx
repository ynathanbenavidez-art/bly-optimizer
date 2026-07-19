const services = [
  { icon: "↗", title: "Optimización completa", text: "Limpieza profunda, ajustes de Windows y eliminación de procesos que frenan tu equipo.", tag: "Más velocidad" },
  { icon: "⌁", title: "Gaming & FPS", text: "Configuración enfocada en reducir latencia, estabilizar FPS y aprovechar mejor tu hardware.", tag: "Mejor rendimiento" },
  { icon: "⊞", title: "Programas y configuración", text: "Instalación segura de programas, controladores y herramientas esenciales para tu día a día.", tag: "Todo listo" },
  { icon: "✦", title: "Mantenimiento preventivo", text: "Diagnóstico, limpieza de archivos innecesarios y revisión general para evitar futuros problemas.", tag: "Mayor vida útil" },
];

const steps = [
  ["01", "Cuéntame qué sucede", "Revisamos tu equipo, tus necesidades y lo que quieres mejorar."],
  ["02", "Recibe tu diagnóstico", "Te explico qué se puede optimizar antes de hacer cualquier cambio."],
  ["03", "Disfruta el cambio", "Dejo tu PC rápida, ordenada y configurada para lo que necesitas."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Bly Optimizer, inicio">BLY <b>OPTIMIZER</b></a>
        <div className="navlinks"><a href="#servicios">Servicios</a><a href="#proceso">Proceso</a><a href="#beneficios">Beneficios</a></div>
        <a className="button button-small" href="#contacto">Solicitar diagnóstico <span>↗</span></a>
      </nav>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><i /> Optimización profesional para tu PC</div>
          <h1>Tu computadora.<br/><em>Más rápida.</em><br/>Mejor que antes.</h1>
          <p>Elimina la lentitud, mejora el rendimiento y vuelve a disfrutar tu equipo. Servicio personalizado para trabajo, estudio y gaming.</p>
          <div className="actions"><a className="button" href="#contacto">Optimizar mi PC <span>↗</span></a><a className="text-link" href="#servicios">Ver servicios <span>↓</span></a></div>
          <div className="trust"><span><b>✓</b> Atención personalizada</span><span><b>✓</b> Cambios explicados</span><span><b>✓</b> Soporte remoto</span></div>
        </div>
        <div className="hero-visual" aria-label="Panel ilustrativo de rendimiento optimizado">
          <div className="glow" />
          <div className="terminal">
            <div className="terminal-top"><span><i/><i/><i/></span><b>BLY_SYSTEM_SCAN</b><small>● ONLINE</small></div>
            <div className="terminal-body">
              <div className="scan-head"><span>Rendimiento del sistema</span><b>OPTIMIZADO</b></div>
              <div className="score"><strong>98</strong><span>/100<br/><b>EXCELENTE</b></span></div>
              <div className="bars"><div><span>CPU</span><i><b style={{width:"36%"}}/></i><em>36%</em></div><div><span>RAM</span><i><b style={{width:"52%"}}/></i><em>52%</em></div><div><span>DISCO</span><i><b style={{width:"18%"}}/></i><em>18%</em></div></div>
              <div className="metrics"><div><small>TIEMPO DE INICIO</small><strong>8.2s</strong><em>↓ 64%</em></div><div><small>PROCESOS</small><strong>42</strong><em>↓ 38%</em></div></div>
              <div className="terminal-log"><span>&gt; Optimización completada</span><span>&gt; Sistema listo para rendir al máximo_</span></div>
            </div>
          </div>
          <div className="float-card fc-one"><span>↗</span><div><b>+47%</b><small>RENDIMIENTO</small></div></div>
          <div className="float-card fc-two"><span>✓</span><div><b>Todo listo</b><small>SISTEMA SEGURO</small></div></div>
        </div>
      </section>

      <section className="services section shell" id="servicios">
        <div className="section-heading"><div><div className="eyebrow"><i/> Servicios</div><h2>Todo lo que tu PC<br/><em>necesita para rendir.</em></h2></div><p>Soluciones claras, sin complicaciones y enfocadas en resultados que puedas notar desde el primer uso.</p></div>
        <div className="service-grid">{services.map((s, i) => <article className="service-card" key={s.title}><div className="card-number">0{i+1}</div><div className="card-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><span className="tag">{s.tag}</span></article>)}</div>
      </section>

      <section className="process section" id="proceso"><div className="shell"><div className="eyebrow"><i/> Así de fácil</div><h2>Un proceso simple.<br/><em>Un cambio que se nota.</em></h2><div className="steps">{steps.map(([n,t,d]) => <article key={n}><span>{n}</span><div className="step-line"/><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="benefits section shell" id="beneficios"><div className="benefit-panel"><div><div className="eyebrow"><i/> ¿Por qué Bly?</div><h2>Tu PC merece<br/><em>sentirse nueva.</em></h2><p>No aplico una receta genérica. Cada equipo se revisa y configura según su hardware, su uso y tus prioridades.</p></div><div className="benefit-list"><div><b>01</b><span><strong>Transparencia total</strong><small>Sabes qué se cambia y por qué.</small></span></div><div><b>02</b><span><strong>Optimización a medida</strong><small>Trabajo, estudio, diseño o gaming.</small></span></div><div><b>03</b><span><strong>Sin programas innecesarios</strong><small>Solo herramientas seguras y útiles.</small></span></div></div></div></section>

      <section className="cta shell" id="contacto"><div><div className="eyebrow light"><i/> Empecemos</div><h2>¿Listo para recuperar<br/>el rendimiento de tu PC?</h2><p>Cuéntame qué problema tiene tu equipo y recibe una evaluación inicial.</p></div><a className="button button-white" href="https://wa.me/50672753409?text=Hola%20Bly%20Optimizer%2C%20quiero%20mejorar%20el%20rendimiento%20de%20mi%20PC" target="_blank" rel="noreferrer" aria-label="Contactar a Bly Optimizer por WhatsApp al 7275 3409">Hablar por WhatsApp <span>↗</span></a></section>
      <footer className="footer shell"><a className="brand" href="#inicio"><span>B</span>BLY <b>OPTIMIZER</b></a><p>Rendimiento real. Sin complicaciones.</p><small>© 2026 Bly Optimizer</small></footer>
    </main>
  );
}
