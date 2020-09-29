---
title: "A Programming Model for Hybrid Workflows: combining Task-based Workflows and Dataflows all-in-one"
authors:
- admin
- Francesc Lordan
- Jorge Ejaque
- Rosa M. Badia
date: "2020-07-01T00:00:00Z"
doi: "10.1016/j.future.2020.07.007"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-09-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Future Generation Computer Systems"
publication_short: "FGCS 19"

abstract: "In the past years, e-Science applications have evolved from large-scale simulations executed in a single cluster to more complex workflows where these simulations are combined with Artificial Intelligence (AI) and High-Performance Data Analytics (HPDA). To implement these workflows, developers are currently using different patterns; mainly targeting task-based and dataflow. However, since these patterns are usually managed by isolated frameworks, the implementation of these applications requires to combine them; considerably increasing the effort for learning, deploying, and integrating applications in the different frameworks. This paper tries to reduce this effort by proposing a way to extend task-based management systems to support continuous input and output data to enable the combination of task-based workflows and dataflows (Hybrid Workflows from now on) using a single programming model. Hence, developers can build complex Data Science workflows with different approaches depending on the step requirements. To illustrate the capabilities of Hybrid Workflows, we have built a Distributed Stream Library and a fully functional prototype extending COMPSs, a mature, general-purpose, task-based, parallel programming model. The library can be easily integrated with existing task-based frameworks to provide support for dataflows. Also, it provides a homogeneous, generic, and simple representation of object and file streams in both Python and Java; enabling complex workflows to handle any data without dealing directly with the streaming back-end. During the evaluation, we introduce four use cases to illustrate the new capabilities of Hybrid Workflows, and measure the performance benefits when processing data continuously as it is generated, when removing synchronisation points, and when scaling the number of writers and readers. Furthermore, we conduct an in-depth analysis of the task analysis, task scheduling, and task execution times when using objects or streams."

# Summary. An optional shortened abstract.
summary: 

tags:
- compss
- pycompss
- distributed stream library
- hybrid workflows
- task-based workflows
- dataflows

featured: true

# links:
# - name: ""
#   url: ""

url_pdf: 'https://doi.org/10.1016/j.future.2020.07.007'
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
projects: [compss, distro-stream-lib]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<h2>Keywords</h2>
