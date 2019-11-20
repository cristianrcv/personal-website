---
title: "Boosting Atmospheric Dust Forecast with PyCOMPSs"
authors:
- Javier Conejero
- admin
- Kim Serradell
- Rosa M. Badia
date: "2018-09-17T00:00:00Z"
doi: "10.1109/eScience.2018.00135"

# Schedule page publish date (NOT publication's date).
publishDate: "2018-09-17T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "IEEE eScience 2018"
publication_short: "eScience 2018"

abstract: "This paper describes the success story of the adaptation of the NMMB-MONARCH online multi-scale atmospheric dust model to PyCOMPSs in order to exploit its inherent parallelism with the minimal developer effort. The paper also includes an evaluation of this implementation in the Nord3 supercomputer, a scalability analysis and an in-depth behaviour study. The main results presented in this paper are: (1) PyCOMPSs is able to extract the parallelism from the NMMB-MONARCH application; (2) it is able to improve the dust forecasting in terms of performance when compared with previous versions, and (3) PyCOMPSs is able to interact and share the resources with MPI applications when included in the workflow as tasks. Finally, we present the keys for exporting the knowledge of this experience to other applications in order to benefit from using PyCOMPSs."

# Summary. An optional shortened abstract.
summary: 

tags:
- pycompss
- NMMB-MONARCH
- dust model

featured: false

#links:
#- name: Custom Link
#  url: http://example.org
  
url_pdf: 'https://doi.org/10.1109/eScience.2018.00135'
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
  caption: 'NMMB Execution Graph'
  focal_point: "Smart"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- compss

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<h2>Keywords</h2>
HPC, Distributed Computing, Big Data, COMPSs, PyCOMPSs, Dust Prediction, NMMB-MONARCH
