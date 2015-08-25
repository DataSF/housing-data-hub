---
layout: data
title: Eviction notices by year
"chart-title": "Total eviction notices by year since 1997"
category: "Rent-Control"
data: https://data.sfgov.org/resource/93gi-sfd2.json?$select=date_trunc_y(file_date)+as+year,count(*)+as+notices&$group=year&$order=year
dataType: json
column: year
chartvalues:
  - notices
xInputFormat: '%Y-%m-%dT%H:%M:%S.%L'
xTickFormat: '%Y'
source: San Francisco Rent Board
portalID: "5cei-gny5"
published: true
type: bar
scale: "5"
colors: Blues
axisType: timeseries
"yFormat": ","
---

Under the Rent Ordinance, landlords must file a notice with the Rent Board if they intend to evict a tenant (unless it is due to a failure to pay rent). A notice of eviction does not necessarily indicate that the tenant was evicted, so the notices below may differ from actual evictions. Evictions can affect affordability in a variety of ways. The next charts explore how evictions can affect the supply of rent controlled units and the asking rent.