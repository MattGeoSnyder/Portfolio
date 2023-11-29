import Image from "next/image";

export default function Hero() {
	return (
		<section className="w-full h-full py-5">
			<div className="grid grid-cols-3 mx-auto lg:w-4/5 h-full">
				<div className="grid-span-1 flex flex-col justify-center gap-10">
					<p id='title' className="text-center tracking-[.5rem] font-semibold">Fullstack SWE | Mathematician</p>
					<h1 className="text-8xl font-bold">Matthew G. Snyder</h1>
					<p>Hi I'm Matthew and I'm a software engineer, lifelong learner, and coffee addict</p>
				</div>
				<Image src={'/Headshot.jpg'} alt="Matthew Snyder" width={500} height={750} className="aspect-[3/4] col-span-2 self-center justify-self-center rounded-lg" style={{objectFit: 'cover'}}/>
			</div>
		</section>
	)
}