---
layout: data
title: Affordable rental project map
"chart-title": Location of affordable rental housing monitored by the Mayor’s Office of Housing and Community Development
category: "Financing-and-Development"
#data: "financing-and-development/project_locations.csv"
data: "https://data.sfgov.org/resource/yd5s-bd6e.geojson?$where=project_location+is+not+null"
type: map-point
portalID: 9rdx-httc
published: true
source: "Mayor's Office of Housing and Community Development."
scale: "5"
colors: Set2
popup:
  title: project_name
  subtitle: project_address
  info: 
    - project_sponsor
    - total_units
    - affordable_units
    - total_beds
    - affordable_beds
---
The Mayor’s Office of Housing and Community Development (MOHCD) and the Office of Community Investment and Infrastructure (OCII) provide financing for the development of affordable rental housing in San Francisco through City Funding Agreements, Ground Leases, Disposition & Participation Agreements and Conduit Mortgage Revenue Bond Financing. The map below shows completed affordable rental housing built by non-profit and private developers that have received support of some kind and that is monitored by the Mayor’s Office of Housing and Community Development.