import {
	FigmaLogoIcon,
	FileIcon,
	FilePlusIcon,
	FileTextIcon,
	GitHubLogoIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import {
	ConvertingCardContent,
	type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";

export interface ServiceItem {
	name: string;
	description: string;
}

export interface ServiceFeature {
	name: string;
	description: string;
	href: string;
	className: string;
	background: ReactNode;
}

const convertingCardIcons: ConvertingCardIconSet = {
	destination: {
		id: "client",
		Icon: PersonIcon,
	},
	hub: {
		id: "handoff",
		Icon: FigmaLogoIcon,
	},
	sources: [
		{
			id: "brief",
			Icon: FileTextIcon,
		},
		{
			id: "spec",
			Icon: FilePlusIcon,
		},
		{
			id: "assets",
			Icon: FileIcon,
		},
		{
			id: "repo",
			Icon: GitHubLogoIcon,
		},
	],
};

export const serviceItems: ServiceItem[] = [
	{
		name: "Paquete de servicio 01",
		description:
			"Cambia por la oferta principal que brindas con mas frecuencia - define el alcance, la duracion y el resultado de negocio.",
	},
	{
		name: "Paquete de servicio 02",
		description:
			"Usa este espacio para una segunda oferta o plan de retencion que destaque como apoyas distintas necesidades de clientes.",
	},
	{
		name: "Sprint dedicado",
		description:
			"Describe una colaboracion enfocada de dos a cuatro semanas para abordar una sola funcionalidad, rediseno o prototipo.",
	},
	{
		name: "Sesion de asesoria",
		description:
			"Indica como los equipos pueden agendar llamadas de estrategia, auditorias tecnicas u horas de oficina cuando necesiten destrabarse.",
	},
	{
		name: "Soporte de lanzamiento",
		description:
			"Explica el handoff, el QA y el soporte de despliegue que aportas durante lanzamientos de producto o campanas.",
	},
	{
		name: "Pase de optimizacion",
		description:
			"Reserva esta linea para auditorias de rendimiento, accesibilidad o UX que mantengan el trabajo pulido.",
	},
	{
		name: "Auditoria de sistemas",
		description:
			"Menciona revisiones de plataforma, migracion de stack o modernizacion que mantengan a los equipos listos para escalar.",
	},
];

export const bestPractices: ServiceItem[] = [
	{
		name: "Principio 01 - Lidera con resultados",
		description:
			"Un recordatorio para mencionar el cambio medible que logras, no solo las herramientas que usas para llegar alli.",
	},
	{
		name: "Principio 02 - Mantener a los equipos al tanto",
		description:
			"Sugiere como manejas actualizaciones semanales, notas asincronas o resumenes en Loom para que los clientes sepan que avanza.",
	},
	{
		name: "Principio 03 - Disenar para el handoff",
		description:
			"Explica como empaquetas entregables, documentacion o grabaciones para que el trabajo sea facil de ampliar mas adelante.",
	},
	{
		name: "Principio 04 - Prototipar temprano",
		description:
			"Invita a referenciar los prototipos, sandboxes o experimentos que sueles hacer al inicio.",
	},
	{
		name: "Principio 05 - Cuidar los detalles",
		description:
			"Usa este espacio para contar tu obsesion por la accesibilidad, el pulido o la animacion que te diferencia.",
	},
	{
		name: "Principio 06 - Construir para el cambio",
		description:
			"Recuerda que mantienes la arquitectura flexible, lista para el futuro y preparada para lo que pida la V2.",
	},
	{
		name: "Principio 07 - Documentar el camino",
		description:
			"Cuenta como capturas aprendizajes, escribes notas internas o compartes looms que aclaran decisiones clave.",
	},
	{
		name: "Principio 08 - Probar sin descanso",
		description:
			"Reserva este punto para tu cadencia de QA, herramientas o rituales de revision antes de publicar.",
	},
	{
		name: "Principio 09 - Colaborar abiertamente",
		description:
			"Menciona la cadencia de workshops, horas de oficina o standups asincronos que llevas con socios de producto.",
	},
	{
		name: "Principio 10 - Iterar despues del lanzamiento",
		description:
			"Destaca como te mantienes cerca de analiticas, feedback de usuarios o datos de retencion para planear el siguiente release.",
	},
];

export const serviceFeatures: ServiceFeature[] = [
	{
		name: "Resumen del servicio",
		description:
			"Cambia por un texto corto que explique que tipos de proyectos tomas y como pueden contratarte.",
		href: "#",
		className: "col-span-1",
		background: <ServicesCardContent items={serviceItems} />,
	},

	{
		name: "De diseno a desarrollo",
		description:
			"Usa este bloque para describir como traduces tableros de Figma, presentaciones o briefs en trabajo listo para produccion.",
		href: "#",
		className: "col-span-1",
		background: <ConvertingCardContent icons={convertingCardIcons} />,
	},

	{
		name: "Estandares de codigo",
		description:
			"Describe los valores de ingenieria, rituales de revision o lineamientos que mantienen tu trabajo sostenible.",
		href: "#",
		className: "col-span-1",
		background: <CleanCodeCardContent items={bestPractices} />,
	},
];
