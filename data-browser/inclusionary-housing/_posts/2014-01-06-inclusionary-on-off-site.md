---
layout: data
title: Completed units by on/off site by year
"chart-title": "Completed inclusionary units by on/off site by year since 1992"
category: "Inclusionary-Housing"
#data: inclusionary/bmr_on_off_site.csv
data:"https://data.sfgov.org/resource/kdpp-67mq.json?$select=date_trunc_y(completion_date)+as+year,sum(total_bmrs_off_site) AS BMR_Off_Site_Units,sum(total_bmrs_on_site) AS BMR_On_Site_Units&$group=year&$where=completion_date%3E%271991-01-01%27&$order=year"
dataType:json
x: year
column: year
type: bar
source: "Mayor's Office of Housing and Community Development."
portalID: "nj3x-rw36"
published: true
scale: "5"
colors: Blues
"axisType": ""
"yFormat": ","
notes: null
yLabel: Units
xLabel: Year
groups:
  - BMR_On_Site_Units
  - BMR_Off_Site_Units
---

When building inclusionary units, developers have the option of electing to build units on the main site or at a second location. If a developer selects the off-site option, they must build a higher percentage of units than on-site (e.g. 12% for on-site versus 20% for off-site). Off-site units must also be within a mile of the main development. 2006 was the first year off-site units were completed, but developers had elected the option as early as 2003.