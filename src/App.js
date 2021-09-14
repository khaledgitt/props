import './App.css';
import { Profile } from './profile/Profile';


function App() {
  const person = {
    name: "Khaled",
    age: 21,
    bio: "full stack js",
    imag: "https://imengine.public.prod.cdr.navigacloud.com/?uuid=DC124226-F291-4A90-9D55-F78C9800FDCA&function=cover&type=preview&source=false&width=1050&height=550"
  };




  const handleclick = (x) => {
    alert(x);
  };



  return (
    <div className="App">
      <Profile person={person} handelclick={handleclick} />
    </div>
  );
}

export default App;
