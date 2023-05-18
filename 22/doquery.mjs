"use strict";

export default async function doQuery (statement) {
    return new Promise((resolve)=>{
        console.log('(2) SQL query executed: ' + statement)
        resolve();
    });
}

