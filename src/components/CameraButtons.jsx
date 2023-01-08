import state from "../state";

const style = {
  zIndex: 1,
  position: "absolute",
  bottom: "30vh",

  height: "30px",
  width: "30px",
  background: "white",
  textAlign: "center",
  borderRadius: "100%",
  fontSize: 20,
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  cursor: "pointer",
};
const CameraButtons = () => {
  const sets = {
    // cybertruck
    1: {
      cameraPos: [9, 2, 4],
      target: [4, 0, 0],
      name: "Object_4",
      uuid: "12e7a095-e4ac-44c9-8918-29180e934e56",
    },
    // ioniq
    2: {
      cameraPos: [1, 2, 5],
      target: [-4, 0, 0],
      name: "Object_51",
      uuid: "40ae06ce-646a-45b4-86ef-adb989124049",
    },
  };
  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name;
    state.activeMeshUuid = sets[num].uuid;
    state.shouldUpdate = true;
  };
  return (
    <div>
      <button
        onClick={(e) => handleClick(2)}
        style={{
          left: "40vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => handleClick(1)}
        style={{
          right: "40vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default CameraButtons;
