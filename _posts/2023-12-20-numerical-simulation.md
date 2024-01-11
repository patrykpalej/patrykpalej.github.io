---
title: 📈 Numerical Simulations
tldr: A couple of mathematical simulations of various phenomena

categories: [Projects, Dev]
technologies: [NumPy, Streamlit, Plotly]
tags: [math-modeling, mid-level]

pin: false
project: true

math: true
mermaid: true

image:
  path: /assets/img/projects/numerical-simulations/thumbnail.png
  alt: Numerical simulations

demo: 
  - https://numerical-simulations.streamlit.app/
repos:
  - https://github.com/patrykpalej/Numerical-Simulations
---

# Project description
This project is a set of numerical simulations regarding various phenomena such as:
- Gravitational interactions
- Humans vs. Zombies battle 

## 🪐 Gravity Simulation
In this simulation, you:
1. Set the initial conditions for a group of material points ("planets")
- they can be inserted manually or imported from a file.

2. Customize the animation by multiselecting elements to display 
- planets themselves
- gravity field
- planets' trajectories

3. Determine strategy for collision handling
- annihilate
- freeze
- bounce

4. Set simulation speed

You can also save logs and initial conditions to file but only when running locally.

### Sample animations

Below you can find sample animations from the simulator:

<video controls>
  <source src="/assets/img/projects/numerical-simulations/gravity1.mp4" type="video/mp4">
</video>
<br>
<video controls>
  <source src="/assets/img/projects/numerical-simulations/gravity2.mp4" type="video/mp4">
</video>

<br>
<video controls>
  <source src="/assets/img/projects/numerical-simulations/gravity3.mp4" type="video/mp4">
</video>

## 🧟‍♂️ Humans vs. Zombies
- In this simulation, two groups of characters fight each other to survive
- Each character is defined by a set of characteristics, including their coordinates (x, y), velocity, and power
- When a zombie wins a fight, it transforms a human into a new zombie. However, if a human prevails in the combat, they eliminate their zombie opponent

### Sample animations

Below you can find sample animations of the battle. Humans are <span style="color: orange;">orange</span>
and zombies are <span style="color: green;">green</span>.

<video controls>
  <source src="/assets/img/projects/numerical-simulations/zombies1.mp4" type="video/mp4">
</video>

<br>

<video controls>
  <source src="/assets/img/projects/numerical-simulations/zombies2.mp4" type="video/mp4">
</video>
