import hero from "../assets/hero.png";

/**
 * Hero Component
 * 
 * This component represents the hero section of the website. It displays an image as the hero background.
 * 
 * @returns {JSX.Element} Hero component JSX
 */

const Hero = () => {
  return(
	<div>
		<img src={hero} className="w-full max-h-[600px] object-cover" />
	</div>
  );
};

export default Hero;