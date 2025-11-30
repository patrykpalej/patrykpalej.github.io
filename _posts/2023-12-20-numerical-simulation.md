---
title: 🔢 Symulacje numeryczne
tldr: Zestaw symulacji matematycznych różnych zjawisk

categories: [Projects, Dev]
technologies: [NumPy, Streamlit, Plotly]
tags: [math-modeling, mid-level]

pin: false
project: true

math: true
mermaid: true

image:
  path: /assets/img/projects/numerical-simulations/thumbnail.png
  alt: Symulacje numeryczne

demo:
  - https://numerical-simulations.streamlit.app/
repos:
  - https://github.com/patrykpalej/Numerical-Simulations
---

# Opis projektu
Projekt zawiera zestaw symulacji numerycznych różnych zjawisk, takich jak:
- Oddziaływania grawitacyjne
- Bitwa ludzi z zombie 

## 🪐 Symulacja grawitacji
W tej symulacji możesz:
1. Ustawić warunki początkowe dla grupy punktów materialnych ("planet")
- można je wprowadzić ręcznie lub zaimportować z pliku

2. Dostosować animację poprzez wybór elementów do wyświetlenia
- same planety
- pole grawitacyjne
- trajektorie planet

3. Określić strategię obsługi kolizji
- anihilacja
- zamrożenie
- odbicie

4. Ustawić prędkość symulacji

Możesz także zapisać logi i warunki początkowe do pliku, ale tylko podczas uruchamiania lokalnego.

### Przykładowe animacje

Poniżej znajdziesz przykładowe animacje z symulatora:

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

## 🧟‍♂️ Ludzie vs. Zombie
- W tej symulacji dwie grupy postaci walczą ze sobą o przetrwanie
- Każda postać jest zdefiniowana przez zestaw cech, w tym współrzędne (x, y), prędkość i siłę
- Gdy zombie wygra walkę, przekształca człowieka w nowego zombie. Jeśli jednak człowiek zwycięży, eliminuje swojego zombie-przeciwnika

### Przykładowe animacje

Poniżej znajdziesz przykładowe animacje bitwy. Ludzie są <span style="color: orange;">pomarańczowi</span>,
a zombie <span style="color: green;">zielone</span>.

<video controls>
  <source src="/assets/img/projects/numerical-simulations/zombies1.mp4" type="video/mp4">
</video>

<br>

<video controls>
  <source src="/assets/img/projects/numerical-simulations/zombies2.mp4" type="video/mp4">
</video>
