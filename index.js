import { exec } from 'child_process';

// Função para executar o script e capturar o console.log
function runScript(scriptName) {
  return new Promise((resolve, reject) => {
    exec(`node ${scriptName}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Erro ao executar o script ${scriptName}: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`Erro no script ${scriptName}: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
}

// Função principal para exibir os resultados
async function main() {
  const scripts = ['01.js', '02.js', '03.js', '04.js', '05.js'];

  for (const script of scripts) {
    try {
      const output = await runScript(script);
      console.log(`Execício ${script}:`);
      console.log(output);
    } catch (error) {
      console.error(error);
    }
  }
}

main();