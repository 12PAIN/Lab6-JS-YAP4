"use strict";
export default async function readFile (path) {
    return new Promise((resolve) => {
        console.log('(4) Readme file from ' + path + ' loaded')
        resolve();
    });
}