import { useState } from "react";

function TodoForm({appendTodoTaskToList} : any) {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);

    appendTodoTaskToList(todo);

    setTodo("");
  };
  return(<>

    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5 inline-flex">
        <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Today's task!" required onChange={e => setTodo(e.target.value)} />
        <button type="submit" className="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </form>
    </>);
}

export default TodoForm;
