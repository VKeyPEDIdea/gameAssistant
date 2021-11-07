import { Duration } from "../models/Duration";

function getNormalizedUnit(unit: number): string {
	return unit > 9 ? unit + '' : '0' + unit;
}

export function getNormalizedDuration(duration: Duration): string {
	const { hrs, min, sec } = duration;
	return getNormalizedUnit(hrs)
	+ ':' + getNormalizedUnit(min)
	+ ':' + getNormalizedUnit(sec);
}