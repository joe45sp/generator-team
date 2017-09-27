const appService = require('./appService');

describe.only(`Azure App Service Slots (Windows) using Default queue`, function () {
   "use strict";
   var iterations = [{
      appType: `aspFull`,
      appName: `aspFullTest`,
      target: `paasslots`,
      context: `Azure App Service (Windows)`,
      suffix: ``,
      queue: `Default`,
      title: `Home Page - My .NET Framework Application`
   }, {
      appType: `node`,
      appName: `nodePaaSTest`,
      target: `paasslots`,
      context: `Azure App Service (Windows)`,
      suffix: ``,
      queue: `Default`,
      title: `Home Page - My Express Application`
   }, {
      appType: `asp`,
      appName: `aspPaaSTest`,
      target: `paasslots`,
      context: `Azure App Service (Windows)`,
      suffix: ``,
      queue: `Default`,
      title: `Home Page - My .NET Core Application`
   }, {
      appType: `java`,
      appName: `javaPaaSTest`,
      target: `paasslots`,
      context: `Azure App Service (Windows)`,
      groupId: `unitTest`,
      suffix: ``,
      queue: `Default`,
      title: `Home Page - My Spring Application`
   }];

   iterations.forEach(appService.runTests);
});