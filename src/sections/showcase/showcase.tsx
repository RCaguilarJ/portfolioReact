import { CubeIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { cn } from "@/lib/utils";
import ShowcaseCard from "@/sections/showcase/_components/showcase-card";
import { showcaseHighlights } from "@/sections/showcase/_constants/showcase";

export default function Showcase() {
	return (
		<Section
			id="showcase"
			title="Destaca trabajos clave o estudios en video"
			description="Usa estos espacios para showreels, prototipos filmados o capturas que den mas contexto a tu proceso."
			className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:auto-rows-[220px]"
			badgeText="Galeria"
			badgeIcon={<CubeIcon aria-hidden="true" className="size-3.5" />}
		>
			{showcaseHighlights.map(
				({ className, title, description, src, poster }) => (
					<div key={title} className={cn("w-full", className)}>
						<ShowcaseCard
							title={title}
							description={description}
							src={src}
							poster={poster}
						/>
					</div>
				),
			)}
		</Section>
	);
}
