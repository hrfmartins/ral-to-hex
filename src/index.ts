import colours from './colours.json';

export const ralToHex = (ral) => {
	if(!ral || !colours[ral.toString()]) throw new Error(`Unknown RAL code: '${ral}'`)
	else return colours[ral.toString()]
}
