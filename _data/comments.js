import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function() {
	const commentsPath = path.join(__dirname, '../content/blog/comments.json');
	const commentsData = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));
	return commentsData;
}
