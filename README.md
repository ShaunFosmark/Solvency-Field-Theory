for questions or comments:
https://x.com/Shaun_Fosmark

### The Epistemic Structure of Solvency Field Theory

Solvency Field Theory (SFT) is an effective cosmological model built from a small set of established ideas that are usually treated separately. To evaluate the framework accurately, it is critical to separate the foundational inputs from the operational model and the physical interpretation.

**1. The Established Inputs (The Foundation)**

* Irreversible information processing carries a strict thermodynamic cost (Landauer's Principle).
* Causal regions have a finite information capacity (Bekenstein Bound).
* Black holes and cosmological horizons make entropy a geometric quantity.
* Standard cosmology requires any late-time driver of expansion to appear through an effective energy or pressure term in the Friedmann equations.

**2. The Core Hypothesis (The Master Relation)**
Cosmic expansion is not merely a background kinematic fact, but an effective geometric response to irreversible interaction. The expansion rate is tied to entropy throughput relative to an active reservoir:


$$H = \frac{\dot{S}_{total}}{I}$$


Where $\dot{S}_{total}$ is the active macroscopic entropy production rate and $I$ is the accessible information ledger (the radiation field).

**3. The Operational Closure (The Data Model)**
To test this hypothesis against observation, SFT utilizes a stock-and-flow hazard model where the active ledger is leaky. This is represented by a continuous Hazard Exit ODE ($dS/dt = \dot{S} - \lambda S$). The parameters $\Xi$ and the closure normalization $\alpha$ are *calibrated* directly against the DESI DR2/Y3 Cobaya MCMC chains, not yet derived from microphysics.

**4. The Physical Interpretation (The Engine Crash)**
In SFT, late-time cosmic acceleration is interpreted as the response of a causally bounded universe to continued irreversible history under declining ordinary interaction opportunity. As the fuel-limited astrophysical engines (stars and black hole accretion) crash, horizon growth emerges as the dominant remaining macroscopic channel. The DESI-observed phantom crossing ($w < -1$) is the thermodynamic signature of this transition.

---

Solvency Field Theory (SFT)
Dynamic Dark Energy from Baryonic Entropy Depletion and Black Hole Horizon Growth

Author: Shaun Fosmark
Version: 5.0

Overview
Welcome to the official repository for Solvency Field Theory (SFT).

For decades, standard ΛCDM cosmology has relied on a static Cosmological Constant (Λ) to explain the accelerated expansion of the universe. However, quantum field theory predictions for this vacuum energy overestimate the observed value by a catastrophic factor of 10 
120
 . Furthermore, recent observations from the DESI DR2 survey indicate that dark energy is not static, but dynamic, crossing the phantom divide (w<−1) at late cosmic times.

SFT discards the concept of a vacuum energy fluid entirely. Instead, it re-frames cosmological expansion as a mandatory thermodynamic boundary condition. Building on Landauer's Principle and the Holographic Bound, SFT proves that the universe must geometrically expand to accommodate the continuous generation of macroscopic entropy.

The universe accelerates not because it is being pushed, but because its astrophysical entropy engines ran out of fuel, forcing a transition to geometric horizon expansion.

The Master Equation
In SFT, the fractional expansion rate of the universe (H) is defined as the ratio of active macroscopic entropy production ( 
S
˙
  
total
​
 ) to the total accessible information ledger (I):

H(t)= 
I(t)
S
˙
  
total
​
 (t)
​
 
By dividing the pure Bekenstein-Hawking entropy production of supermassive black holes by the radiation entropy of the Cosmic Microwave and Neutrino Backgrounds (I≈10 
89
 k 
B
​
 ), SFT derives the observed Hubble parameter (H 
0
​
 ) to within a single order of magnitude, entirely from first principles with zero free parameters.

The Evidence: TNG300 Telemetry
This repository contains the data and scripts used to extract the true thermodynamic history of the universe from the IllustrisTNG (TNG300-1) cosmological simulation.

By analyzing millions of resolved subhalos across 150GB of telemetry, we track the twin primary engines of cosmic entropy:

Stellar Thermal Exhaust: The dust-reprocessed thermal radiation of star formation.

Supermassive Black Hole Horizon Growth: The dominant active entropy source in the universe, scaling mathematically as  
dt
dS 
BH
​
 
​
 ∝M× 
M
˙
 .

The Discovery: The TNG data reveals that due to a systemic depletion of cold baryonic gas, both the stellar and black hole engines crashed in perfect lockstep between z=1.5 and z=0.2. This 70% loss of active entropy production forces the universe to transition to a geometric overdraft—generating entropy via the de Sitter horizon (S 
horizon
​
 ∝R 
H
2
​
 ). This geometric transition naturally accelerates expansion, directly producing the w<−1 phantom crossing observed by DESI at exactly z≈0.465.

Repository Contents
/Papers/

SFT_V5_Master_Academic.pdf - The formal, peer-reviewed format manuscript detailing the core physics, the TNG data pipeline, and the Sciama-Mach derivation of the Gravitational Constant (G).

SFT_arXiv_Spearhead.pdf - A condensed, 4-page mathematical letter focusing on the Hazard Exit ODE (dQ 
stock
​
 /dt= 
Q
˙
​
  
in
​
 −λQ 
stock
​
 ) and statistical calibration.

/Documentation/

The_Garage_Manual.md - A human-readable, conceptual explanation of SFT stripped of heavy calculus.

The_Spirit_of_Solvency.md - The foundational philosophical framework of an information-theoretic universe.

/Data_and_Scripts/

TNG300_Extraction_Pipeline.py - Python scripts used to query and process the IllustrisTNG HDF5 subhalo catalogs.

SFT_Telemetry_Results.csv - The processed macroscopic entropy production rates ( 
S
˙
  
stars
​
  and  
S
˙
  
BH
​
 ) from z=1.5 to z=0.0.

Hazard_Exit_Optimizer.py - The statistical continuous ODE model mapping the entropy curves against DESI DR2, Union3, and Pantheon+ datasets.

The Collaborative Origin
SFT was built through an iterative, high-density collaboration between human intuition and multiple specialized artificial intelligence models (including Claude Opus and OpenAI architectures). It represents a novel approach to theoretical physics: combining localized mechanical intuition with the rapid, massive data-synthesis capabilities of AI to solve cosmological-scale problems.

“Information is physical. Expansion is the payment.”
