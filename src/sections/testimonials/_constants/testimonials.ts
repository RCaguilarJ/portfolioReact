export interface TestimonialType {
	content: string;
	author: string;
	position: string;
	imageSrc: string;
}

export const testimonials: TestimonialType[] = [
	{
		content:
			"Trabajar con este desarrollador mejoro notablemente mi presencia digital. Su atencion al detalle y su enfoque creativo superaron mis expectativas.",
		author: "Bill Gates",
		position: "Emprendedor tech",
		imageSrc: "/placeholder-2.jpg",
	},
	{
		content:
			"Su experiencia tecnica y creatividad son excepcionales. No solo cumplio nuestros objetivos, tambien nos ayudo a ver el proyecto desde otra perspectiva.",
		author: "Elon Musk",
		position: "CEO, SpaceY",
		imageSrc: "/placeholder-2.jpg",
	},
	{
		content:
			"Su enfoque innovador para resolver problemas y su compromiso con el proyecto dejaron una gran impresion. Los resultados hablan por si solos.",
		author: "Marie Curie",
		position: "Cientifica",
		imageSrc: "/placeholder-2.jpg",
	},
	{
		content:
			"Trabajar con Marek fue fluido y profesional. Su rapidez de respuesta y su capacidad de entregar mas de lo esperado lo distinguen.",
		author: "Ada Lovelace",
		position: "Pionera de la computacion",
		imageSrc: "/placeholder-2.jpg",
	},
	{
		content:
			"Gran colaboracion y comunicacion clara durante todo el proceso. Su aporte en diseno fue invaluable y los resultados superaron expectativas.",
		author: "Steve Jobs",
		position: "Co-fundador, Pear Inc.",
		imageSrc: "/placeholder-2.jpg",
	},
];
