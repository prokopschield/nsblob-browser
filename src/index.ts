import nsblob from 'nsblob';
import Buffer from 'fix-buffer-in-browser';

if (typeof window === 'undefined') {
	Object.assign(global, {
		window: global,
	});
}

if (typeof global === 'undefined') {
	Object.assign(window, {
		global: window,
	});
}

if (!('Buffer' in window)) {
	Object.assign(window, Buffer);
}

if (!('nsblob' in window)) {
	Object.assign(window, nsblob);
}

export = nsblob;
