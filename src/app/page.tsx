import Link from "next/link";
import { prisma } from "@/db";
import TodoItem from "@/components/TodoItems";

function getTodos() {
  return prisma.todo.findMany();
}

function addTodo() {
  return prisma.todo.create({ data: { title: "test", done: false } });
}

function deleleAllTodos() {
  return prisma.todo.deleteMany();
}

export default async function Home() {
  // deleleAllTodos;

  // await addTodo();

  const todos = await getTodos();

  return (
    <div>
      <header className="flex justify-between mb-4 items-center">
        <h1>Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
