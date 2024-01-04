import { createTodo } from '@/lib/todos'
import { revalidatePath } from 'next/cache'

export const Form = () => {
  const handleCreateTodo = async (formData: FormData) => {
    'use server'
    const newTodo = {
      todo: formData.get('todo'),
    } as {
      todo: string
    }

    createTodo(newTodo)
    revalidatePath('/')
  }
  return (
    <form
      className="w-2/4 flex gap-4"
      action={handleCreateTodo}
    >
      <div className="flex flex-col gap-1 w-full">
        <label className="text-white">Enter task</label>
        <input
          className="bg-slate-100 border-2 border-slate-300 px-5 h-12 rounded-md"
          type="text"
          required
          name="todo"
          id="todo"
        />
      </div>
      <button className="w-32 h-12 px-4 bg-blue-500 rounded self-end">
        Add
      </button>
    </form>
  )
}
