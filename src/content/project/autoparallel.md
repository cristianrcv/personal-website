---
title: "AutoParallel"
description: "AutoParallel provides automatic parallelization of affine loop-nests of Python applications, enabling distributed execution via PyCOMPSs with minimal programmer effort using PLUTO and CLooG."
url: "https://github.com/cristianrcv/pycompss-autoparallel"
badge: "Research"
tags: ["autoparallel", "pycompss", "python", "HPC", "automatic parallelisation"]
---

AutoParallel is a Python module developed in collaboration with the [CAMUS Team](https://www.inria.fr/en/teams/camus) at [INRIA](https://www.inria.fr/). It provides automatic parallelization of affine loop-nests using [PLUTO](http://pluto-compiler.sourceforge.net/) and [CLooG](http://www.cloog.org/). The auto-generated parallel code can be executed distributedly using [PyCOMPSs](https://www.bsc.es/research-and-development/software-and-apps/software-list/comp-superscalar).

AutoParallel allows anyone with little programming skills to scale up a Python application to hundreds of cores by adding a single decorator annotation.

Source code and documentation available on [GitHub](https://github.com/cristianrcv/pycompss-autoparallel).
