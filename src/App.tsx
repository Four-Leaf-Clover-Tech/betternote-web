import { Route, Routes } from "react-router-dom";
import NoteEditor from "./note/components/editor";
import Sidebar from "./common/sidebar";
import TodoApp from "./todo/todoApp";
import PageNotFound from "./common/pageNotFound";
function App() {
  return (
    <>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<NoteEditor noteContent={"its her choice"}/>}/>
      <Route path="/todo" element={<TodoApp/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
