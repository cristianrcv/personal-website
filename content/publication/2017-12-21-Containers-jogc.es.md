+++
title = "Orquestración transparente sobre plataformas de contenedores de aplicaciones paralelas basadas en tareas"
date = 2017-12-21T00:00:00

# Authors. Comma separated list
authors = ["Cristian Ramon-Cortes", "Albert Serven", "Jorge Ejarque", "Daniele Lezzi", "Rosa M. Badia"]

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
publication = "2017 Journal of Grid Computing (JoGC)"
publication_short = "JoGC"

# Abstract and optional shortened version.
abstract = "This paper presents a framework to easily build and execute parallel applications in container-based distributed computing platforms in a user-transparent way. The proposed framework is a combination of the COMP Superscalar (COMPSs) programming model and runtime, which provides a straightforward way to develop task-based parallel applications from sequential codes, and containers management platforms that ease the deployment of applications in computing environments (as Docker, Mesos or Singularity). This framework provides scientists and developers with an easy way to implement parallel distributed applications and deploy them in a one-click fashion. We have built a prototype which integrates COMPSs with different containers engines in different scenarios: i) a Docker cluster, ii) a Mesos cluster, and iii) Singularity in an HPC cluster. We have evaluated the overhead in the building phase, deployment and execution of two benchmark applications compared to a Cloud testbed based on KVM and OpenStack and to the usage of bare metal nodes. We have observed an important gain in comparison to cloud environments during the building and deployment phases. This enables better adaptation of resources with respect to the computational load. In contrast, we detected an extra overhead during the execution, which is mainly due to the multi-host Docker networking."
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
url_pdf = "https://doi.org/10.1007/s10723-017-9425-z"
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
image = "publications/jogc-transparent-exec.jpg"
caption = "Different Container Deployments"
+++

<h2>Palabras Clave</h2>
Cloud Computing, Containers Orchestration, Linux Containers, Distributed Systems, Parallel Programming Models

<h2>Título Original</h2>
Transparent Orchestration of Task-based Parallel Applications in Containers Platforms

<h2>Resumen Original</h2>
<p align="justify">
This paper presents a framework to easily build and execute parallel applications in container-based distributed computing platforms in a user-transparent way. The proposed framework is a combination of the COMP Superscalar (COMPSs) programming model and runtime, which provides a straightforward way to develop task-based parallel applications from sequential codes, and containers management platforms that ease the deployment of applications in computing environments (as Docker, Mesos or Singularity). This framework provides scientists and developers with an easy way to implement parallel distributed applications and deploy them in a one-click fashion. We have built a prototype which integrates COMPSs with different containers engines in different scenarios: i) a Docker cluster, ii) a Mesos cluster, and iii) Singularity in an HPC cluster. We have evaluated the overhead in the building phase, deployment and execution of two benchmark applications compared to a Cloud testbed based on KVM and OpenStack and to the usage of bare metal nodes. We have observed an important gain in comparison to cloud environments during the building and deployment phases. This enables better adaptation of resources with respect to the computational load. In contrast, we detected an extra overhead during the execution, which is mainly due to the multi-host Docker networking.
</p>