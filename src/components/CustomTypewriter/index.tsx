import Typewriter from "typewriter-effect";

interface TypewriterProps {
  strings: string[];
  autoStart?: boolean;
  loop?: boolean;
  deleteSpeed?: number;
  cursor?: string;
  delay?: number;
  wrapperClassName?: string;
  cursorClassName?: string;
}

const CustomTypewriter: React.FC<TypewriterProps> = (props) => {
  const {
    strings,
    autoStart = true,
    cursor = "<",
    delay = 100,
    deleteSpeed = 10,
    loop = true,
    wrapperClassName,
    cursorClassName,
  } = props;

  return (
    <Typewriter
      options={{
        strings,
        autoStart,
        loop,
        deleteSpeed,
        cursor,
        delay,
        wrapperClassName,
        cursorClassName,
      }}
    />
  );
};

export default CustomTypewriter;
