---
layout: data
title: No fault and rent control supply
"chart-title": "Eviction notices that affect supply of rent controlled units since 1997"
category: "Rent-Control"
#data: "rent-control/eviction_notices_affecting_supply.csv"
#data: "https://cdn.rawgit.com/DataSF/summary-data/7f7d5cfd4ee85d8a79d30bd0851840691bba2f2d/eviction_notices_affecting_supply.csv"
data: "https://data.sfgov.org/resource/93gi-sfd2.json?$select=date_trunc_y(file_date)+as+year,owner_move_in,ellis_act_withdrawal,demolition,development,condo_conversion&$order=year&$limit=50000"
transform: countBoolean
dataType: json
column: year
chartvalues:
  - owner_move_in
  - ellis_act_withdrawal
  - demolition
  - development
  - condo_conversion
chartnames:
  - Owner Move In
  - Ellis Act Withdrawal
  - Demolition
  - Development Agreement
  - Condo Conversion
type: line
axisType: timeseries
yFormat: ","
xInputFormat: '%Y-%m-%dT%H:%M:%S.%L'
xTickFormat: '%Y'
source: San Francisco Rent Board
portalID: "5cei-gny5"
published: true
---

There are five "no-fault" eviction notices that can result in a long-term or permanent removal of rent controlled units from the market. For Owner Move Ins and Ellis Act Withdrawal notices, the unit would still be subject to the rent control ordinance if it returned to the rental market. Units falling under Development Agreements are subject to the terms of the agreement, which may require replacing or offering rent controlled units. Note that an eviction notice is not the same as an actual eviction.