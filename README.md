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


## Core
The core of the system is a WAL that stores create/update/delete commands of resources.  Before a command gets in the log, it is first passed through all command filters.  Once it passes all the filters, it is written to the log and then applied by writing to the resource sstable and indexes and finally applying to the in memory state machine.  The sstable is used for snapshotting (faster crash recovery) and is periodically compacted (removing previous updates and tombstone markers) by writing out a new version.

Once a command is applied it is passed through all resource handlers.  A resource handler registers a query pattern to match and then gets called with each matching resource giving its action, old version, and new version.


```yaml
resource:
  # the system data re the resource
  apiVersion:  # version of the api for backwards compatibility
  id:          # globally unique (indexed)
  namespace:   # the namespace this resource is a part of (prefix indexed)
  type:        # globally unique type identifier
  created:     # create timestamp
  owner:       # the owner of the resource
  tags:        # key=value pairs of metadata (indexed)
  cost:        # the cost info of this resource
  data:        # resource type specific data
```

## busØ
The zero-bus (or busØ) is the distributed write ahead log (DWAL) for the entire fleet.  It is where worker nodes receive commands and write events.

## zero-procs
Zero-procs run against the core data by registering as filters and/or handlers, or acting as sensors by writing resource commands to the core in response to external events.  They make up the kernel of machineØ.

### Filters

#### permission filter
Filters all incoming commands to make sure they pass compliance before they are written to the log.

### Handlers

#### sensor processor
Reads events from the zero-bus and turns them into resource commands.

#### scheduler
Watches for assignment-request resources and turns them into assignment resources.

#### executor
Watches for assignment resources and writes node-commands to the zero-bus.
