import Image from "next/image";
import hero from '../../../../public/gradient-hero.jpg'

export default function Hero() {
	return (
		<section  /* style={{backgroundImage: `url(${hero.src})`}} */ className="w-full h-full py-5">
			<Image src={'/gradient-hero.jpg'} alt="hero-image" fill/>
		</section>
	)
}