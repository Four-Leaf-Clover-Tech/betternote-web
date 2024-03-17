import { IETodoListProps } from "../utils/interfaces";
  
  const TodoList: React.FC<IETodoListProps> = ({todo}) => {
    return (<>
        <div className="block p-2 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        
        <p className="font-normal text-gray-700 dark:text-gray-400">{todo.todo}</p>
        </div>
        </>)
};


export default TodoList;