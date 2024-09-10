import { TypeAnimation } from 'react-type-animation';

const TypeWritter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We Produce corrected code',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We Provide exceptional ideas',
        1000,
        'We produce related images',
        1000,
        'We produce summarized result',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default TypeWritter