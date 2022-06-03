import type PKMNType from './interface';
import { defaultType } from './interface';
export const fire: PKMNType = {
	...defaultType,
	fire: 0.5,
	water: 0.5,
	rock: 0.5,
	dragon: 0.5,
	grass: 2,
	ice: 2,
	bug: 2,
	steel: 2
};
export const normal: PKMNType = {
	...defaultType,
	rock: 0.5,
	steel: 0.5,
	ghost: 0
};
export const water: PKMNType = {
	...defaultType,
	ground: 2,
	rock: 2,
	fire: 2,
	water: 0.5,
	grass: 0.5,
	dragon: 0.5
};
export const grass: PKMNType = {
	...defaultType,
	flying: 0.5,
	poison: 0.5,
	ground: 2,
	rock: 2,
	bug: 0.5,
	steel: 0.5,
	fire: 0.5,
	water: 2,
	grass: 0.5,
	dragon: 0.5
};
export const ice: PKMNType = {
	...defaultType,
	flying: 2,
	ground: 2,
	steel: 0.5,
	fire: 0.5,
	water: 0.5,
	grass: 2,
	ice: 0.5,
	dragon: 2
};
export const fight: PKMNType = {
	...defaultType,
	normal: 2,
	flying: 0.5,
	poison: 0.5,
	rock: 2,
	bug: 0.5,
	ghost: 0,
	steel: 2,
	psychic: 0.5,
	ice: 2,
	dark: 2,
	fairy: 0.5
};
export const poison: PKMNType = {
	...defaultType,
	poison: 0.5,
	ground: 0.5,
	rock: 0.5,
	ghost: 0.5,
	steel: 0,
	grass: 2,
	fairy: 2
};
export const ground: PKMNType = {
	...defaultType,
	flying: 0,
	poison: 2,
	rock: 2,
	bug: 0.5,
	steel: 2,
	fire: 2,
	grass: 0.5,
	electric: 2
};
export const flying: PKMNType = {
	...defaultType,
	fight: 2,
	rock: 0.5,
	bug: 2,
	steel: 0.5,
	grass: 2,
	electric: 0.5
};
export const psychic: PKMNType = {
	...defaultType,
	fight: 2,
	poison: 2,
	steel: 0.5,
	psychic: 0.5,
	dark: 0
};
export const bug: PKMNType = {
	...defaultType,
	fight: 0.5,
	flying: 0.5,
	poison: 0.5,
	ghost: 0.5,
	steel: 0.5,
	fire: 0.5,
	grass: 2,
	psychic: 2,
	dark: 2,
	fairy: 0.5
};
export const rock: PKMNType = {
	...defaultType,
	fire: 2,
	ice: 2,
	fight: 0.5,
	ground: 0.5,
	flying: 2,
	bug: 2,
	steel: 0.5
};
export const ghost: PKMNType = {
	...defaultType,
	normal: 0,
	psychic: 2,
	ghost: 2,
	dark: 0.5
};
export const dragon: PKMNType = {
	...defaultType,
	dragon: 2,
	steel: 0.5,
	fairy: 0
};
export const dark: PKMNType = {
	...defaultType,
	fight: 0.5,
	psychic: 2,
	ghost: 2,
	dark: 0.5,
	fairy: 0.5
};
export const steel: PKMNType = {
	...defaultType,
	fire: 0.5,
	grass: 0.5,
	electric: 0.5,
	ice: 2,
	rock: 2,
	steel: 0.5,
	fairy: 2
};
export const fairy: PKMNType = {
	...defaultType,
	fire: 0.5,
	fight: 2,
	dragon: 2,
	dark: 2,
	steel: 0.5
};
export const electric: PKMNType = {
	...defaultType,
	water: 2,
	grass: 0.5,
	electric: 0.5,
	ground: 0,
	flying: 2,
	dragon: 0.5
};
