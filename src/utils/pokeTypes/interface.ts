export default PKMNType;
type PKMNType = {
	[x in PKMNTypeString]: number;
};
export const defaultType = {
	fire: 1,
	electric: 1,
	normal: 1,
	water: 1,
	grass: 1,
	ice: 1,
	fight: 1,
	poison: 1,
	ground: 1,
	flying: 1,
	psychic: 1,
	bug: 1,
	rock: 1,
	ghost: 1,
	dragon: 1,
	dark: 1,
	steel: 1,
	fairy: 1
};
export type DefaultPKMNType = {
	[x in PKMNTypeString]: 1;
};
export enum iconState {
	active = '1',
	inactive = '0.5',
	disabled = '0.3'
}
export type PKMNTypeString =
	| 'fire'
	| 'normal'
	| 'water'
	| 'grass'
	| 'electric'
	| 'ice'
	| 'fight'
	| 'poison'
	| 'ground'
	| 'flying'
	| 'psychic'
	| 'bug'
	| 'rock'
	| 'ghost'
	| 'dragon'
	| 'dark'
	| 'steel'
	| 'fairy';
