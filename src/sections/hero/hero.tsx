import { useGSAP } from "@gsap/react";
import { EyeLogoIcon } from "@/components/icons/eye-logo-icon";
import { useCallback, useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShinyBadge } from "@/components/ui/shiny-badge";
import {
	gsap,
	premiumEase,
	registerGsapPlugins,
	SplitText,
} from "@/lib/gsap-config";
import { useLenis } from "@/lib/lenis-context";
import { Background } from "@/sections/hero/_components/background";

registerGsapPlugins();

export default function Hero() {
	const heroRef = useRef<HTMLElement>(null);
	const badgeRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const actionsRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLDivElement>(null);
	const pixelGridRef = useRef<HTMLDivElement>(null);

	const [fontsLoaded, setFontsLoaded] = useState(() => {
		if (typeof document === "undefined") return false;
		if (!("fonts" in document)) return true;
		return document.fonts.status === "loaded";
	});

	const { scrollTo } = useLenis();

	/* ------------------------------------------------------------------ */
	/*  Wait for fonts                                                     */
	/* ------------------------------------------------------------------ */
	useEffect(() => {
		if (fontsLoaded || typeof document === "undefined") return;
		if (!("fonts" in document)) {
			setFontsLoaded(true);
			return;
		}
		let isActive = true;
		document.fonts.ready.then(() => {
			if (isActive) setFontsLoaded(true);
		});
		return () => {
			isActive = false;
		};
	}, [fontsLoaded]);

	/* ------------------------------------------------------------------ */
	/*  Entrance animation (SplitText + premiumEase)                       */
	/* ------------------------------------------------------------------ */
	useGSAP(
		(context) => {
			if (!fontsLoaded) return;
			const hero = heroRef.current;
			if (!hero) return;

			gsap.set(
				[
					badgeRef.current,
					titleRef.current,
					descriptionRef.current,
					actionsRef.current,
				],
				{ autoAlpha: 1 },
			);

			const splits: SplitText[] = [];
			context.add(() => {
				splits.forEach((split) => split.revert());
			});

			const titleSplit = titleRef.current
				? new SplitText(titleRef.current, { type: "lines" })
				: null;

			const descriptionSplit = descriptionRef.current
				? new SplitText(descriptionRef.current, { type: "lines" })
				: null;

			if (titleSplit) splits.push(titleSplit);
			if (descriptionSplit) splits.push(descriptionSplit);

			const timeline = gsap.timeline({
				defaults: { ease: premiumEase },
				scrollTrigger: {
					trigger: hero,
					start: "top 80%",
					once: true,
				},
			});

			if (badgeRef.current) {
				timeline.from(badgeRef.current, {
					yPercent: 30,
					autoAlpha: 0,
					filter: "blur(16px)",
					duration: 0.9,
					ease: premiumEase,
				});
			}

			if (titleSplit) {
				timeline.from(
					titleSplit.lines,
					{
						yPercent: 30,
						autoAlpha: 0,
						filter: "blur(16px)",
						stagger: 0.15,
						duration: 0.9,
						ease: premiumEase,
					},
					"-=0.6",
				);
			}

			if (descriptionSplit) {
				timeline.from(
					descriptionSplit.lines,
					{
						yPercent: 30,
						autoAlpha: 0,
						filter: "blur(16px)",
						stagger: 0.15,
						duration: 0.9,
						ease: premiumEase,
					},
					"-=0.6",
				);
			}

			if (actionsRef.current) {
				const buttons = Array.from(
					actionsRef.current.children,
				) as HTMLElement[];
				timeline.fromTo(
					buttons,
					{
						yPercent: 30,
						autoAlpha: 0,
						filter: "blur(16px)",
					},
					{
						yPercent: 0,
						autoAlpha: 1,
						filter: "blur(0px)",
						clearProps: "filter",
						stagger: 0.15,
						duration: 0.9,
						ease: premiumEase,
					},
					"-=0.6",
				);
			}
		},
		{
			scope: heroRef,
			dependencies: [fontsLoaded],
		},
	);

	/* ------------------------------------------------------------------ */
	/*  Pixel-scatter animation on card mouse-leave                        */
	/* ------------------------------------------------------------------ */
	const handleMouseLeave = useCallback(() => {
		if (!cardRef.current || !pixelGridRef.current) return;

		const gridSize = 4;
		const pixelSize = 100 / gridSize;
		const grid = pixelGridRef.current;

		grid.innerHTML = "";

		const totalPixels = gridSize * gridSize;
		const clearIndices = new Set<number>();
		while (clearIndices.size < 3) {
			clearIndices.add(Math.floor(Math.random() * totalPixels));
		}

		let pixelIndex = 0;
		for (let row = 0; row < gridSize; row++) {
			for (let col = 0; col < gridSize; col++) {
				if (clearIndices.has(pixelIndex)) {
					pixelIndex++;
					continue;
				}

				const pixel = document.createElement("div");
				const isAccent = Math.random() < 0.5;

				const normalizedPosition =
					(col + (gridSize - 1 - row)) / ((gridSize - 1) * 2);
				const targetOpacity = 0.5 + normalizedPosition * 0.5;

				const accentColor = getComputedStyle(
					document.documentElement,
				).getPropertyValue("--color-gradient-from");
				const bgColor = getComputedStyle(
					document.documentElement,
				).getPropertyValue("--color-background");

				pixel.style.cssText = `
					position:absolute;
					width:${pixelSize}%;
					height:${pixelSize}%;
					left:${col * pixelSize}%;
					top:${row * pixelSize}%;
					opacity:0;
					display:block;
					background:${isAccent ? accentColor : bgColor};
				`;
				pixel.setAttribute(
					"data-target-opacity",
					targetOpacity.toString(),
				);
				grid.appendChild(pixel);

				pixelIndex++;
			}
		}

		const pixels = Array.from(grid.children) as HTMLElement[];
		const stepDur = 0.45;
		const staggerDur = stepDur / pixels.length;

		const tl = gsap.timeline();

		tl.to(cardRef.current, {
			scale: 0.995,
			duration: 0.2,
			ease: "power2.in",
		});

		tl.to(
			pixels,
			{
				opacity: (_i: number, target: HTMLElement) =>
					target.getAttribute("data-target-opacity") || "1",
				duration: 0.45,
				ease: "power2.in",
				stagger: { each: staggerDur, from: "random" },
			},
			"<",
		);

		tl.to(
			pixels,
			{ opacity: 0, duration: 0.3, ease: "power2.out" },
			`+=${stepDur}`,
		);
		tl.to(
			cardRef.current,
			{ scale: 1, duration: 0.3, ease: "power2.in" },
			"<",
		);
		tl.set(pixels, { display: "none" });
	}, []);

	/* ------------------------------------------------------------------ */
	/*  Render                                                             */
	/* ------------------------------------------------------------------ */
	return (
		<section ref={heroRef} id="hero" className="p-[1.5%] bg-background">
			{/* SVG mask definition for the stepped-corner shape */}
			<svg width="0" height="0" className="absolute">
				<defs>
					<mask id="heroMask" maskContentUnits="objectBoundingBox">
						<rect width="1" height="1" fill="black" />
						<path
							d="M0 0.1474 V0.9863 C0 0.9938 0.0038 0.9996 0.0085 0.9996 H0.9912 C0.9958 0.9996 1 0.9863 1 0.9863 V0.0581 C1 0.0506 0.9958 0.0444 0.9912 0.0444 H0.9255 C0.9208 0.0444 0.9165 0.0383 0.9165 0.0307 V0.0149 C0.9165 0.0074 0.9132 0.0013 0.9084 0.0013 L0.2060 0.0000 C0.2012 -0.0000 0.1975 0.0061 0.1975 0.0137 V0.0312 C0.1975 0.0387 0.1936 0.0448 0.1889 0.0448 H0.0915 C0.0868 0.0448 0.0830 0.0510 0.0830 0.0585 V0.1201 C0.0830 0.1276 0.0792 0.1337 0.0745 0.1337 H0.0085 C0.0038 0.1337 0 0.1399 0 0.1474 Z"
							fill="white"
						/>
					</mask>
				</defs>
			</svg>

			<div
				className="relative isolate w-full"
				style={{ minHeight: "calc(100svh - 3vh)" }}
			>
				{/* ---- Masked background (shader) ---- */}
				<div
					className="absolute inset-0 overflow-hidden"
					style={{
						mask: "url(#heroMask)",
						WebkitMask: "url(#heroMask)",
					}}
				>
					<Background />

					{/* Gradient overlays for readability on content area */}
					<div className="pointer-events-none absolute inset-0">
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(to bottom, transparent 0%, transparent 50%, var(--color-background) 100%)",
							}}
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(to right, color-mix(in oklab, var(--color-background) 40%, transparent), transparent 60%)",
							}}
						/>
					</div>
				</div>

				{/* ---- Content card at bottom-left ---- */}
				<div className="absolute bottom-6 left-6 right-6 max-w-[min(46rem,92vw)] md:bottom-8 md:left-8 z-10">
					<div
						ref={cardRef}
						onMouseLeave={handleMouseLeave}
						className="relative overflow-hidden rounded-lg p-6 md:p-8 transition-transform duration-500 ease-in hover:scale-[1.01]"
						style={{
							backdropFilter: "blur(16px)",
							WebkitBackdropFilter: "blur(16px)",
							background:
								"color-mix(in oklab, var(--color-card) 12%, transparent)",
							border: "1px solid color-mix(in oklab, var(--color-border) 20%, transparent)",
						}}
					>
						{/* Pixel scatter overlay */}
						<div
							ref={pixelGridRef}
							className="absolute inset-0 pointer-events-none z-10"
						/>

						{/* Badge */}
						<div
							ref={badgeRef}
							style={{ visibility: "hidden" }}
							className="mb-4"
						>
							<ShinyBadge>WEB DEVELOPER</ShinyBadge>
						</div>

						{/* Title */}
						<h1
							ref={titleRef}
							style={{ visibility: "hidden" }}
							className="text-balance text-3xl/tight sm:text-4xl/tight md:text-5xl/tight tracking-tight text-foreground font-medium"
						>
							desarrollo y diseno web full stack y wordpress
						</h1>

						{/* Description */}
						<p
							ref={descriptionRef}
							style={{ visibility: "hidden" }}
							className="mt-3 text-sm/relaxed md:text-base/relaxed max-w-prose text-foreground/70"
						>
							enfocado en proyectos full stack de javascript con
							frameworks como react y node js asi como amplio
							conocimiento en wordpress
						</p>

						{/* CTA button */}
						<div
							ref={actionsRef}
							style={{ visibility: "hidden" }}
							className="mt-5"
						>
							<Button
								variant="secondary"
								size="md"
								onClick={() => scrollTo("#works")}
							>
								Ver portafolio
							</Button>
						</div>
					</div>
				</div>

				{/* ---- Top-left logo ---- */}
				<div className="absolute left-[2%] top-[2%] z-20">
					<EyeLogoIcon className="w-10 h-10 sm:w-12 sm:h-12 text-foreground" />
				</div>

				{/* ---- Top-right CTA ---- */}
				<div className="absolute right-[1%] top-[1%] z-20">
					<Button
						variant="default"
						size="sm"
						className="font-mono font-light uppercase tracking-tight"
						onClick={() => scrollTo("#works")}
					>
						Portfolio
					</Button>
				</div>
			</div>
		</section>
	);
}
