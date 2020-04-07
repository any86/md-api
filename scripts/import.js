const fs = require('fs');
const content = fs.readFileSync('../_api.json', 'utf8');
const json = JSON.parse(content);

const md = [];
const RN = '\r\n';
for (const {
        name,
        item
    } of json.item) {
    // 1. 栏目
    md.push(`# ${name}`);
    if (void 0 !== item) {
        // 2. 模块
        for (const row of item) {
            const {
                name:name2,
                item
            } = row;
            md.push(`## ${name2}`);

            // 3. 接口
            if (void 0 !== item) {
                for (const row of item) {
                    const {
                        name,
                        request
                    } = row

                    const {
                        method,
                        header,
                        body,
                        url,
                        description
                    } = request;
                    md.push(`### [${method}] ${name2}.${name}`);
                    md.push(`${url.raw}${RN}${RN}`);

                    if (void 0 !== description) {
                        md.push(description.replace(/##/g, '####'));
                    }
                }
            }
        }
    }
}

const mdString = md.join(RN);
fs.writeFileSync('api.md', mdString, 'utf8')
console.log(mdString)