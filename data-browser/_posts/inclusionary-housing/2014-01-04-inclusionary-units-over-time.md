---
layout: data
title: Completed units by year
"chart-title": "Completed inclusionary units by year, 1992-2014"
category: "Inclusionary-Housing"
#data: inclusionary/bmr_completed_over_time.csv
data: "https://data.sfgov.org/resource/f2n6-ybnq.json?$select=building_completion_calendar_year%20as%20%22year%22,sum(total_bmr_s_in_this_building_or_phase)%20as%20%22total_units%22&$group=building_completion_calendar_year&$order=building_completion_calendar_year"
chartvalues:
  - "total_units"
datatype: json
column: year
source: "Mayor's Office of Housing and Community Development"
portalID: "f2n6-ybnq"
published: true
type: area
scale: "5"
colors: Blues
"axis-type": ""
"y-format": ","
---

The chart below shows the number of completed inclusionary units (versus projects) by year. The Inclusionary Housing program has been in place in various forms since 1992. Since the program is tied to new private housing developments, spikes in inclusionary units generally track periods of major building and development in the City.
