//components
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="h-screen w-screen bg-amber-400">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
