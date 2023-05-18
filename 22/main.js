"use strict";
async function importModule(path){
    let module = await import(path);
    return new Promise((resolve)=>{
        resolve(module.default);
    });
}

async function start(){

    
    await importModule('./readconfig.mjs').then((resolve)=>resolve('myConfig'));
    await importModule('./doquery.mjs').then((resolve)=>resolve('select * from cities'));
    await importModule('./httpget.mjs').then((resolve)=>resolve('http://google.com'));
    await importModule('./readfile.mjs').then((resolve)=>resolve('README.md'));
  
    console.log('It is done!'); 
    console.log('end');

} 

// Вызов функций
console.log('start');
start();