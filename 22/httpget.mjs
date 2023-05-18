"use strict";
export default async function httpGet (url) {
    return new Promise((resolve) => {
        console.log('(3) Page retrieved: ' + url)
        resolve();
    });
}
