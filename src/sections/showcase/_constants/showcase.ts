export type ShowcaseHighlight = {
	title: string;
	description: string;
	src: string;
	poster: string;
	className?: string;
	projectUrl?: string;
};

export const showcaseHighlights: ShowcaseHighlight[] = [
	{
		title: "Showreel destacado 01",
		description:
			"Cambia por un loop de tu campana principal, video de lanzamiento o estudio de motion para marcar el tono.",
		src: "",
		poster: "/placeholder-1.jpg",
		className: "lg:col-span-2 lg:row-span-2",
	},
	{
		title: "Showreel destacado 02",
		description:
			"Usa este espacio para una segunda vineta, captura de prototipo o recorrido grabado de pantalla.",
		src: "",
		poster: "/placeholder-1.jpg",
		className: "lg:col-span-1 lg:row-span-1",
	},
	{
		title: "Showreel destacado 03",
		description:
			"Explica lo que se ve, que rol tuviste o que herramientas y colaboradores participaron.",
		src: "",
		poster: "/placeholder-1.jpg",
		className: "lg:col-span-1 lg:row-span-1",
	},
];
