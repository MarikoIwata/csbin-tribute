/*
If anyone happens to see this... imo this is a silly solution
Totally unreadable – I'll refactor at some point
code is for humans!  
 */
const union = (arrs) => arrs.reduce((a, c) => [...new Set(a.concat(c))]);

module.exports = union;
