function AzLat2AzCyr(text, type)
{
	let regex = null, letter = null, type = Math.abs(type),
			pattern	=	[
						"A-А",
						"a-а",
						"B-Б",
						"b-б",
						"C-Ҹ",
						"c-ҹ",
						"Ç-Ч",
						"ç-ч",
						"D-Д",
						"d-д",
						"E-Е",
						"e-е",
						"Ə-Ә",
						"ə-ә",
						"F-Ф",
						"f-ф",						
						"G-Ҝ",
						"g-ҝ",
						"Ğ-Ғ",
						"ğ-ғ",
						"H-Һ",
						"h-һ",						
						"X-Х",
						"x-х",
						"I-Ы",
						"ı-ы",
						"İ-И",
						"i-и",
						"J-Ж",
						"j-ж",
						"K-К",
						"k-к",
						"Q-Г",
						"q-г",						
						"L-Л",
						"l-л",
						"M-М",
						"m-м",
						"N-Н",
						"n-н",
						"O-О",
						"o-о",						
						"Ö-Ө",
						"ö-ө",
						"P-П",
						"p-п",
						"R-Р",
						"r-р",						
						"S-С",
						"s-с",
						"Ş-Ш",
						"ş-ш",
						"T-Т",
						"t-т",
						"U-У",
						"u-у",
						"Ü-Ү",
						"ü-ү",						
						"V-В",
						"v-в",
						"Y-Ј",
						"y-ј",
						"Z-З",
						"z-з"
					];

	for(let i in pattern)
	{
		letter = pattern[i].split("-");
		regex = new RegExp(letter[0 + type], "gms");
		text = text.replace(regex, letter[1 - type]);

	}

	return text;
}
