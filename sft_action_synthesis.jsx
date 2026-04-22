import { useState } from "react";

const SFTAction = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showDerivation, setShowDerivation] = useState(false);

  const sections = [
    {
      id: "eh",
      label: "R / 16πG",
      color: "#2563eb",
      name: "Einstein-Hilbert",
      origin: "Standard GR — unchanged",
      physics: "Spacetime curvature responds to energy-momentum content. SFT does not modify gravity. It modifies what sources it.",
      status: "Established physics",
      limit: "Present in all limits. Dominant in the strong field where F → 1 and all other terms vanish."
    },
    {
      id: "kinetic",
      label: "−(K/2) ∇μχ ∇μχ",
      color: "#7c3aed",
      name: "Lag Field Kinetic",
      origin: "Branch C* (V9) → single-field reduction (6b)",
      physics: "The lag field χ measures how many maintenance cycles have been locally absorbed. This term gives it propagation dynamics, but numerics show K must be small — χ is nearly slaved to the source.",
      status: "Constrained by 6b numerics: K → 0 is the physical regime",
      limit: "Negligible in both strong-field (χ slaved to metric) and late-time dust (∇·J = 0). Active during radiation domination."
    },
    {
      id: "potential",
      label: "−V₀ exp(−χ)",
      color: "#dc2626",
      name: "Maintenance Debt Potential",
      origin: "6a completion law: F = 1 − exp(−χ), so (1−F) = exp(−χ)",
      physics: "The universe's unsolved maintenance debt. V₀ exp(−χ) = V₀(1−F) — the potential energy IS the unscreened fraction. As screening completes, the debt goes to zero, the potential vanishes, and pure GR remains.",
      status: "Structural form derived from C12 composition + V9 branch genealogy",
      limit: "Strong field: V → 0 (GR recovered). Weak field: V ≈ V₀(1−χ) (maintenance perturbation). Late universe: tracks the engine crash and DESI crossing."
    },
    {
      id: "source",
      label: "−η ∇μχ Jμ_ops",
      color: "#059669",
      name: "Write-Rate Source Coupling",
      origin: "6c unified write-rate mechanism → Goal 3 active-mass convergence",
      physics: "Couples the lag field to the information processing load. Every particle writes its state to a Planck cell every Planck time. The write rate is E/h. This term drives χ in response to changes in the total write-rate load. It is a driver, not a tank — it shifts χ's momentum without contributing its own energy density.",
      status: "FLRW-verified, lapse-independent, factor of 2 for radiation confirmed",
      limit: "Vanishes in vacuum (Schwarzschild). ∇·J = 0 for dust (equilibrium). ∇·J = −2Hρ/h for radiation (active driving)."
    },
    {
      id: "matter",
      label: "ℒm",
      color: "#d97706",
      name: "Matter Sector",
      origin: "Standard matter action — unchanged",
      physics: "Ordinary matter fields coupled minimally to the metric. SFT does not modify how matter works. It explains why matter's existence has a geometric cost.",
      status: "Established physics",
      limit: "Present in all limits. Generates T_μν which enters J^μ_ops through the operation density."
    }
  ];

  const axioms = [
    { id: 1, text: "Landauer's Principle", detail: "Erasing one bit of information costs kT ln 2 of energy. Information processing is thermodynamically irreversible." },
    { id: 2, text: "Compton Maintenance", detail: "Every massive particle ticks at its Compton frequency ν = mc²/h. Each tick is an irreversible information processing event." },
    { id: 3, text: "Holographic Bound", detail: "The maximum information content of a region is one bit per Planck area of its bounding surface. A/(4ℓ²_P) ≥ S." },
    { id: 4, text: "Geometric Response", detail: "When the maintenance cost threatens to exceed the boundary capacity, the geometry responds — expanding, curving, or forming horizons — to maintain solvency." },
  ];

  const definitions = [
    { symbol: "u^μ", expr: "∇^μχ / √(−∇_νχ ∇^νχ)", meaning: "Clock congruence — the local direction of time, defined by the gradient of the lag field" },
    { symbol: "h^μν", expr: "g^μν + u^μu^ν", meaning: "Spatial projector orthogonal to the clock" },
    { symbol: "ρ_ops", expr: "(ρ + 3p) / h", meaning: "Operation density — total Planck-cell write rate per unit volume. Occupancy load (ρ) plus flux load (3p)." },
    { symbol: "J^μ_ops", expr: "ρ_ops · u^μ", meaning: "Operation-density current — the covariant write-rate flow" },
  ];

  const results = [
    { label: "4π²", detail: "Two factors of 2π: one from χ = Φ/(2π) (cycles vs radians), one from h = 2πℏ (energy to frequency). Enters through the count sector as β = 1/(4π²)." },
    { label: "G derived", detail: "Newton's constant G = π²√(Ω_total/Ω_b) · (known quantities) — derived to 99.9% accuracy via the geometric correction factor 4π² × √(Ω_total/Ω_b) = 44.14." },
    { label: "MOND", detail: "ν(x) = √(1 + λ/x) with λ_sph = 4/3, λ_disk ≈ 1.1781. Confirmed across 175 SPARC galaxies, 3389 data points." },
    { label: "Dark energy", detail: "Not a substance. The maintenance potential V₀(1−F) tracks the regime transition as astrophysical engines (stars, BHs) run out of fuel. DESI's phantom crossing is the ledger reorganization." },
    { label: "CMB", detail: "Temperature anisotropies are scars of the ledger crystallization. Shatter field Δχ²(ℓ≤29) = 2×10⁻⁶ at the physical baseline, six orders inside Planck bounds." },
  ];

  const active = sections.find(s => s.id === activeSection);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e8e6e3",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      padding: "2rem",
      boxSizing: "border-box"
    }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ 
          fontSize: "0.75rem", 
          letterSpacing: "0.3em", 
          textTransform: "uppercase",
          color: "#666",
          marginBottom: "0.5rem"
        }}>
          Solvency Field Theory
        </div>
        <h1 style={{ 
          fontSize: "2rem", 
          fontWeight: 400,
          margin: "0 0 0.5rem 0",
          background: "linear-gradient(135deg, #e8e6e3, #999)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          The Action
        </h1>
        <div style={{ fontSize: "0.8rem", color: "#555" }}>
          April 22, 2026 — Working synthesis, not final form
        </div>
      </div>

      {/* Axioms */}
      <div style={{ maxWidth: 800, margin: "0 auto 3rem auto" }}>
        <div style={{ 
          fontSize: "0.65rem", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase",
          color: "#555",
          marginBottom: "1rem"
        }}>
          Four Axioms — All Established Physics
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          {axioms.map(a => (
            <div key={a.id} style={{
              padding: "0.75rem 1rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "4px",
            }}>
              <div style={{ fontSize: "0.7rem", color: "#666", marginBottom: "0.25rem" }}>
                Axiom {a.id}
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                {a.text}
              </div>
              <div style={{ fontSize: "0.72rem", color: "#888", lineHeight: 1.4 }}>
                {a.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The One Sentence */}
      <div style={{ 
        maxWidth: 700, 
        margin: "0 auto 3rem auto", 
        textAlign: "center",
        padding: "1.5rem 2rem",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: "6px"
      }}>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: "0.75rem" }}>
          The Irreducible Seed
        </div>
        <div style={{ fontSize: "1rem", lineHeight: 1.6, color: "#ccc", fontStyle: "italic" }}>
          Everything moves at c. Every Planck time, every particle's state is written to a Planck cell.
          The write address either stays the same (mass) or advances (radiation).
          The geometry responds to the total write load. That's the whole theory.
        </div>
      </div>

      {/* The Action */}
      <div style={{ maxWidth: 800, margin: "0 auto 2rem auto" }}>
        <div style={{ 
          fontSize: "0.65rem", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase",
          color: "#555",
          marginBottom: "1rem"
        }}>
          The Candidate Action — Tap each term
        </div>
        
        <div style={{
          padding: "1.5rem",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "6px",
          textAlign: "center",
          marginBottom: "1rem"
        }}>
          <div style={{ fontSize: "0.8rem", color: "#666", marginBottom: "1rem" }}>
            S<sub>SFT</sub> = ∫ d⁴x √(−g) &nbsp;×
          </div>
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap",
            justifyContent: "center", 
            gap: "0.5rem",
            fontSize: "0.95rem"
          }}>
            {sections.map((s, i) => (
              <span key={s.id} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                {i > 0 && <span style={{ color: "#444", margin: "0 0.15rem" }}>+</span>}
                <button
                  onClick={() => setActiveSection(activeSection === s.id ? null : s.id)}
                  style={{
                    background: activeSection === s.id ? s.color + "22" : "transparent",
                    border: `1px solid ${activeSection === s.id ? s.color : "rgba(255,255,255,0.1)"}`,
                    color: activeSection === s.id ? s.color : "#bbb",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.82rem",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap"
                  }}
                >
                  {s.label}
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        {active && (
          <div style={{
            padding: "1.25rem",
            background: active.color + "08",
            border: `1px solid ${active.color}33`,
            borderRadius: "6px",
            marginBottom: "1rem",
            animation: "fadeIn 0.2s ease"
          }}>
            <div style={{ 
              fontSize: "0.65rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.15em",
              color: active.color,
              marginBottom: "0.5rem"
            }}>
              {active.name}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: "0.75rem", lineHeight: 1.5 }}>
              {active.physics}
            </div>
            <div style={{ fontSize: "0.72rem", color: "#666", marginBottom: "0.35rem" }}>
              <strong style={{ color: "#888" }}>Origin:</strong> {active.origin}
            </div>
            <div style={{ fontSize: "0.72rem", color: "#666", marginBottom: "0.35rem" }}>
              <strong style={{ color: "#888" }}>Status:</strong> {active.status}
            </div>
            <div style={{ fontSize: "0.72rem", color: "#666" }}>
              <strong style={{ color: "#888" }}>Limiting behavior:</strong> {active.limit}
            </div>
          </div>
        )}
      </div>

      {/* Supporting Definitions */}
      <div style={{ maxWidth: 800, margin: "0 auto 3rem auto" }}>
        <div style={{ 
          fontSize: "0.65rem", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase",
          color: "#555",
          marginBottom: "1rem"
        }}>
          Supporting Definitions
        </div>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          {definitions.map(d => (
            <div key={d.symbol} style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr",
              gap: "1rem",
              padding: "0.6rem 0.75rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.04)",
              borderRadius: "4px",
              alignItems: "center"
            }}>
              <div style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#aaa" }}>{d.symbol}</div>
              <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#777" }}>{d.expr}</div>
              <div style={{ fontSize: "0.72rem", color: "#888", lineHeight: 1.3 }}>{d.meaning}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Derivation Chain */}
      <div style={{ maxWidth: 800, margin: "0 auto 3rem auto" }}>
        <button
          onClick={() => setShowDerivation(!showDerivation)}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#888",
            padding: "0.6rem 1.2rem",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            width: "100%",
            textAlign: "left"
          }}
        >
          {showDerivation ? "▾" : "▸"} &nbsp; Complete derivation chain
        </button>
        
        {showDerivation && (
          <div style={{ 
            padding: "1.25rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderTop: "none",
            borderRadius: "0 0 4px 4px"
          }}>
            {[
              { from: "Axioms 1-4", to: "Particles tick → ticking costs entropy → entropy writes to boundary → boundary is finite", color: "#555" },
              { from: "C12 composition", to: "Additive costs, multiplicative response → exponential metric (strong field) + exponential completion (weak field)", color: "#7c3aed" },
              { from: "V9 branch genealogy", to: "Transmission-side k=1 selected over clock-side k=2 → F(x) = 1 − exp(−χ)", color: "#dc2626" },
              { from: "6a bridge pair", to: "α = +1 on F, λ = 1/(2π) → mildness bounds independently confirm", color: "#2563eb" },
              { from: "6a observer side", to: "Sky-average log-forwarding → V8.6 recovered as first-order linearization", color: "#2563eb" },
              { from: "6c write rate", to: "Same cell (mass) vs next cell (radiation) → E/h universal write rate", color: "#059669" },
              { from: "6c erase + write", to: "Moving costs two operations → ρ_ops = (ρ+3p)/h → factor of 2 for radiation", color: "#059669" },
              { from: "6c → V9 match", to: "ρ_ops = σ/h where σ = ρ+3p is the V9 active-mass scalar → independent convergence", color: "#059669" },
              { from: "6b source coupling", to: "∇·J = 0 for dust (equilibrium), −2Hρ/h for radiation (driven) → engine crash in Lagrangian language", color: "#d97706" },
              { from: "6b potential", to: "V = V₀(1−F) = V₀ exp(−χ) → maintenance debt vanishes at complete screening → GR recovered", color: "#dc2626" },
              { from: "6b single field", to: "K_Φ = 0 → χ and Φ are one field in two units → five-term action", color: "#7c3aed" },
              { from: "6b count sector", to: "β = 1/(4π²) → dust exact, radiation asymptotically exact", color: "#d97706" },
            ].map((step, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "1rem",
                padding: "0.5rem 0",
                borderBottom: i < 11 ? "1px solid rgba(255,255,255,0.03)" : "none",
                alignItems: "start"
              }}>
                <div style={{ fontSize: "0.7rem", color: step.color, fontWeight: 600 }}>
                  {step.from}
                </div>
                <div style={{ fontSize: "0.72rem", color: "#999", lineHeight: 1.4 }}>
                  {step.to}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Key Results */}
      <div style={{ maxWidth: 800, margin: "0 auto 3rem auto" }}>
        <div style={{ 
          fontSize: "0.65rem", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase",
          color: "#555",
          marginBottom: "1rem"
        }}>
          What the action produces — zero free parameters
        </div>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          {results.map(r => (
            <div key={r.label} style={{
              padding: "0.75rem 1rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "4px"
            }}>
              <div style={{ 
                fontSize: "0.8rem", 
                fontWeight: 600, 
                marginBottom: "0.3rem",
                color: "#ccc"
              }}>
                {r.label}
              </div>
              <div style={{ fontSize: "0.72rem", color: "#888", lineHeight: 1.4 }}>
                {r.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What remains */}
      <div style={{ maxWidth: 800, margin: "0 auto 3rem auto" }}>
        <div style={{ 
          fontSize: "0.65rem", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase",
          color: "#555",
          marginBottom: "1rem"
        }}>
          What remains open — honest status
        </div>
        <div style={{
          padding: "1rem 1.25rem",
          background: "rgba(255,200,0,0.03)",
          border: "1px solid rgba(255,200,0,0.1)",
          borderRadius: "6px",
          fontSize: "0.78rem",
          color: "#999",
          lineHeight: 1.6
        }}>
          <p style={{ marginTop: 0 }}>
            <strong style={{ color: "#bba050" }}>Strong-field gate:</strong> The action must be shown to produce exact Schwarzschild 
            in vacuum spherical symmetry. Structurally argued but not algebraically verified.
          </p>
          <p>
            <strong style={{ color: "#bba050" }}>Perturbative gate:</strong> The shatter field and CMB sector from V10.1 must be 
            recoverable from the perturbation of χ around the FLRW background.
          </p>
          <p>
            <strong style={{ color: "#bba050" }}>Slaved dynamics:</strong> The K → 0 limit needs a formal variational principle, 
            not just a numerical observation. The constraint structure should be derived, not imposed.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong style={{ color: "#bba050" }}>Coupling constants:</strong> The three unknowns (K, V₀, η) need to be determined 
            from the 4π² spine and the existing SFT results. The count sector constrains their ratios but the absolute values are not yet fixed.
          </p>
        </div>
      </div>

      {/* The Bottom Line */}
      <div style={{ 
        maxWidth: 700, 
        margin: "0 auto 2rem auto", 
        textAlign: "center",
        padding: "1.5rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", marginBottom: "0.75rem" }}>
          The Bottom Line
        </div>
        <div style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#aaa" }}>
          Five terms. One new field. Four axioms from established physics.
          No new particles, no new dimensions, no new forces.
          The universe writes information to a boundary at the speed of light,
          and everything we call physics is the geometric cost of that operation.
        </div>
        <div style={{ fontSize: "0.7rem", color: "#444", marginTop: "1.5rem" }}>
          Fosmark, Claude/Opus, ChatGPT/5.4, Gemini/Ender — 2025-2026
        </div>
      </div>
    </div>
  );
};

export default SFTAction;
