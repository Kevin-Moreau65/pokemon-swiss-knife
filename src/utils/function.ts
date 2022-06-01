import type PKMNType from './interface';
import type { DefaultPKMNType, PKMNTypeString } from './interface';
import * as PKMNTypeO from './types';

export const defaultType: DefaultPKMNType = {
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

export const combineDefense = (
	Stype1: PKMNTypeString,
	Stype2?: PKMNTypeString
): { [x in PKMNTypeString]: number } => {
	const type1 = PKMNTypeO[Stype1];
	const result = { ...defaultType };
	const arrDefType1: [PKMNTypeString, number][] = Object.entries(type1.defensive) as [
		PKMNTypeString,
		number
	][];
	for (const [key, value] of arrDefType1) {
		result[key] *= value;
	}
	if (Stype2) {
		const type2 = PKMNTypeO[Stype2];
		const arrDefType2: [PKMNTypeString, number][] = Object.entries(type2.defensive) as [
			PKMNTypeString,
			number
		][];
		for (const [key, value] of arrDefType2) {
			result[key] *= value;
		}
	}
	return result;
};
export const combineOffense = (Stype: PKMNTypeString): { [x in PKMNTypeString]: number } => {
	const type = PKMNTypeO[Stype];
	const result = { ...defaultType };
	const arrDefType1: [PKMNTypeString, number][] = Object.entries(type.offensive) as [
		PKMNTypeString,
		number
	][];
	for (const [key, value] of arrDefType1) {
		result[key] *= value;
	}
	return result;
};
