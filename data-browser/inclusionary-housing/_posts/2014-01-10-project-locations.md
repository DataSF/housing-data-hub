---
layout: data
title: Unit locations by construction status
"chart-title": Projects with planned or constructed inclusionary units 
category: "Inclusionary-Housing"
data: "https://data.sfgov.org/resource/kdpp-67mq.geojson"
type: "map-point"
column: project_status
scale: "4"
colors: Set2
source: "Mayor's Office of Housing and Community Development."
portalID: "nj3x-rw36"
legendCategories:
  - Entitled/Approved
  - Building Permit Issued
  - First Construction Document Issued
  - Completed
popup:
  title: building_name
  subtitle: mapping_address
  info: 
    - project_status
    - section_415_declaration_of_intent
    - tenure
    - total_units_in_building_or_phase
    - total_bmrs_in_this_building_or_phase
    - off_site_units_at_this_site
    - planning_approval_date
    - completion_date
---

The map below shows the location of inclusionary units across the city by permitting/construction status. The location of inclusionary units matches general construction patterns as inclusionary units are located on or nearby private construction projects. These points represent the final location of inclusionary units, not the principal projects that may have generated them. For example, if a residential project chose to include affordable units through the off-site option, only the off-site units are represented below. This map excludes projects without inclusionary units.
