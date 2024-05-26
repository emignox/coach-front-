import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Mesh } from "three";
import React from "react";

export const Model = React.memo((props: GroupProps) => {
  const { nodes, materials } = useGLTF("/weight.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.Cilindro as Mesh).geometry}
        material={materials.Materiale}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.15, 1.96, 0.15]}
      />
      {/* <mesh
        geometry={(nodes.Cilindro001 as Mesh).geometry}
        material={materials["Materiale.005"]}
        position={[-1.16, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.8, 0.16, 0.8]}
      /> */}
      <mesh
        geometry={(nodes.Cilindro003 as Mesh).geometry}
        material={materials["Materiale.008"]}
        position={[-1.16, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.8, 0.16, 0.8]}
      />
      <mesh
        geometry={(nodes.Cilindro002 as Mesh).geometry}
        material={materials["Materiale.006"]}
        position={[-1.42, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.6, 0.12, 0.6]}
      />
      <mesh
        geometry={(nodes.Cilindro003 as Mesh).geometry}
        material={materials["Materiale.008"]}
        position={[1.14, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.8, 0.16, 0.8]}
      />
      <mesh
        geometry={(nodes.Cilindro004 as Mesh).geometry}
        material={materials["Materiale.007"]}
        position={[-1.66, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.4, 0.12, 0.4]}
      />
      <mesh
        geometry={(nodes.Cilindro005 as Mesh).geometry}
        material={materials["Materiale.009"]}
        position={[1.4, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.6, 0.12, 0.6]}
      />
      <mesh
        geometry={(nodes.Cilindro006 as Mesh).geometry}
        material={materials["Materiale.010"]}
        position={[1.64, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.4, 0.12, 0.4]}
      />
    </group>
  );
});

useGLTF.preload("/weight.glb");
