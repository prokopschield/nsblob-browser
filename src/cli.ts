#!/usr/bin/env node

import { exec } from 'child_process';
import nsblob from 'nsblob';

exec(
	`browserify ${__dirname}/index.js | minify --js`,
	async (error, stdout, stderr) => {
		const [hash_error, hash_stdout, hash_stderr] = await Promise.all([
			nsblob.store(String(error)),
			nsblob.store(stdout),
			nsblob.store(stderr),
		]);

		if (error || stderr) {
			console.error(error || stderr);
			console.error(
				await nsblob.store(
					JSON.stringify({ hash_error, hash_stdout, hash_stderr })
				)
			);
		} else {
			console.log(`https://cdn.nodesite.eu:20122/get/${hash_stdout}.js`);
		}

		nsblob.socket.close();
	}
);
