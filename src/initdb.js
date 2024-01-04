const sql = require('better-sqlite3')

const db = sql('todos.db')

const dummyTodos = [
  {
    todo: 'Todo 1',
  },
  {
    todo: 'Todo 2',
  },
  {
    todo: 'Todo 3',
  },
]

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS todos (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       todo TEXT NOT NULL
    )
`,
).run()

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO todos VALUES (
         null,
         @todo
      )
   `)

  for (const todo of dummyTodos) {
    stmt.run(todo)
  }
}

initData()
