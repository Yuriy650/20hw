import './App.css';
import Post from './Components/Post/Post';
import CreatePost from "./Components/CreatePost/CreatePost";
import {addNewAuthor} from "./Redux/Actions/action";

function App() {
  return (
    <div>
      <CreatePost addNewAuthor={addNewAuthor}/>
      <Post  />
    </div>
  );
}

export default App;
