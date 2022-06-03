import { defaultType, type PKMNTypeString } from './interface';
import type PKMNType from './interface';
import * as PKMNTypeO from './types';
export const combineDefense = (Stype1: PKMNTypeString, Stype2?: PKMNTypeString): PKMNType => {
	const result = { ...defaultType };
	for (const [key, value] of Object.entries(PKMNTypeO) as [PKMNTypeString, PKMNType][]) {
		result[key] *= value[Stype1];
		if (Stype2) result[key] *= value[Stype2];
	}
	return result;
};
export const combineOffense = (Stype: PKMNTypeString): PKMNType => {
	return { ...PKMNTypeO[Stype] };
};
