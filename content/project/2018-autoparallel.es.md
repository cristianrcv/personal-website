+++
title = "PyCOMPSs AutoParallel"
date = 2017-01-01T00:00:00
math = false
highlight = false
tag = ["pycompss"]
tags = ["pycompss"]

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = "PyCOMPSs AutoParallel"

+++

<h2>Descripción</h2>

En una reciente colaboración con el equipo <a href="https://www.inria.fr/en/teams/camus" target="_blank">CAMUS</a> de <a href="https://www.inria.fr/" target="_blank">INRIA</a> estoy desarrollando un extensión de COMPSs llamada COMPSs AutoParallel. Este módulo paraleliza de forma automática bucles refinados de aplicaciones secuenciales escritas en Python. Para ello se utilizan internamente <a href="http://pluto-compiler.sourceforge.net/" target="_blank">PLUTO</a> y <a href="http://www.cloog.org/" target="_blank">CLooG</a>. Asimismo, el código autogenerado se ejecuta posteriormente de forma distribuida gracias a <a href="https://www.bsc.es/research-and-development/software-and-apps/software-list/comp-superscalar" target="_blank">PyCOMPSs</a>.

Para cualquier detalle podéis consultar el código fuente del módulo en <a href="https://github.com/cristianrcv/pycompss-autoparallel" target="_blank">GitHub</a>.

