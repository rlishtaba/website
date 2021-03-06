var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('index', {path: "/"});
  this.route('team');
  this.resource('events', function(){
    this.route('show', {path: "/:event_id/show"});
  });
  this.route('events');
  this.route('projects');
  this.route('contacts');
  this.route('resources');
});

export default Router;
