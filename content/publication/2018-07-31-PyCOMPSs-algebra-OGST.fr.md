+++
title = "Exécution hétérogène et distribuée d'algorithmes d'algèbre linéaire avec PyCOMPSs."
date = 2018-07-31T00:00:00

# Authors. Comma separated list
authors = ["Ramon Amela", "Cristian Ramon-Cortes Vilarrodona", "Jorge Ejarque", "Javier Conejero", "Rosa M. Badia"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference proceedings
# 2 = Journal
# 3 = Work in progress
# 4 = Technical report
# 5 = Book
# 6 = Book chapter
publication_types = ["2"]

# Publication name and optional abbreviated version.
publication = "Oil & Gas Science and Technology - Revue d'IFP Energies nouvelles"
publication_short = "OGST 2018"

# Abstract and optional shortened version.
abstract = "Python est un langage de programmation connu pour sa simplicité de syntaxe. Il dispose néanmoins de bonnes performances en tant que langage interprété. Sa large implémentation dans la communauté scientifique a favorisé le développement de nombreux modules qui lui ont permis de se hisser à la tête des langages de programmation les plus populaires. Des langages de programmation basés sur des tâches ont été proposés récemment comme alternative aux modèles de programmation parallèles. Pour Python, PyCOMPSs repose sur cette approche. Cet article présente les extensions nécessaires pour combiner le parallélisme au niveau des tâches et des fils d’exécutions. La manière dont PyCOMPSs a été adapté pour prendre en compte les hétérogénéités de processeurs, comme par exemple Xeon Phi et GPUs, est également abordée. Enfin, des résultats avec des kernels d’algèbre linéaire démontrent les bonnes performances de PyCOMPSs."
#abstract_short = ""

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
selected = true

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
projects = ["2014-compss"]

# Links (optional).
url_pdf = "https://doi.org/10.2516/ogst/2018047"
#url_preprint = ""
#url_code = ""
#url_dataset = ""
#url_project = ""
#url_slides = ""
#url_video = ""
#url_poster = ""
#url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
#url_custom = [{name = "Custom Link", url = "http://example.org"}]

# Does the content use math formatting?
math = false

# Does the content use source code highlighting?
highlight = false

# Featured image
# Place your image in the `static/img/` folder and reference its filename below
[header]
image = "publications/pycompss-ogst-qr.jpg"
caption = "QR Execution Graph"
+++

<h2>Mots-Clés</h2>

<h2>Titre Original</h2>
Executing linear algebra kernels in heterogeneous distributed infrastructures with PyCOMPSs

<h2>Résumé Original</h2>
<p align="justify">
Python is a popular programming language due to the simplicity of its syntax, while still achieving a good performance even being an interpreted language. The adoption from multiple scientific communities has evolved in the emergence of a large number of libraries and modules, which has helped to put Python on the top of the list of the programming languages. Task-based programming has been proposed in the recent years as an alternative parallel programming model. PyCOMPSs follows such approach for Python, and this paper presents its extensions to combine task-based parallelism and thread-level parallelism. Also, we present how PyCOMPSs has been adapted to support heterogeneous architectures, including Xeon Phi and GPUs. Results obtained with linear algebra benchmarks demonstrate that significant performance can be obtained with a few lines of Python.
</p>
