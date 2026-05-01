const fs = require('fs');
const https = require('https');
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

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function downloadImage(name, urlStr) {
  const file = fs.createWriteStream(path.join(destDir, `${name}.jpg`));
  // Usamos Thum.io para capturar a tela confiavelmente (é gratuito e não bloqueia)
  const reqUrl = `https://image.thum.io/get/width/600/crop/800/${urlStr}`;
  
  return new Promise((resolve, reject) => {
    https.get(reqUrl, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(path.join(destDir, `${name}.jpg`), () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log("Iniciando downloads em paralelo...");
  const promises = projects.map(async (proj) => {
    try {
      await downloadImage(proj.name, proj.url);
      console.log(`✓ Concluido: ${proj.name}`);
    } catch (e) {
      console.error(`X Falhou: ${proj.name} - ${e.message}`);
    }
  });

  await Promise.all(promises);
  console.log("Todos os downloads foram concluídos!");
}

main();
