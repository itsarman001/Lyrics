import { useAuthToken } from "./hooks";
import { Login, BaseLayout } from "./pages";


const App = () => {
const {token} = useAuthToken(); 
  return (
    <>
      {token ? <BaseLayout /> :  <Login />}
    </>
  );
};

export default App;
