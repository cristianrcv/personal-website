---
title: "PhD Thesis: Programming Models to support Data Science workflows"
authors:
- admin
date: "2020-09-21T00:00:00Z"
doi: "http://hdl.handle.net/2117/330142"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-09-21T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["7"]

# Publication name and optional abbreviated publication name.
publication: "2020 UPC Commons"
publication_short: "UPC Commons"

abstract: "In the recent joint venture between High-Performance Computing (HPC) and Big-Data (BD) Ecosystems towards the Exascale Computing, the scientific community has realized that powerful programming models and high-level abstraction tools are a must. Within this context, the Barcelona Supercomputing Center (BSC) is developing the COMP Superscalar (COMPSs) programming model, whose main objective is to develop applications in a sequential way, while the Runtime System handles the inherent parallelism of the application and abstracts the programmer from the different underlying infrastructures. The parallelism is achieved by defining an application Interface that allows COMPSs to detect methods that operate on a set of parameters (called tasks), and execute them distributedly and transparently. This Master Thesis aims to enhance COMPSs, adapting it to the needs of the Big-Data Ecosystems, by supporting Analytic and HPC workflows. To this end, we propose a straight-forward integration with the execution of binaries, and MPI and OmpSs applications. Although the COMPSs programming model is kept untouched, we extend the COMPSs Annotations and some of the COMPSs internals such as the task schedulers and the worker executors. To support our contribution, we have ported to COMPSs two real use cases. On the one hand, NMMB BSC-Dust, a workflow to predict the atmospheric life cycle of the desert dust and, on the other hand, Guidance, an integrated solution for Genome and Phenome association analysis."

# Summary. An optional shortened abstract.
summary: 

tags:
- compss
- task-based
- distributed computing
- programming models

featured: true

# links:
# - name: ""
#   url: ""

url_pdf: 'http://hdl.handle.net/2117/330142'
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
  caption: 'PhD overview'
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

<h2>Type</h2> 
PhD Thesis

<h2>Supervisors</h2>
Rosa M. Badia Sala

Jorge Ejarque Artigas

<h2>Keywords</h2>
Distributed Computing, High-Performance Computing, Data Science pipelines, Task-based Workflows, Dataflows, Containers, COMPSs, PyCOMPSs, AutoParallel, Docker, Pluto, Kafka
