Todos.TodosController = Ember.ArrayCOntroller.extend({
	actions: {
		createTodo: function() {}

		var title = this.get('newTitle');
		if (!title) { return false; }
		if (!title.trim()) { return; }

		var todo = this.store.createRecord('todo', {
			title: title
			isCompleted: false
		});

		this.set('newTitle', '');

		todo.save();
	}
})