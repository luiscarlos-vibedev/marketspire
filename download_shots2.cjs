const fs = require('fs');
const path = require('path');

const projects = [
  { name: "morgananutri", url: "https://morgananutri.com/" },
  { name: "anastasiaestetica", url: "https://anastasiaestetica.com.br/" },
  { name: "trafegosupremo", url: "https://trafegosupremo.com.br/" },
  { name: "tecudi", url: "https://tecudi.com/" },
  { name: "heliopsi", url: "http://heliopsi.com/" },
  { name: "modasglow", url: "http://modasglow.com/" },
  { name: "cursonailpro", url: "https://cursonailpro.com.br/" },
  { name: "zeusadvogados", url: "https://zeusadvogados.com.br/" },
  { name: "amoreljoias", url: "https://amoreljoias.com.br/" },
  { name: "lemonshopp", url: "https://lemonshopp.com/" },
  { name: "portaludi", url: "https://portaludi.com.br/" },
  { name: "kydelicia", url: "https://kydelicia.com.br/" },
];

const destDir = path.join(__dirname, 'public', 'portfolio');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

async function main() {
  for (const proj of projects) {
    const filePath = path.join(destDir, `${proj.name}.jpg`);
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
      console.log(`Pulo: ${proj.name} ja existe`);
      continue;
    }
    console.log(`Baixando: ${proj.name}...`);
    try {
      const response = await fetch(`https://image.thum.io/get/width/600/crop/800/${proj.url}`);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(filePath, buffer);
      console.log(`OK: ${proj.name}`);
    } catch (e) {
      console.error(`Erro: ${proj.name}`, e);
    }
  }
}

main();
