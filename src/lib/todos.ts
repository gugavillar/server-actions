import sql from 'better-sqlite3'

type Todo = {
  id: number
  todo: string
}

const db = sql('todos.db')

export const getTodos = (): Todo[] =>
  db.prepare('SELECT * FROM todos').all() as Todo[]

export const createTodo = (todo: Omit<Todo, 'id'>) => {
  const stmt = db.prepare(`INSERT INTO todos VALUES (
         null,
         @todo
      )`)
  stmt.run(todo)
}

export const deleteTodo = ({ id }: Omit<Todo, 'todo'>) => {
  return db.prepare(`DELETE FROM todos WHERE id = ?`).run(id)
}
