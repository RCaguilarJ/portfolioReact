import { Suspense, lazy, useEffect, useState } from "react";
import { CubeIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { cn } from "@/lib/utils";
import ShowcaseCard from "@/sections/showcase/_components/showcase-card";
import { showcaseHighlights } from "@/sections/showcase/_constants/showcase";

const RocketShowcase = lazy(
	() => import("@/sections/showcase/_components/rocket-showcase"),
);

function ClientOnly({
	children,
	fallback = null,
}: {
	children: React.ReactNode;
	fallback?: React.ReactNode;
}) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	if (!mounted) return fallback;
	return <>{children}</>;
}

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
			<div className="w-full lg:col-span-3 lg:row-span-2">
				<ClientOnly
					fallback={
						<div className="relative w-full h-full min-h-[320px] overflow-hidden rounded-2xl border border-border/80 bg-card-elevated" />
					}
				>
					<Suspense
						fallback={
							<div className="relative w-full h-full min-h-[320px] overflow-hidden rounded-2xl border border-border/80 bg-card-elevated" />
						}
					>
						<RocketShowcase />
					</Suspense>
				</ClientOnly>
			</div>
			{showcaseHighlights.map(
				({ className, title, description, src, poster }, index) => (
					<div key={`${poster}-${index}`} className={cn("w-full", className)}>
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
