import type PKMNType from './interface';
import { defaultType, type PKMNTypeString } from './interface';
import * as PKMNTypeO from './types';
export const combineDefense = (Stype1: PKMNTypeString, Stype2?: PKMNTypeString): PKMNType => {
	const type1 = PKMNTypeO[Stype1];
	const result = { ...type1 };
	if (Stype2) {
		const type2 = PKMNTypeO[Stype2];
		const arrType2 = Object.entries(type2) as [PKMNTypeString, number][];
		for (const [key, value] of arrType2) {
			result[key] *= value;
		}
	}
	return result;
};
export const combineOffense = (Stype: PKMNTypeString): PKMNType => {
	const result = { ...defaultType };
	const arrDefTypes = Object.entries(PKMNTypeO) as [PKMNTypeString, PKMNType][];
	for (const [key] of arrDefTypes) {
		result[key] = PKMNTypeO[key][Stype];
	}
	return result;
};
