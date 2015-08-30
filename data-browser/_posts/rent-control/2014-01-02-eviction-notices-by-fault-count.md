---
layout: data
title: Eviction notices by fault type
"chart-title": "Fault and no fault eviction notices by year since 1997"
category: "Rent-Control"
#data: "https://cdn.rawgit.com/DataSF/summary-data/7f7d5cfd4ee85d8a79d30bd0851840691bba2f2d/eviction_notices_by_fault_count.csv"
#data: "rent-control/eviction_notices_by_fault_count.csv"
data: "https://data.sfgov.org/resource/93gi-sfd2.json?$select=date_trunc_y(file_date)+as+year,owner_move_in,ellis_act_withdrawal,demolition,development,condo_conversion,lead_remediation,good_samaritan_ends,substantial_rehab,roommate_same_unit,capital_improvement&$order=year&$limit=50000"
transform: categorizeFault
column: year
dataType: json
column: year
chartvalues:
  - fault
  - no_fault
chartnames:
  - Fault Eviction Notices
  - No Fault Eviction Notices
type: line
axisType: timeseries
yFormat: ","
xInputFormat: '%Y-%m-%dT%H:%M:%S.%L'
xTickFormat: '%Y'
source: San Francisco Rent Board
portalID: "5cei-gny5"
published: true
notes: In certain cases, landlords may have checked multiple grounds that indicated both fault and no fault. In these limited cases, the no fault category is assumed.
---

Eviction notices fall into two broad categories, "fault" and "no fault." Fault eviction notices assert that the tenant has committed an act that justifies eviction. In contrast, “no fault” eviction notices indicate a temporary, long-term or permanent removal of the unit from the rent controlled market, e.g. by converting it to an ownership unit. The chart below distinguishes between no fault notices that could affect the supply of rent controlled units and those that do not.