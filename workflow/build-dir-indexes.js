const fs = require('fs');
const path = require('path');

fs.readdirSync(path.join(__dirname, '../build'))
.forEach((filename) => {
    const match = filename && filename.match && filename.match(/^(?!index|200)(.+)\.html/);
    if (!(match && match[1])) return;

    const dir = path.join(__dirname, '../build', match[1]);

    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    fs.copyFileSync(`${dir}.html`, `${dir}/index.html`);
});

