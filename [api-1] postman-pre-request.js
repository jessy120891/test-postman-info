/**
 * For parameter 'tid', please use current time, and 'cb' use the next day any time
 */

// Getting Today and nextDay Date
var today = new Date();
var nextDay = new Date();
nextDay.setDate(today.getDate() + 1);

//Setting variables to use in the params
pm.collectionVariables.set("tid", today.getTime());
pm.collectionVariables.set("cb", nextDay.getTime());
