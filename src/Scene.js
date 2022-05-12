import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import "./components/shader/ColorShiftMaterial";

export default function Scene() {
  const ref = useRef();
  const { width, height } = useThree((state) => state.viewport);
  useFrame(({ clock }) => {
    ref.current.time = clock.getElapsedTime();
  });
  return (
    <mesh scale={[width, height, 1]}>
      <planeBufferGeometry />
      <colorShiftMaterial color="hotpink" time={1} ref={ref} />
    </mesh>
  );
}
