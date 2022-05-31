import type PKMNType from './interface';
import type { DefaultPKMNType, PKMNTypeString } from './interface';
import * as PKMNTypeO from './types';

export const defaultType: DefaultPKMNType = {
	fire: 1,
	electrik: 1,
	normal: 1,
	water: 1,
	grass: 1,
	ice: 1,
	fight: 1,
	poison: 1,
	ground: 1,
	fly: 1,
	psy: 1,
	bug: 1,
	rock: 1,
	ghost: 1,
	dragon: 1,
	dark: 1,
	steel: 1,
	fairy: 1
};

type defaultPKMN = {
	offensive: {
		[x in PKMNTypeString]: 1;
	};
	defensive: {
		[x in PKMNTypeString]: 1;
	};
};

export const combine = (Stype1: PKMNTypeString, Stype2?: PKMNTypeString): PKMNType => {
	const type1 = PKMNTypeO[Stype1];
	const result: defaultPKMN = { defensive: { ...defaultType }, offensive: { ...defaultType } };
	const arrDefType1: [PKMNTypeString, number][] = Object.entries(type1.defensive) as [
		PKMNTypeString,
		number
	][];
	const arrOffType1: [PKMNTypeString, number][] = Object.entries(type1.offensive) as [
		PKMNTypeString,
		number
	][];
	if (Stype2) {
		const type2 = PKMNTypeO[Stype2];
		const arrDefType2: [PKMNTypeString, number][] = Object.entries(type2.defensive) as [
			PKMNTypeString,
			number
		][];
		const arrOffType2: [PKMNTypeString, number][] = Object.entries(type2.offensive) as [
			PKMNTypeString,
			number
		][];
		for (const [key, value] of arrDefType2) {
			result.defensive[key] *= value;
		}
		for (const [key, value] of arrOffType2) {
			result.offensive[key] *= value;
		}
	}
	for (const [key, value] of arrDefType1) {
		result.defensive[key] *= value;
	}
	for (const [key, value] of arrOffType1) {
		result.offensive[key] *= value;
	}
	console.log(result);
	return result;
};
