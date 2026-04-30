---
title: "AutoParallel: A Python module for automatic parallelization and distributed execution of affine loop nests"
authors:
  - "Cristian Ramon-Cortes"
  - "Ramon Amela"
  - "Jorge Ejarque"
  - "Philippe Clauss"
  - "Rosa M. Badia"
date: "2018-11-06"
venue: "SC18 Workshop: Python for High-Performance and Scientific Computing"
venueShort: "PyHPC 2018"
publicationType: "conference"
url: "https://arxiv.org/abs/1810.11268"
pdf: "https://arxiv.org/pdf/1810.11268.pdf"
abstract: "The last improvements in programming languages, programming models, and frameworks have focused on abstracting the users from many programming issues. Among others, recent programming frameworks include simpler syntax, automatic memory management and garbage collection, which simplifies code re-usage through library packages, and easily configurable tools for deployment. For instance, Python has risen to the top of the list of the programming languages due to the simplicity of its syntax, while still achieving a good performance even being an interpreted language. Moreover, the community has helped to develop a large number of libraries and modules, tuning them to obtain great performance. However, there is still room for improvement when preventing users from dealing directly with distributed and parallel computing issues. This paper proposes and evaluates AutoParallel, a Python module to automatically find an appropriate task-based parallelization of affine loop nests to execute them in parallel in a distributed computing infrastructure. This parallelization can also include the building of data blocks to increase task granularity in order to achieve a good execution performance. Moreover, AutoParallel is based on sequential programming and only contains a small annotation in the form of a Python decorator so that anyone with little programming skills can scale up an application to hundreds of cores."
featured: false
---
