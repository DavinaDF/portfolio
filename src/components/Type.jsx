import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["UX designeuse", "Développeuse frontend"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default Type;
