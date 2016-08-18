// Resources of the system
// fleets (sets of machines of type control/work), machines , apps, components, taskGroups
//
// Example: MEAN (angular/nodejs/mongo) app
// App:
//   namespace: default,
//   id: my-mean-app,
//   services: [
//     {name: "nginx"},
//     {name: "api"}
//   ],
//   components: [
//     {
//       id: nginx
//       versions: [{version: 1.0, replicas: 5}]
//     },
//     {
//       id: nodejs-api
//       versions: [{version: 1.0, replicas: 2},{version: 1.1, replicas: 1}]
//     },
//     {
//       id: mongo
//       versions: [{version: 1.0, replicas: 3}]
//     },
//   ]


// An application that is installed and runs on a fleet
function App() {
  // the name of this app
  this.name = "";
  // the semver of this app
  this.version = "";
  // the services exposed by this app
  this.services = [];
  // the operational capabilities of this app
  this.capabilities = {};
  // the components of the app
  this.components = [];
}

// An executable piece of work
function Component() {
  // the name of the component
  this.name = "";
  // the services exposed by this component
  this.services = {};
  // the task groups watching these on the fleet (typically one per version)
  this.taskGroups = [];
}

// track a group of assignments of a task (goal one per replica)
function TaskGroup() {
  // the task def
  this.task = {};
  // the num replicas
  this.replicas = 0;
  // the assignments
  this.assignments = [];
}

// a set of processs that run together on the same machine and share volumes
function Task() {
  // the semver of this Task
  this.version = "";
  // the services exposed by this Task
  this.services = {
    "name": {
      "liveliness": {},
      "readiness": {},
      "versions": []
    }
  }
  this.limits = {
    "vcpu": 1,
    "mem": 64
  },
  // the volumes available to each process
  this.volumes = {
    "name": "mount-point"
  };
  // the operational capabilities of this Task
  this.capabilities = {};
  // the process definitions of this Task
  this.processs = {};
}

// the executable machine (a raw OS process, container, vm, etc)
function Process() {
  // the name of this process
  this.name = "";
  // the executor responsible for executing this component on a machine
  // one of (CRATE|DOCKER|ROCKET)
  this.executor = {
    // the type of executor
    type: "EXEC",
    // configuration for the type of executor
    // command, args, etc
    config: {},
  };
  // the environment for this process
  this.environment = {};
  // the bits this process needs to run and how to get them (http/bittorrent/scp)
  this.binary = {};
  // volumes required by the component
  this.volumes = {};
  // the operational capabilities of this process
  this.capabilities = {};
}

// a task running on a machine
function Assignment() {
  // the Task assigned
  this.task = {};
  // the machine assigned
  this.machine = {};
}

// A machine in the fleet that can carry out tasks
function Machine() {
  // the unique identifier for this machine
  this.id = 0;
  // the type of machine (control|work)
  this.type = "work";
  // the ip of the machine
  this.ip = "";
  // the name and metadata of the provider
  this.provider = {
    // the provider type
    type: "sim",
    // provider specific meta data
    meta: {},
  };
  // tasks currently assigned to this machine
  this.assignments = [];
}

// A group of control and worker machines that work together to run apps
function Fleet(name) {
  // name of the fleet
  this.name = name;
  // machines that make up the fleet
	this.machines = {
    // the IaaS provider for machines
  	provider = null;
		total: 0,
		control: 0,
		work: 0,
	};
  // persistent storage volumes
  this.volumes = {};
  // the apps currently running
  this.apps = [];
}

module.exports = Fleet;
