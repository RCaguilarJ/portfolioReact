export interface FaqItem {
	question: string;
	answer: string;
}

export const faqItems: FaqItem[] = [
	{
		question: "Que tipo de trabajo puedo mostrar aqui?",
		answer:
			"Usa esta respuesta para describir el tipo de proyectos que haces: apps moviles, dashboards SaaS, campanas creativas, instalaciones, lo que sea. Menciona las industrias o el tamano de los equipos con los que colaboras.",
	},
	{
		question: "Como debo describir mi proceso?",
		answer:
			"Guia a los visitantes por tu enfoque desde el kickoff hasta el lanzamiento. Menciona descubrimiento, handoff de diseno, hitos de desarrollo, QA y como cierras los proyectos.",
	},
	{
		question: "Que tiempos debo mencionar?",
		answer:
			"Comparte rangos realistas para el trabajo que haces mas seguido. Destaca los factores que aceleran o retrasan para que sepan como planear contigo.",
	},
	{
		question: "Como hablo de la colaboracion?",
		answer:
			"Explica como te integras a equipos existentes, si das actualizaciones asincronas y que herramientas (Figma, Linear, Slack, etc.) prefieres para una comunicacion fluida.",
	},
	{
		question: "Que herramientas o stack van aqui?",
		answer:
			"Enumera las tecnologias que definen tu trabajo: frameworks, librerias de animacion, herramientas de prototipado o flujos 3D. Esto ayuda a que los clientes te asignen el proyecto correcto.",
	},
	{
		question: "Puedo mencionar disponibilidad?",
		answer:
			"Claro. Diles si agendas con un mes de anticipacion, estas disponible de inmediato o solo tomas retainers. Ahorra ida y vuelta y fija expectativas.",
	},
	{
		question: "Debo hablar de precios?",
		answer:
			"Si te sientes comodo, describe los formatos que ofreces: tarifas fijas, retainers, sprints o tarifas diarias. Incluso un rango simple da claridad.",
	},
	{
		question: "Y si alguien necesita mas info?",
		answer:
			"Anima a que te escriban por lo que no este cubierto. Dirigelos a tu formulario o email para que sepan como iniciar la conversacion.",
	},
];

export const faqItemsMobile: FaqItem[] = [
	{
		question: "Que proyectos van aqui?",
		answer:
			"Describe el tipo de trabajo que te encanta hacer y para quien es, asi nuevos leads saben que estan en el lugar correcto.",
	},
	{
		question: "Como es el proceso?",
		answer:
			"Resume tu flujo a alto nivel: descubrimiento, construccion, lanzamiento, para mostrar lo organizado que eres.",
	},
	{
		question: "Que tan rapido se puede entregar?",
		answer:
			"Da un rango aproximado para trabajos comunes y menciona que hace que los tiempos suban o bajen.",
	},
	{
		question: "Como colaboramos?",
		answer:
			"Lista las herramientas que prefieres y si te integras a equipos existentes, manejas comunicacion asincrona o lideras el proyecto.",
	},
	{
		question: "Que herramientas usas?",
		answer:
			"Comparte tu stack principal o plataformas. La gente que busca un especialista lo agradecera.",
	},
	{
		question: "Estas disponible?",
		answer:
			"Diles si estas abierto a nuevo trabajo ahora, agendando el proximo trimestre o tomando proyectos limitados.",
	},
	{
		question: "Como cobras proyectos?",
		answer:
			"Menciona tu modelo preferido (alcance fijo, por sprint o retainers) e invita a pedir una cotizacion.",
	},
	{
		question: "Necesitas algo mas?",
		answer:
			"Recuerda que siempre pueden escribirte mediante el formulario de contacto para cualquier cosa no cubierta aqui.",
	},
];
