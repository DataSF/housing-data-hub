---
layout: data
title: Completed units by on/off site by year
"chart-title": "Completed inclusionary units by on/off site by year since 1992"
category: "Inclusionary-Housing"
#data: inclusionary/bmr_on_off_site.csv
data: "https://data.sfgov.org/resource/kdpp-67mq.json?&$select=section_415_declaration_of_intent,count(*)&$where=project_status=%27Completed%27+AND+NOT+section_415_declaration_of_intent=%27Units%20for%20Off-Site%20Project%27&$group=section_415_declaration_of_intent&$order=count+desc"
dataType: json
column: year
transform: toColumns
#x: Year
type: bar
source: "Mayor's Office of Housing and Community Development."
portalID: "kdpp-67mq"
published: true
scale: "5"
colors: Blues
axisType: category
"yFormat": ","
notes: null
yLabel: Units
xLabel: Year
#groups:
#  - BMR On-Site Units
#  - BMR Off-Site Units
---

When building inclusionary units, developers have the option of electing to build units on the main site or at a second location. If a developer selects the off-site option, they must build a higher percentage of units than on-site (e.g. 12% for on-site versus 20% for off-site). Off-site units must also be within a mile of the main development. 2006 was the first year off-site units were completed, but developers had elected the option as early as 2003.