---
layout: post
title:  "Master Thesis: Enabling Analytic and HPC Workflows with COMPSs"
date:   2014-11-01
categories: blog
---

Title:

Master Thesis - Enabling Analytic and HPC Workflows with COMPSs


Type:

Master Thesis


Publisher:

2017, UPC Commons


Authors:

Cristian Ramon-Cortes Vilarrodona


Supervisors:

Rosa M. Badia Sala


Abstract:

In the recent joint venture between High-Performance Computing (HPC) and Big-Data (BD) Ecosystems towards the Exascale Computing, the scientific community has realized that powerful programming models and high-level abstraction tools are a must. Within this context, the Barcelona Supercomputing Center (BSC) is developing the COMP Superscalar (COMPSs) programming model, whose main objective is to develop applications in a sequential way, while the Runtime System handles the inherent parallelism of the application and abstracts the programmer from the different underlying infrastructures. The parallelism is achieved by defining an application Interface that allows COMPSs to detect methods that operate on a set of parameters (called tasks), and execute them distributedly and transparently.

This Master Thesis aims to enhance COMPSs, adapting it to the needs of the Big-Data Ecosystems, by supporting Analytic and HPC workflows. To this end, we propose a straight-forward integration with the execution of binaries, and MPI and OmpSs applications. Although the COMPSs programming model is kept untouched, we extend the COMPSs Annotations and some of the COMPSs internals such as the task schedulers and the worker executors. To support our contribution, we have ported to COMPSs two real use cases. On the one hand, NMMB BSC-Dust, a workflow to predict the atmospheric life cycle of the desert dust and, on the other hand, Guidance, an integrated solution for Genome and Phenome association analysis.


Keywords: 

HPC, Distributed Computing, Workflows, COMPSs, PyCOMPSs

