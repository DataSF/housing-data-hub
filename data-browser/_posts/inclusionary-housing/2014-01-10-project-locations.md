---
layout: data
title: Unit locations by construction status
"chart-title": Projects with planned or constructed inclusionary units 
category: "Inclusionary-Housing"
data: "https://data.sfgov.org/resource/gf2u-2nfi.geojson?$where=total_bmr_s_in_this_building_or_phase%3E0"
type: "map-point"
column: status_of_project
scale: "4"
colors: Set2
published: true
source: "Mayor's Office of Housing and Community Development."
portalID: "f2n6-ybnq"
legendCategories:
  - Entitled
  - BP Issued
  - First Const Doc Issued
  - Completed
popup:
  title: building_name
  subtitle: mapping_address
  info: 
    - entitlement_yr
    - building_completion_calendar_year
    - status_of_project
    - section_415_declaration_of_intent
    - tenure
    - total_units_in_building_or_phase
    - total_bmr_s_in_this_building_or_phase
    - off_site_units_at_this_site
---

The map below shows the location of inclusionary units across the city by permitting/construction status. The location of inclusionary units matches general construction patterns as inclusionary units are located on or nearby private construction projects. These points represent the final location of inclusionary units, not the principal projects that may have generated them. For example, if a residential project chose to include affordable units through the off-site option, only the off-site units are represented below. This map excludes projects without inclusionary units.
