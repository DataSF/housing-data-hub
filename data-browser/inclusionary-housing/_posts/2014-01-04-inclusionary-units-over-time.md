---
layout: data
title: Completed units by year
"chart-title": "Completed inclusionary units by year since 1992"
category: "Inclusionary-Housing"
#data: inclusionary/bmr_completed_over_time.csv
data: "https://data.sfgov.org/resource/kdpp-67mq.json?$select=date_trunc_y(completion_date)%20as%20year,sum(total_bmrs_in_this_building_or_phase)%20as%20total_units&$group=year&$where=completion_date%3E%271991-01-01%27&$order=year"
chartvalues:
  - total_units
dataType: json
column: year
source: "Mayor's Office of Housing and Community Development"
portalID: "nj3x-rw36"
published: true
type: area
"axisType": timeseries
xTickFormat: '%Y'
xInputFormat: '%Y-%m-%dT%H:%M:%S.%L'
xLabel: Year
yLabel: Units
---

The chart below shows the number of completed inclusionary units (versus projects) by year. The Inclusionary Housing program has been in place in various forms since 1992. Since the program is tied to new private housing developments, spikes in inclusionary units generally track periods of major building and development in the City.
