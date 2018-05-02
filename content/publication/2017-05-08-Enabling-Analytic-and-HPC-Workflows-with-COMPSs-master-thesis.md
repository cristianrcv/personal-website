+++
title = "Master Thesis: Enabling Analytic and HPC Workflows with COMPSs"
date = 2017-05-08T00:00:00

# Authors. Comma separated list
authors = ["Cristian Ramon-Cortes Vilarrodona"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference proceedings
# 2 = Journal
# 3 = Work in progress
# 4 = Technical report
# 5 = Book
# 6 = Book chapter
publication_types = ["0"]

# Publication name and optional abbreviated version.
publication = "2017 UPC Commons"
publication_short = "UPC Commons"

# Abstract and optional shortened version.
abstract = "In the recent joint venture between High-Performance Computing (HPC) and Big-Data (BD) Ecosystems towards the Exascale Computing, the scientific community has realized that powerful programming models and high-level abstraction tools are a must. Within this context, the Barcelona Supercomputing Center (BSC) is developing the COMP Superscalar (COMPSs) programming model, whose main objective is to develop applications in a sequential way, while the Runtime System handles the inherent parallelism of the application and abstracts the programmer from the different underlying infrastructures. The parallelism is achieved by defining an application Interface that allows COMPSs to detect methods that operate on a set of parameters (called tasks), and execute them distributedly and transparently. This Master Thesis aims to enhance COMPSs, adapting it to the needs of the Big-Data Ecosystems, by supporting Analytic and HPC workflows. To this end, we propose a straight-forward integration with the execution of binaries, and MPI and OmpSs applications. Although the COMPSs programming model is kept untouched, we extend the COMPSs Annotations and some of the COMPSs internals such as the task schedulers and the worker executors. To support our contribution, we have ported to COMPSs two real use cases. On the one hand, NMMB BSC-Dust, a workflow to predict the atmospheric life cycle of the desert dust and, on the other hand, Guidance, an integrated solution for Genome and Phenome association analysis."
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
url_pdf = "http://upcommons.upc.edu/handle/2117/111458"
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
image = "publications/thesis-multinode.jpg"
caption = "Multi-Node Execution Actions"
+++

<h2>Type</h2> 
Master Thesis

<h2>Supervisors</h2>
Rosa M. Badia Sala

<h2>Keywords</h2>
HPC, Distributed Computing, Workflows, COMPSs, PyCOMPSs