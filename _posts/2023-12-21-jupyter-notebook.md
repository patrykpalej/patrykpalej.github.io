---
title: Jupyter Notebook

categories: [Knowledge, Toolkit]
tags: [basics, tools]

pin: false
blog: true

math: true
mermaid: true
---

The most common way of writing Python code is using `.py` files. An alternative to `.py` are so called "notebooks" (extended with `.ipynb`) . They are not only another file format, but most of all a different philosophy of writing (not only) Python code.


## What is a notebook?
A notebook (`.ipynb` file) is actually a JSON file which contains Python code (and/or Markdown text) organized in so called "cells". When you open the file in an editor that supportsthe `.ipynb` format you'll see something like this:

---

![img.png](/assets/img/knowledge/jupyter/jupyter1.png)

---

After running a single code cell, it is sent to the IPython kernel and executed.


## Editors with notebook support
- Jupyter Notebook
- Jupyter Lab
- Google Colab
- PyCharm (read only in the free version)
- Visual Studio Code

and more.

Many `.ipynb` editors (especially when they use cloud) work in a browser.

## Notebook key features
- **code** and **text** support
- each cell of code (or Markdown text) can be **run separately**
- **order** of cells **doesn't matter**, order of running them does
- **keyboard shortcuts** for actions like: adding and deleting cells, navigating through the notebook, executing code 

## Applications
Jupyter Notebook isn't a universal code editor. It's not well-suited for writing production code. However, there are numerous use cases where Jupyter proves to be a valuable tool, such as:
- prototyping
- experiments
- data analysis
- education

## Keyboard shortcuts
When you **escape** the cell (by pressing `Esc`, of course), you switch it to **command mode**. Now you can use a number of `keyboard shortcuts` which allow you to perform various operations on the cell, e.g.:
- **creating** a new cell **above** (`a`) or **below** (`b`)
- **deleting** a cell (double `d`)
- **moving** between cells (arrow up ↑, arrow down ↓)
- **executing** a cell (`Shift + Enter` / `Ctrl + Enter` / `Alt + Enter`)

If you want to **enter** the cell again (switch to **edit mode**) – press `Enter`. 
