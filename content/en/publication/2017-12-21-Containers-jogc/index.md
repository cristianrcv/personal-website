---
title: "Transparent Orchestration of Task-based Parallel Applications in Containers Platforms"
authors:
- admin
- Albert Serven
- Jorge Ejarque
- Daniele Lezzi
- Rosa M. Badia
date: "2017-12-21T00:00:00Z"
doi: "10.1007/s10723-017-9425-z"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-12-21T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "2017 Journal of Grid Computing (JoGC)"
publication_short: "JoGC"

abstract: "This paper presents a framework to easily build and execute parallel applications in container-based distributed computing platforms in a user-transparent way. The proposed framework is a combination of the COMP Superscalar (COMPSs) programming model and runtime, which provides a straightforward way to develop task-based parallel applications from sequential codes, and containers management platforms that ease the deployment of applications in computing environments (as Docker, Mesos or Singularity). This framework provides scientists and developers with an easy way to implement parallel distributed applications and deploy them in a one-click fashion. We have built a prototype which integrates COMPSs with different containers engines in different scenarios: i) a Docker cluster, ii) a Mesos cluster, and iii) Singularity in an HPC cluster. We have evaluated the overhead in the building phase, deployment and execution of two benchmark applications compared to a Cloud testbed based on KVM and OpenStack and to the usage of bare metal nodes. We have observed an important gain in comparison to cloud environments during the building and deployment phases. This enables better adaptation of resources with respect to the computational load. In contrast, we detected an extra overhead during the execution, which is mainly due to the multi-host Docker networking."

# Summary. An optional shortened abstract.
summary: 

tags:
- compss
- docker
- cloud computing

featured: true

# links:
# - name: ""
#   url: ""

url_pdf: https://doi.org/10.1007/s10723-017-9425-z
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
  caption: 'Different Container Deployments'
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
Cloud Computing, Containers Orchestration, Linux Containers, Distributed Systems, Parallel Programming Models
