"use strict";
export default async function readConfig (name) {
    return new Promise((resolve)=>{
        console.log('(1) config from ' + name + ' loaded')
        resolve();
    });
}

