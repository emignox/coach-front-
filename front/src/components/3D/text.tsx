import { Text3D } from "@react-three/drei";
import { Color } from "three";
import React from "react";

interface TextProps {
  value: string;
  position: [number, number, number];
  color: Color | string;
  size: number;
  bevelThickness: number;
  bevelSize: number;
  metalness: number;
  rotation: [number, number, number];
  onClick?: () => void;
}

const Text = React.memo(
  ({
    value,
    position,
    color,
    bevelThickness,
    bevelSize,
    metalness,
    rotation,
    onClick,
  }: TextProps) => {
    return (
      <Text3D
        font="/Merriweather_Bold.json"
        onClick={onClick}
        rotation={rotation}
        curveSegments={32}
        bevelEnabled
        bevelSize={bevelSize}
        bevelThickness={bevelThickness}
        height={0.1}
        lineHeight={0.5}
        letterSpacing={-0.01}
        size={0.5}
        position={position}
      >
        {value}
        <meshStandardMaterial
          color={color}
          metalness={metalness}
          roughness={1}
        />
      </Text3D>
    );
  }
);
export default Text;
