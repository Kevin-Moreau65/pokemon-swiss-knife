export default interface PKMNType {
	offensive: {
		[x in PKMNTypeString]?: number;
	};
	defensive: {
		[x in PKMNTypeString]?: number;
	};
}
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
	| 'electrik'
	| 'ice'
	| 'fight'
	| 'poison'
	| 'ground'
	| 'fly'
	| 'psy'
	| 'bug'
	| 'rock'
	| 'ghost'
	| 'dragon'
	| 'dark'
	| 'steel'
	| 'fairy';