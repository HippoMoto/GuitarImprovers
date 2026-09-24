// Chord shapes shown on the chord library page.
//
// `frets` and `fingers` list the strings from low E (left) to high e (right).
//   frets:   x = don't play the string, 0 = open, 1+ = fret number
//   fingers: 0/x = no finger, 1 = index, 2 = middle, 3 = ring, 4 = pinky
// For frets 10 and above, separate the values with spaces: "x 10 12 12 12 10".
// A finger number repeated across strings at the same fret is drawn as a barre.

export const roots = [
	{ id: 'C', label: 'C' },
	{ id: 'C#', label: 'C♯/D♭' },
	{ id: 'D', label: 'D' },
	{ id: 'Eb', label: 'D♯/E♭' },
	{ id: 'E', label: 'E' },
	{ id: 'F', label: 'F' },
	{ id: 'F#', label: 'F♯/G♭' },
	{ id: 'G', label: 'G' },
	{ id: 'Ab', label: 'G♯/A♭' },
	{ id: 'A', label: 'A' },
	{ id: 'Bb', label: 'A♯/B♭' },
	{ id: 'B', label: 'B' },
] as const;

export type RootId = (typeof roots)[number]['id'];

/** True for the sharp/flat roots (C♯/D♭, D♯/E♭, …). */
export const isAccidental = (root: RootId) => root.length > 1;

export type Quality = 'major' | 'minor' | 'seventh';

export interface Chord {
	name: string;
	root: RootId;
	quality: Quality;
	frets: string;
	fingers: string;
}

export const chords: Chord[] = [
	{ name: 'C', root: 'C', quality: 'major', frets: 'x32010', fingers: 'x32010' },
	{ name: 'Cm', root: 'C', quality: 'minor', frets: 'x35543', fingers: 'x13421' },
	{ name: 'C7', root: 'C', quality: 'seventh', frets: 'x32310', fingers: 'x32410' },
	{ name: 'C♯', root: 'C#', quality: 'major', frets: 'x46664', fingers: 'x12341' },
	{ name: 'C♯m', root: 'C#', quality: 'minor', frets: 'x46654', fingers: 'x13421' },
	{ name: 'C♯7', root: 'C#', quality: 'seventh', frets: 'x46464', fingers: 'x13141' },
	{ name: 'D', root: 'D', quality: 'major', frets: 'xx0232', fingers: 'xx0132' },
	{ name: 'Dm', root: 'D', quality: 'minor', frets: 'xx0231', fingers: 'xx0231' },
	{ name: 'D7', root: 'D', quality: 'seventh', frets: 'xx0212', fingers: 'xx0213' },
	{ name: 'E♭', root: 'Eb', quality: 'major', frets: 'x68886', fingers: 'x12341' },
	{ name: 'E♭m', root: 'Eb', quality: 'minor', frets: 'x68876', fingers: 'x13421' },
	{ name: 'E♭7', root: 'Eb', quality: 'seventh', frets: 'x68686', fingers: 'x13141' },
	{ name: 'E', root: 'E', quality: 'major', frets: '022100', fingers: '023100' },
	{ name: 'Em', root: 'E', quality: 'minor', frets: '022000', fingers: '023000' },
	{ name: 'E7', root: 'E', quality: 'seventh', frets: '020100', fingers: '020100' },
	{ name: 'F', root: 'F', quality: 'major', frets: '133211', fingers: '134211' },
	{ name: 'Fm', root: 'F', quality: 'minor', frets: '133111', fingers: '134111' },
	{ name: 'F7', root: 'F', quality: 'seventh', frets: '131211', fingers: '131211' },
	{ name: 'F♯', root: 'F#', quality: 'major', frets: '244322', fingers: '134211' },
	{ name: 'F♯m', root: 'F#', quality: 'minor', frets: '244222', fingers: '134111' },
	{ name: 'F♯7', root: 'F#', quality: 'seventh', frets: '242322', fingers: '131211' },
	{ name: 'G', root: 'G', quality: 'major', frets: '320003', fingers: '210003' },
	{ name: 'Gm', root: 'G', quality: 'minor', frets: '355333', fingers: '134111' },
	{ name: 'G7', root: 'G', quality: 'seventh', frets: '320001', fingers: '320001' },
	{ name: 'A♭', root: 'Ab', quality: 'major', frets: '466544', fingers: '134211' },
	{ name: 'G♯m', root: 'Ab', quality: 'minor', frets: '466444', fingers: '134111' },
	{ name: 'A♭7', root: 'Ab', quality: 'seventh', frets: '464544', fingers: '131211' },
	{ name: 'A', root: 'A', quality: 'major', frets: 'x02220', fingers: 'x01230' },
	{ name: 'Am', root: 'A', quality: 'minor', frets: 'x02210', fingers: 'x02310' },
	{ name: 'A7', root: 'A', quality: 'seventh', frets: 'x02020', fingers: 'x02030' },
	{ name: 'B♭', root: 'Bb', quality: 'major', frets: 'x13331', fingers: 'x12341' },
	{ name: 'B♭m', root: 'Bb', quality: 'minor', frets: 'x13321', fingers: 'x13421' },
	{ name: 'B♭7', root: 'Bb', quality: 'seventh', frets: 'x13131', fingers: 'x13141' },
	{ name: 'B', root: 'B', quality: 'major', frets: 'x24442', fingers: 'x12341' },
	{ name: 'Bm', root: 'B', quality: 'minor', frets: 'x24432', fingers: 'x13421' },
	{ name: 'B7', root: 'B', quality: 'seventh', frets: 'x21202', fingers: 'x21304' },
];
