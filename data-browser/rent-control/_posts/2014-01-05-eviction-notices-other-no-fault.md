---
layout: data
title: Other no fault notices
"chart-title": "Other no fault eviction notices by type by year since 1997"
category: "Rent-Control"
data: "https://data.sfgov.org/resource/93gi-sfd2.json?$select=date_trunc_y(file_date)+as+year,lead_remediation,good_samaritan_ends,substantial_rehab,roommate_same_unit,capital_improvement&$order=year&$limit=50000"
transform: countBoolean
dataType: json
column: year
chartvalues:
  - roommate_same_unit
  - capital_improvement
  - substantial_rehab
  - good_samaritan_ends
  - lead_remediation
chartnames:
  - Roommate Living in Same Unit
  - Capital Improvement
  - Substantial Rehabilitation
  - Good Samaritan Tenancy Ends
  - Lead Remediation
type: area
groups:
  - roommate_same_unit
  - capital_improvement
  - substantial_rehab
  - good_samaritan_ends
  - lead_remediation
axisType: category
"yFormat": ","
xInputFormat: '%Y-%m-%dT%H:%M:%S.%L'
xTickFormat: '%Y'
source: San Francisco Rent Board
portalID: "5cei-gny5"
published: false
xLabel: Year
yLabel No-fault Eviction Notices
---

The remaining set of no fault eviction notices have a temporary effect on the supply of rent controlled units or are subject to owner preferences. Capital improvements and lead remediation notices result in the temporary dislocation of the tenant, who is provided with relocation assistance for the dislocation and allowed to move back into the unit once the improvements are complete. Substantial rehabilitation does not require compensation and likely results in a different tenant. Good Samaritan notices are designed to be temporary due to disasters or unexpected events. And owner who rents a room within their own residence, “Roommate living in same unit”, can evict their roommate without cause. Note that an eviction notice is not the same as an actual eviction.