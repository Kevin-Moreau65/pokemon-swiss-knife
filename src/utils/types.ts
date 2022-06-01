import type PKMNType from './interface';

export const fire: PKMNType = {
	defensive: {
		fire: 0.5,
		grass: 0.5,
		ice: 0.5,
		bug: 0.5,
		steel: 0.5,
		fairy: 0.5,
		water: 2,
		ground: 2,
		rock: 2
	},
	offensive: {
		fire: 0.5,
		water: 0.5,
		rock: 0.5,
		dragon: 0.5,
		grass: 2,
		ice: 2,
		bug: 2,
		steel: 2
	}
};
export const normal: PKMNType = {
	defensive: {
		fight: 2,
		ghost: 0
	},
	offensive: {
		rock: 0.5,
		steel: 0.5,
		ghost: 0
	}
};
export const water: PKMNType = {
	defensive: {
		fire: 0.5,
		steel: 0.5,
		water: 0.5,
		grass: 2,
		electric: 2,
		ice: 0.5
	},
	offensive: {
		ground: 2,
		rock: 2,
		fire: 2,
		water: 0.5,
		grass: 0.5,
		dragon: 0.5
	}
};
export const grass: PKMNType = {
	defensive: {
		flying: 2,
		poison: 2,
		ground: 0.5,
		bug: 2,
		fire: 2,
		water: 0.5,
		grass: 0.5,
		electric: 0.5,
		ice: 2
	},
	offensive: {
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
	}
};
export const ice: PKMNType = {
	defensive: {
		fight: 2,
		rock: 2,
		steel: 2,
		fire: 2,
		ice: 0.5
	},
	offensive: {
		flying: 2,
		ground: 2,
		steel: 0.5,
		fire: 0.5,
		water: 0.5,
		grass: 2,
		ice: 0.5,
		dragon: 2
	}
};
export const fight: PKMNType = {
	defensive: {
		flying: 2,
		rock: 0.5,
		bug: 0.5,
		psychic: 2,
		dark: 0.5,
		fairy: 2
	},
	offensive: {
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
	}
};
export const poison: PKMNType = {
	defensive: {
		fight: 0.5,
		poison: 0.5,
		ground: 2,
		bug: 0.5,
		grass: 0.5,
		psychic: 2,
		fairy: 0.5
	},
	offensive: {
		poison: 0.5,
		ground: 0.5,
		rock: 0.5,
		ghost: 0.5,
		steel: 0,
		grass: 2,
		fairy: 2
	}
};
export const ground: PKMNType = {
	defensive: {
		poison: 0.5,
		rock: 0.5,
		water: 2,
		grass: 2,
		electric: 0,
		ice: 2
	},
	offensive: {
		flying: 0,
		poison: 2,
		rock: 2,
		bug: 0.5,
		steel: 2,
		fire: 2,
		grass: 0.5,
		electric: 2
	}
};
export const flying: PKMNType = {
	defensive: {
		fight: 0.5,
		ground: 0,
		rock: 2,
		bug: 0.5,
		grass: 0.5,
		electric: 2,
		ice: 2
	},
	offensive: {
		fight: 2,
		rock: 0.5,
		bug: 2,
		steel: 0.5,
		grass: 2,
		electric: 0.5
	}
};
export const psychic: PKMNType = {
	defensive: {
		fight: 0.5,
		bug: 2,
		ghost: 2,
		psychic: 0.5,
		dark: 2
	},
	offensive: {
		fight: 2,
		poison: 2,
		steel: 0.5,
		psychic: 0.5,
		dark: 0
	}
};
export const bug: PKMNType = {
	defensive: {
		fight: 0.5,
		flying: 2,
		ground: 0.5,
		rock: 2,
		fire: 2,
		grass: 0.5
	},
	offensive: {
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
	}
};
export const rock: PKMNType = {
	defensive: {
		normal: 0.5,
		fire: 0.5,
		water: 2,
		grass: 2,
		fight: 2,
		poison: 0.5,
		ground: 0.5,
		flying: 0.5,
		steel: 2
	},
	offensive: {
		fire: 2,
		ice: 2,
		fight: 0.5,
		ground: 0.5,
		flying: 2,
		bug: 2,
		steel: 0.5
	}
};
export const ghost: PKMNType = {
	defensive: {
		normal: 0,
		fight: 0,
		poison: 0.5,
		bug: 0.5,
		ghost: 2,
		dark: 2
	},
	offensive: {
		normal: 0,
		psychic: 2,
		ghost: 2,
		dark: 0.5
	}
};
export const dragon: PKMNType = {
	defensive: {
		fire: 0.5,
		water: 0.5,
		grass: 0.5,
		electric: 0.5,
		ice: 2,
		dragon: 2,
		fairy: 2
	},
	offensive: {
		dragon: 2,
		steel: 0.5,
		fairy: 0
	}
};
export const dark: PKMNType = {
	defensive: {
		fight: 2,
		psychic: 0,
		bug: 2,
		ghost: 0.5,
		dark: 0.5,
		fairy: 2
	},
	offensive: {
		fight: 0.5,
		psychic: 2,
		ghost: 2,
		dark: 0.5,
		fairy: 0.5
	}
};
export const steel: PKMNType = {
	defensive: {
		normal: 0.5,
		fire: 2,
		grass: 0.5,
		ice: 0.5,
		fight: 2,
		poison: 0,
		ground: 2,
		flying: 0.5,
		psychic: 0.5,
		bug: 0.5,
		rock: 0.5,
		dragon: 0.5,
		steel: 0.5,
		fairy: 0.5
	},
	offensive: {
		fire: 0.5,
		grass: 0.5,
		electric: 0.5,
		ice: 2,
		rock: 2,
		steel: 0.5,
		fairy: 2
	}
};
export const fairy: PKMNType = {
	defensive: {
		fight: 0.5,
		poison: 2,
		bug: 0.5,
		dragon: 0,
		dark: 0.5,
		steel: 2
	},
	offensive: {
		fire: 0.5,
		fight: 2,
		dragon: 2,
		dark: 2,
		steel: 0.5
	}
};
export const electric: PKMNType = {
	defensive: {
		electric: 0.5,
		ground: 2,
		flying: 0.5,
		steel: 0.5
	},
	offensive: {
		water: 2,
		grass: 0.5,
		electric: 0.5,
		ground: 0,
		flying: 2,
		dragon: 0.5
	}
};
