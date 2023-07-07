type TodoItemProps = {
  id: string;
  title: string;
  done: boolean;
};

export default function TodoItem({ id, title, done }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>

    // <div className="flex justify-between items-center">
    //   <span>{title}</span>
    //   <span>{done ? "✅" : "❌"}</span>
    // </div>
  );
}
