import Image from "next/image";

export default function Hero() {
	return (
		<section className="w-full h-full">
			<Image alt="hero-image" fill={true} src={'/gradient-hero.jpg'}/>			
		</section>
	)
}