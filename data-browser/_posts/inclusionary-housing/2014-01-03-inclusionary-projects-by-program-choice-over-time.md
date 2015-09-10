---
layout: data
title: Developer choice by year (completed)
"chart-title": "All completed inclusionary projects by year since 1992 by developer choice"
category: "Inclusionary-Housing"
data: "https://data.sfgov.org/resource/gf2u-2nfi.json?$select=date_trunc_y(building_completion_year)+as+year,section_415_declaration_label,count(*)&$group=year,section_415_declaration_label&$where=building_completion_year%3E%271991-01-01%27&$order=year"
#data: inclusionary/project_choices_over_time.csv
column: year
transform: toColumns
dataType: json
column: year
source: "Mayor's Office of Housing and Community Development"
portalID: "f2n6-ybnq"
published: true
type: area
"axisType": timeseries
xTickFormat: '%Y'
xInputFormat: '%Y-%m-%dT%H:%M:%S'
source: "Mayor's Office of Housing and Community Development"
portalID: "f2n6-ybnq"
---

Developers have a choice on how they can "include" affordable housing as part of the inclusionary requirements. They can choose to pay a fee, develop units on site, develop units off-site, or a combination of the prior three options. You can see below how developer choices have varied over time. The chart below shows the choice at the time of building completion.