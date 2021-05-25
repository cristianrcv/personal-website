---
title: "Enabling the execution of large scale workflows for molecular dynamics simulations"
authors:
- Pau Andrio
- Adam Hospital
- admin
- Javier Conejero
- Daniele Lezzi
- Jorge Ejaque
- Josep LL. Gelpi
- Rosa M. Badia
date: "2021-04-14T00:00:00Z"
doi: "10.1101/2021.04.14.439795"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-04-14T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "BioRxiv"
publication_short: "BioRxiv"

abstract: "The usage of workflows has led to progress in many fields of science, where the need to process large amounts of data is coupled with difficulty in accessing and efficiently using High Performance Computing platforms. On the one hand, scientists are focused on their problem and concerned with how to process their data. On top of that, the applications typically have different parts and use different tools for each part, thus complicating the distribution and the reproducibility of the simulations. On the other hand, computer scientists concentrate on how to develop frameworks for the deployment of workflows on HPC or HTC resources; often providing separate solutions for the computational aspects and the data analytic ones. In this paper we present an approach to support biomolecular researchers in the development of complex workflows that i) allow them to compose pipelines of individual simulations built from different tools and interconnected by data dependencies, ii) run them seamlessly on different computational platforms, and iii) scale them up to the large number of cores provided by modern supercomputing infrastructures. Our approach is based on the orchestration of computational building blocks for Molecular Dynamics simulations through an efficient workflow management system that has already been adopted in many scientific fields to run applications on multitudes of computing backends. Results demonstrate the validity of the proposed solution through the execution of massively parallel runs in a supercomputer facility."

# Summary. An optional shortened abstract.
summary: 

tags:
- compss
- pymdsetup

featured: true

# links:
# - name: ""
#   url: ""

url_pdf: 'https://doi.org/10.1101/2021.04.14.439795'
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
projects: [compss]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<h2>Keywords</h2>
PyMDSetup, COMPSs
