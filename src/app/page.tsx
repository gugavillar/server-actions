import { DeleteItem } from '@/components/DeleteItem'
import { Form } from '@/components/Form'
import { getTodos } from '@/lib/todos'

export default function Home() {
  const todos = getTodos()
  return (
    <main className="flex max-h-screen flex-col items-center p-24">
      <h1 className="text-white text-4xl font-bold mb-8">Todo List</h1>
      <Form />
      <div className="flex flex-col gap-2 mt-4 w-2/4 max-h-screen overflow-y-scroll">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between w-full"
          >
            <p className="text-white">{todo.todo}</p>
            <DeleteItem {...todo} />
          </div>
        ))}
      </div>
    </main>
  )
}
