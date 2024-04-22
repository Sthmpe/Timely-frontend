import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

/**
 * Layout Component
 * 
 * This component represents the layout structure of the website. 
 * It includes a header, hero section, main content area, and footer.
 * 
 * Components Used:
 * - Header: Component for the website header.
 * - Hero: Component for the hero section of the website.
 * - Footer: Component for the website footer.
 * 
 * @param {Props} props - Props containing children (main content) to be rendered within the layout.
 * @returns {JSX.Element} Layout component JSX
 */

type Props = {
  children: React.ReactNode;
	showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return(
	<div className="flex flex-col min-h-screen">
		<Header />
		{showHero && <Hero />}
		<div className="container mx-auto flex-1 py-10">{children}</div>
		<Footer />
	</div>
  );
};

export default Layout;