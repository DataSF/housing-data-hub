---
layout: data
title: Developer choice (completed)
"chart-title": "All completed inclusionary projects since 1992 by developer choice"
category: "Inclusionary-Housing"
#data: inclusionary/projects_by_dev_choice.csv
data: "https://data.sfgov.org/resource/kdpp-67mq.json?&$select=section_415_declaration_of_intent,count(*)&$where=project_status=%27Completed%27+AND+NOT+section_415_declaration_of_intent=%27Units%20for%20Off-Site%20Project%27&$group=section_415_declaration_of_intent&$order=count+desc"
dataType: json
column: section_415_declaration_of_intent
transform: toColumns
source: "Mayor's Office of Housing and Community Development"
portalID: "nj3x-rw36"
published: true
type: bar
scale: "5"
colors: Blues
"axisType": category
"yFormat": ","
---

Developers have a choice on how they can "include" affordable housing as part of the inclusionary requirements. They can choose to pay a fee, develop units on site, develop units off-site, or a combination of the prior three options. The chart below focuses only on the total completed projects to date by developer choice.