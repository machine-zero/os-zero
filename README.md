# osØ
The operating system for machineØ

## Core Principles
* CQRS pattern
  * all mutations are written as commands to the write ahead log
  * resources are query-able and reactive
* Unified Resource Tree
  * resources are namespaced
  * resources are indexed
  * desired state and observed state are separate resources
  * resources have costs
  * namespaces have budgets/reservations/quotas
* Resources have device/driver model
  * machines
  * processes
  * volumes
  * load balancers
  * dns
* Applications are resources that are installed on osØ
  * app store model
  * expose operational capabilities as osØ programs
  * have updates (as capabilities)

## Resources
The core resources of osØ
* machines
* volumes
* load-balancers
* security-groups?
* dns
* apps
  * capabilities (osØ programs)
  * services
  * components
    * task-groups
      * tasks
        * processes
* configurations
* secrets
