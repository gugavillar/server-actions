import { deleteTodo } from '@/lib/todos'
import { revalidatePath } from 'next/cache'

type DeleteItemProps = {
  id: number
  todo: string
}

export const DeleteItem = ({ id, todo }: DeleteItemProps) => {
  const handleDeleteTodo = async (formData: FormData) => {
    'use server'
    const todo = {
      id: Number(formData.get('id')),
    } as {
      id: number
    }

    deleteTodo(todo)
    revalidatePath('/')
  }

  return (
    <form action={handleDeleteTodo}>
      <input
        type="hidden"
        id="id"
        name="id"
        value={id}
      />
      <input
        type="hidden"
        id="todo"
        name="todo"
        value={todo}
      />
      <button className="bg-red-400 w-32 h-12 px-4 rounded">Delete</button>
    </form>
  )
}
