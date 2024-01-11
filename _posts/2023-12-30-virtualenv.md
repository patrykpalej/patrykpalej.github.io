---
title: Virtual environments in Python

categories: [Knowledge, Toolkit]
tags: [basics, tools, python]

pin: false
blog: true

math: true
mermaid: true
---

## 1. What is it?
Virtual environment (_virtualenv_ in short) is a common way of managing installed packages in your Python project.


## 2. Why do I need it?
Using **virtual environments** allows you to <u>separate</u> your projects from each other. Packages installed in one environment are not visible in other projects. Therefore, you can handle using different versions of various libraries in your projects. Additionally the environment is **lighter** if it contains only the packages that are used. 


## 3. How to use it?

First and foremost – in a terminal/command prompt.

### Installation
If you don't have `virtualenv` package installed, open your terminal/command prompt and run:

`pip install virtualenv`

### Initialization
In your directory of choice (execute: `cd path/to/directory`) create the environment. Depending on how you installed `virtualenv`, you can try one of the following:

```bash
virtualenv my_venv
python -m venv my_venv
```

> Note that a conventional name for a virtual environment is `venv`, not `my_venv`

### Activation
After creating a new *virtualenv* it needs to be activated first. To activate it, run:

```bash
source my_venv/bin/activate  # for Linux or Mac

.\my_venv\Scripts\activate  # for Windows
```

After activation you'll see name of the environment in brackets at the beginning of line in terminal:
```bash
(my_venv) your_user:path/to/directory$  
```

If you want to deactivate the environment, just run `deactivate`.

### Installing packages
Only after activating the environment you can install packages to it. Do it using `pip install`, e.g.:

```bash
pip install numpy
```

All libs you install are downloaded to your *virtualenv* in `my_venv/lib` directory.

### Freezing _virtualenv_
If you want to share the project, don't send `my_venv` folder to anyone. Instead, you need to _freeze_ your environment by saving its state to a .txt file, conventionally named `requirements.txt`:

`pip freeze > requirements.txt`

Now anyone can recreate the environment by creating a new one first and then installing everything from `requirements.txt`:

`pip install -r requirements.txt`

## 4. Summary
The workflow of virtual environments is the following:
```bash
virtualenv venv  # create a virtual environment named "venv"

source venv/bin/activate  # activate venv on Linux or Mac
./venv/Scripts/activate  # activate venv on Windows

pip install <package_name>  # install required packages

pip freeze > requirements.txt  # dump state of your environment to a .txt file

pip install -r requirements.txt  # recreate the environment from file (after creating a new one) 
```

## Alternatives
There are some alternatives for using _virtualenv_ which are worth checking:
- [Anaconda](https://www.anaconda.com/) – used mainly in data science, allows you to store all you need in a one big environment which can be separated from the pure Python interpreter on your machine
- [Poetry](https://python-poetry.org/)
- [Pipenv](https://pipenv.pypa.io/en/latest/)
