function Collection() {
  this.resources = [];
  this.subs = [];
  this.sub(f) {
    this.subs.push(f);
  }
  this.add(r) {
    this.resources.push(r);
    t
  }
}
