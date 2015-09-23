---
layout: data
title: Fault notices by type by year
"chart-title": "Fault eviction notices by type by year since 1997"
category: "Rent-Control"
data: "https://data.sfgov.org/resource/93gi-sfd2.json?$select=date_trunc_y(file_date)+as+year,breach,nuisance,non_payment,illegal_use,unapproved_subtenant&$order=year&$limit=50000"
transform: countBoolean
dataType: json
column: year
chartvalues:
  - breach
  - nuisance
  - non_payment
  - illegal_use
  - unapproved_subtenant
chartnames:
  - Breach of Lease Agreement
  - Nuisance
  - Non-payment of Rent
  - Illegal Use of Unit
  - Unapproved Subtenant
type: line
axisType: timeseries
"yFormat": ","
xInputFormat: '%Y-%m-%dT%H:%M:%S.%L'
xTickFormat: '%Y'
source: San Francisco Rent Board
portalID: "5cei-gny5"
notes: "Landlords will sometimes cite just causes when evicting a roommate living with them in the same unit. Under the law, the landlord does not have to cite these causes. They've been removed from the counts to avoid overrepresentation of just causes."
published: true
---
Landlords may cite multiple reasons for evicting a tenant (so the total number of causes cited will be greater than the total number of notices). When a tenant is evicted, the landlord may re-rent the unit at the prevailing market rate. The unit remains subject to rent control rules, including allowable rent increases, which affects affordability once tenants are in the unit. Note that landlords are not required to notify the Rent Board of evictions due to failure to pay rent (although some do). Note that an eviction notice is not the same as an actual eviction.