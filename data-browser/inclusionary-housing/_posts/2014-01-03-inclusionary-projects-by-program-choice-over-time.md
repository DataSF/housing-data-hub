---
layout: data
title: Developer choice by year (completed)
"chart-title": "All completed inclusionary projects by year since 1992 by developer choice"
category: "Inclusionary-Housing"
data: "https://data.sfgov.org/resource/kdpp-67mq.json?$select=date_trunc_y(completion_date)+as+year,section_415_declaration_of_intent,count(*)&$group=year,section_415_declaration_of_intent&$where=completion_date%3E%271991-01-01%27&$order=year"
#data: inclusionary/project_choices_over_time.csv
dataType: json
transform: toMatrix
column: year
pivot: section_415_declaration_of_intent
source: "Mayor's Office of Housing and Community Development"
portalID: "nj3x-rw36"
published: true
type: bar
axisType: timeseries
xTickFormat: '%Y'
xInputFormat: '%Y-%m-%dT%H:%M:%S.%L'
yLabel: Projects
xLabel: Year
groups:
  - On-site BMR Project
  - Fee Payment
  - Units for Off-site Project
  - Off-site BMR Project
  - Units for Off-site Project with On-site Obligation
  - Combination Project
  - Land Dedication
  - Units for Off-site Project with Onsite Obligation
---

Developers have a choice on how they can "include" affordable housing as part of the inclusionary requirements. They can choose to pay a fee, develop units on site, develop units off-site, or a combination of the prior three options. You can see below how developer choices have varied over time. The chart below shows the choice at the time of building completion.