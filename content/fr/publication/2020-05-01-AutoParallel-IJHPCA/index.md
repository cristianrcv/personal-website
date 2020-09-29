---
title: "AutoParallel: Automatic parallelisation and distributed execution of affine loop nests in Python"
authors:
- admin
- Ramon Amela
- Jorge Ejaque
- Philippe Clauss
- Rosa M. Badia
date: "2020-05-01T00:00:00Z"
doi: "10.1177/1094342020937050"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-07-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "International Journal of High-Performance Computing Applications"
publication_short: "IJHPCA"

abstract: "The last improvements in programming languages and models have focused on simplicity and abstraction; leading Python to the top of the list of the programming languages. However, there is still room for improvement when preventing users from dealing directly with distributed and parallel computing issues. This paper proposes and evaluates AutoParallel, a Python module to automatically find an appropriate task-based parallelisation of affine loop nests to execute them in parallel in a distributed computing infrastructure. This parallelisation can also include the building of data blocks to increase tasks' granularity in order to achieve a good execution performance. Moreover, AutoParallel is based on sequential programming and only contains a small annotation in the form of a Python decorator so that anyone with little programming skills can scale up an application to hundreds of cores."

# Summary. An optional shortened abstract.
summary: 

tags:
- compss
- autoparallel
- automatic parallelisation
- distributed execution

featured: true

# links:
# - name: ""
#   url: ""

url_pdf: 'https://doi.org/10.1177/1094342020937050'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: "Smart"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: [autoparallel, compss]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<h2>Keywords</h2>
