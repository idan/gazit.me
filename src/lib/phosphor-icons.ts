import type { SvgComponent } from 'astro/types';
import SpeakerHighRegular from '@phosphor-icons/core/regular/speaker-high.svg';

export const PHOSPHOR_WEIGHTS = [
	'regular',
	'thin',
	'light',
	'bold',
	'fill',
	'duotone',
] as const;

export type PhosphorWeight = (typeof PHOSPHOR_WEIGHTS)[number];

/**
 * The icons available through PhosphorIcon.astro.
 *
 * Keep this registry explicit: importing one SVG per icon and weight ensures
 * that adding an icon is deliberate and no icon font or complete icon set is
 * included in the browser build.
 */
export const phosphorIcons = {
	'speaker-high': {
		regular: SpeakerHighRegular,
	},
} as const;

export type PhosphorIconName = keyof typeof phosphorIcons;

export function getPhosphorIcon(
	name: PhosphorIconName,
	weight: PhosphorWeight,
): SvgComponent | undefined {
	const weights = phosphorIcons[name] as Partial<Record<PhosphorWeight, SvgComponent>>;
	return weights[weight];
}
