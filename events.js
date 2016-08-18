// events

// fleet events
function UnitHealth() {
  this.unitId = null;
  // healthy|unhealthy|unknown
  this.health = "unknown";
}

function Heartbeat() {
  this.unitId = null;
  this.heartbeatId = null;
}

// task group events
function TaskGroupState() {
  this.assignmentId = null;
  this.taskId = null;
  // running|stopped|unknown
  this.state = "unknown";
}

// task events
funcion TaskState() {
  this.assignmentId = null;
  this.taskId = null;
  // running|stopped|unknown
  this.state = "unknown";
}

funcion ProcessState() {
  this.assignmentId = null;
  this.taskId = null;
  this.processId = null;
  this.exitCode = null;
  // running|stopped|exited|unknown
  this.state = "unknown";
}
