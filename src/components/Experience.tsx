import { OrbitControls } from "@react-three/drei";

export const Experience = (): JSX.Element => (
  <>
    <OrbitControls />
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  </>
);
