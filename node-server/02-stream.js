const path = require('path');
const fs = require('fs');
const { createGzip } = require('zlib');

const srcPath = path.resolve(__dirname, 'source.txt');
const destPath = path.resolve(__dirname, 'destination.zip');

const readStream = fs.createReadStream(srcPath);
const writeStream = fs.createWriteStream(destPath);

// copie streamée
// readStream.on('data', (chunk) => {
//   writeStream.write(chunk.toString('utf-8'));
// });

// read source.txt | write destination.txt
// readStream.pipe(writeStream);

// ReadStream : lecture (méthode read)
// WriteStream : écriture (méthode write)
// DuplexStream : lecture + écriture (méthodes read + write) -> Socket
// TransformStream : DuplexStream qui modifie le contenue entre le read et le write

// read source.txt | gzip | write destination.zip
readStream.pipe(createGzip()).pipe(writeStream);
