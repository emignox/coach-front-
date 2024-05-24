import Text from "./text";

const TextContent = () => {
  return (
    <>
      {" "}
      <Text
        value="Polizzotto"
        position={[-2, 2, -2]}
        color={"#000000"}
        bevelSize={0.01}
        bevelThickness={0.01}
        rotation={[0, 0, 0]}
        size={0}
        metalness={0}
        onClick={() => console.log("ciao")}
      />
      <Text
        value="Emanuele"
        position={[-2, 1, -2]}
        color={"#000000"}
        bevelSize={0.01}
        bevelThickness={0.01}
        rotation={[0, 0, 0]}
        size={0}
        metalness={0}
        onClick={() => console.log("ciao")}
      />
    </>
  );
};
export default TextContent;
