store = {
  user: { id: 1, name: 'Dave' },
  todos: ['Buy Cat', 'Feed Cat'],
  filter: 'All',
  cats: [],
  isTyping: false,
  activeCourseId: 1
}

this.props.dispatch({ type: 'ADD_CAT', cat: { color: 'orange', name: 'jake' })
 
newStore = {
  user: { id: 1, name: 'Dave' },
  todos: ['Buy Cat', 'Feed Cat'],
  filter: 'All',
  cats: [{ color: 'orange', name: 'jake' }],
  isTyping: false,
  activeCourseId: 1
}

