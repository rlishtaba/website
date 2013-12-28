var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('index', {path: "/"});
  this.route('team');
  this.route('events');
  this.route('projects');
  this.route('contacts');
});

export default Router;
