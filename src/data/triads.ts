// Major triads on the D, G and B strings, one per natural note, in order along
// the neck. Each triad is the middle three strings of the full major chord
// whose root is on the A string at `rootFret` (the "A shape" barre chord):
//
//   full chord:  x  r  r+2  r+2  r+2  r      (r = rootFret)
//   triad:       x  x  r+2  r+2  r+2  x
//
// `notes` are the triad's notes on the D, G and B strings (5th, root, 3rd).

export interface TriadRow {
	name: string;
	rootFret: number;
	notes: [string, string, string];
}

export const middleStringTriads: TriadRow[] = [
	{ name: 'A', rootFret: 0, notes: ['E', 'A', 'C♯'] },
	{ name: 'B', rootFret: 2, notes: ['F♯', 'B', 'D♯'] },
	{ name: 'C', rootFret: 3, notes: ['G', 'C', 'E'] },
	{ name: 'D', rootFret: 5, notes: ['A', 'D', 'F♯'] },
	{ name: 'E', rootFret: 7, notes: ['B', 'E', 'G♯'] },
	{ name: 'F', rootFret: 8, notes: ['C', 'F', 'A'] },
	{ name: 'G', rootFret: 10, notes: ['D', 'G', 'B'] },
];
