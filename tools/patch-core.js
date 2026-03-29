#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const unpackedDir = process.argv[2];

if (!unpackedDir) {
  throw new Error("Usage: patch-core.js <unpacked-core-dir>");
}

function replaceExact(fileName, search, replacement) {
  const filePath = path.join(unpackedDir, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const searchList = Array.isArray(search) ? search : [search];

  if (source.includes(replacement)) {
    return;
  }

  const matchedSearch = searchList.find((pattern) => source.includes(pattern));

  if (!matchedSearch) {
    throw new Error(`Pattern not found in ${fileName}`);
  }

  const updated = source.replace(matchedSearch, replacement);

  if (updated === source) {
    throw new Error(`No changes applied to ${fileName}`);
  }

  fs.writeFileSync(filePath, updated, "utf8");
}

replaceExact(
  "24e310797dc7d811d5ff42043f761381.js",
  'const e=require("tslib"),t=require("path"),i=require(\'./2b41a6d1152640457523a020ca26fbcd.js\'),r=require(\'./c868ec0e56dd4e2739e9ee16b53b70e9.js\'),o=require(\'./36bdd018ddae3596c5b9230a8f320bb2.js\'),l=require(\'./cd05aced5dc062793cd42e4547966595.js\'),s=require(\'./94a5361a05610eecf1bf4e28a6795c5e.js\'),a="http://127.0.0.1";',
  'const e=require("tslib"),t=require("path"),f=require("fs"),i=require(\'./2b41a6d1152640457523a020ca26fbcd.js\'),r=require(\'./c868ec0e56dd4e2739e9ee16b53b70e9.js\'),o=require(\'./36bdd018ddae3596c5b9230a8f320bb2.js\'),l=require(\'./cd05aced5dc062793cd42e4547966595.js\'),s=require(\'./94a5361a05610eecf1bf4e28a6795c5e.js\'),a="http://127.0.0.1";',
);

replaceExact(
  "24e310797dc7d811d5ff42043f761381.js",
  [
    'async start(){const e=l.default.CLI_ideHTTPPort||await(0,i.getAvailablePort)();this.logService.info(` start cli server, local port ${e}, cli client port ${l.default.cliRemotePort||"undefined"}`),this._clientPort=e,this._httpServer=await(0,s.startCliServer)(e);const r=await this.appService.getDataPath();return await this.fileService.writeFile(t.join(r,"Default/.cli"),""+(l.default.cliRemotePort||e),"utf8"),await this.fileService.writeFile(t.join(r,"Default/.ide"),""+e,"utf8"),await this.fileService.writeFile(t.join(r,"Default/.ide-status"),"On","utf8"),await this.tryToNotifyRemoteCliClient(e),this.ideSettingService.updateSetting("security",{port:e}),e}',
    'async start(){const e=l.default.CLI_ideHTTPPort||await(0,i.getAvailablePort)();this.logService.info(` start cli server, local port ${e}, cli client port ${l.default.cliRemotePort||"undefined"}`),this._clientPort=e,this._httpServer=await(0,s.startCliServer)(e);const r=await this.appService.getDataPath(),o=t.join(r,"Default");return f.mkdirSync(o,{recursive:!0}),f.writeFileSync(t.join(o,".cli"),""+(l.default.cliRemotePort||e),"utf8"),f.writeFileSync(t.join(o,".ide"),""+e,"utf8"),f.writeFileSync(t.join(o,".ide-status"),"On","utf8"),await this.tryToNotifyRemoteCliClient(e),this.ideSettingService.updateSetting("security",{port:e}),e}',
    'async start(){f.appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","cli.start before-port\\n"),this.logService.info("cli.start before-port");const e=l.default.CLI_ideHTTPPort||await(0,i.getAvailablePort)();f.appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log",`cli.start port=${e}\\n`),this.logService.info(` start cli server, local port ${e}, cli client port ${l.default.cliRemotePort||"undefined"}`),this._clientPort=e,f.appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","cli.start before-server\\n"),this.logService.info("cli.start before-server"),this._httpServer=await(0,s.startCliServer)(e),f.appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","cli.start after-server\\n"),this.logService.info("cli.start after-server");const r=await this.appService.getDataPath(),o=t.join(r,"Default");return f.appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log",`cli.start dataPath=${r}\\n`),this.logService.info(`cli.start dataPath ${r}`),f.mkdirSync(o,{recursive:!0}),f.writeFileSync(t.join(o,".cli"),""+(l.default.cliRemotePort||e),"utf8"),f.writeFileSync(t.join(o,".ide"),""+e,"utf8"),f.writeFileSync(t.join(o,".ide-status"),"On","utf8"),f.appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","cli.start wrote-files\\n"),this.logService.info("cli.start wrote-files"),await this.tryToNotifyRemoteCliClient(e),f.appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","cli.start notified\\n"),this.logService.info("cli.start notified"),this.ideSettingService.updateSetting("security",{port:e}),e}',
  ],
  'async start(){const e=l.default.CLI_ideHTTPPort||await(0,i.getAvailablePort)();this.logService.info(` start cli server, local port ${e}, cli client port ${l.default.cliRemotePort||"undefined"}`),this._clientPort=e,this._httpServer=await(0,s.startCliServer)(e);const r=await this.appService.getDataPath(),o=t.join(r,"Default");return f.mkdirSync(o,{recursive:!0}),f.writeFileSync(t.join(o,".cli"),""+(l.default.cliRemotePort||e),"utf8"),f.writeFileSync(t.join(o,".ide"),""+e,"utf8"),f.writeFileSync(t.join(o,".ide-status"),"On","utf8"),await this.tryToNotifyRemoteCliClient(e),this.ideSettingService.updateSetting("security",{port:e}),e}',
);

replaceExact(
  "24e310797dc7d811d5ff42043f761381.js",
  'async close(){return new Promise((e,i)=>{this._httpServer?this._httpServer.close(async r=>{if(r)return i(r);try{const e=await this.appService.getDataPath();await this.fileService.writeFile(t.join(e,"Default/.ide-status"),"Off","utf8"),this.ideSettingService.updateSetting("security",{port:void 0})}catch(e){this.logService.error("fail to write .ide-status file:",e)}return e(void 0)}):e(void 0)})}};',
  'async close(){return new Promise((e,i)=>{this._httpServer?this._httpServer.close(async r=>{if(r)return i(r);try{const e=await this.appService.getDataPath(),r=t.join(e,"Default");f.mkdirSync(r,{recursive:!0}),f.writeFileSync(t.join(r,".ide-status"),"Off","utf8"),this.ideSettingService.updateSetting("security",{port:void 0})}catch(e){this.logService.error("fail to write .ide-status file:",e)}return e(void 0)}):e(void 0)})}};',
);

replaceExact(
  "94a5361a05610eecf1bf4e28a6795c5e.js",
  [
    'exports.startCliServer=async function(c){const u=(()=>{const s=r();r.Router();return s.use((e,r,s)=>{e.setTimeout(18e5),r.setTimeout(18e5),s()}),s.use(e.json()),s})();return(0,t.registerV1Handlers)(u),(0,o.registerV2APIDefinitions)(u),((e,r)=>new Promise((t,o)=>{const c=(0,i.default)(s.ILogService);e.use((e,r,s,i)=>{let t;if(e instanceof Error&&e.code)t={code:e.code,message:""+e};else{const r=n.default.ERROR.GENERIC_ERROR(e);t={code:r.code,message:""+r}}s.status(500).json(t)});let u=!1;const l=e.listen(r,"127.0.0.1",()=>{c.info("cli server started at 127.0.0.1:"+r),u=!0,t(l)});l.on("error",e=>{c.error("cli server encounter error: "+e)}),l.on("close",()=>{c.info("cli server closing"),u||o()})}))(u,c)};',
    'exports.startCliServer=async function(c){require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log",`startCliServer enter port=${c}\\n`);const u=(()=>{const s=r();return require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer app-created\\n"),r.Router(),s.use((e,r,s)=>{e.setTimeout(18e5),r.setTimeout(18e5),s()}),s.use(e.json()),s})();return require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer before-routes\\n"),(0,t.registerV1Handlers)(u),(0,o.registerV2APIDefinitions)(u),require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer after-routes\\n"),((e,r)=>new Promise((t,o)=>{const c=(0,i.default)(s.ILogService);e.use((e,r,s,i)=>{let t;if(e instanceof Error&&e.code)t={code:e.code,message:""+e};else{const r=n.default.ERROR.GENERIC_ERROR(e);t={code:r.code,message:""+r}}s.status(500).json(t)});let u=!1;require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log",`startCliServer before-listen port=${r}\\n`);const l=e.listen(r,"127.0.0.1",()=>{require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log",`startCliServer listening port=${r}\\n`),c.info("cli server started at 127.0.0.1:"+r),u=!0,t(l)});l.on("error",e=>{try{require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer error "+e+"\\n")}catch(e){}c.error("cli server encounter error: "+e)}),l.on("close",()=>{try{require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer close\\n")}catch(e){}c.info("cli server closing"),u||o()})}))(u,c)};',
    'exports.startCliServer=async function(c){require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log",`startCliServer enter port=${c}\\n`);const u=(()=>{const s=r();return require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer app-created\\n"),r.Router(),s.use((e,r,s)=>{e.setTimeout(18e5),r.setTimeout(18e5),s()}),s.use(e.json()),s})();return require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer before-routes\\n"),(0,t.registerV1Handlers)(u),(0,o.registerV2APIDefinitions)(u),require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer after-routes\\n"),((e,r)=>new Promise((t,o)=>{const c=(0,i.default)(s.ILogService);e.use((e,r,s,i)=>{let t;if(e instanceof Error&&e.code)t={code:e.code,message:""+e};else{const r=n.default.ERROR.GENERIC_ERROR(e);t={code:r.code,message:""+r}}s.status(500).json(t)});let u=!1,l=!1;const a=e.listen(r,"127.0.0.1"),d=Date.now(),p=()=>{const e=require("net").createConnection({host:"127.0.0.1",port:r});e.once("connect",()=>{e.destroy(),l||(require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log",`startCliServer listening port=${r}\\n`),c.info("cli server started at 127.0.0.1:"+r),u=!0,l=!0,t(a))}),e.once("error",()=>{e.destroy(),l||Date.now()-d>5e3?l||o(new Error("cli server readiness timeout")):setTimeout(p,100)})};require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log",`startCliServer before-listen port=${r}\\n`),setTimeout(p,0),a.on("error",e=>{try{require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer error "+e+"\\n")}catch(e){}l=!0,c.error("cli server encounter error: "+e),o(e)}),a.on("close",()=>{try{require("fs").appendFileSync(require("os").tmpdir()+"/wx-cli-debug.log","startCliServer close\\n")}catch(e){}c.info("cli server closing"),u||l||(l=!0,o())})}))(u,c)};',
  ],
  'exports.startCliServer=async function(c){const u=(()=>{const s=r();r.Router();return s.use((e,r,s)=>{e.setTimeout(18e5),r.setTimeout(18e5),s()}),s.use(e.json()),s})();return(0,t.registerV1Handlers)(u),(0,o.registerV2APIDefinitions)(u),((e,r)=>new Promise((t,o)=>{const c=(0,i.default)(s.ILogService);e.use((e,r,s,i)=>{let t;if(e instanceof Error&&e.code)t={code:e.code,message:""+e};else{const r=n.default.ERROR.GENERIC_ERROR(e);t={code:r.code,message:""+r}}s.status(500).json(t)});let u=!1,l=!1;const a=e.listen(r,"127.0.0.1",()=>{l||(c.info("cli server started at 127.0.0.1:"+r),u=!0,l=!0,t(a))});a.on("error",e=>{l||(l=!0,c.error("cli server encounter error: "+e),o(e))}),a.on("close",()=>{c.info("cli server closing"),u||l||(l=!0,o())})}))(u,c)};',
);

replaceExact(
  "0b2a0c11041ee7c2802fe52377148cdd.js",
  'const i=require("tslib"),e=require("lodash"),n=require(\'./36bdd018ddae3596c5b9230a8f320bb2.js\'),t=require(\'./659e736630a0f6f2c6888c09786072db.js\'),s=require(\'./2b41a6d1152640457523a020ca26fbcd.js\'),o=require(\'./32b32b270986293ca4178fa0dfd26ce7.js\');let d=class extends t.default{',
  'const i=require("tslib"),e=require("lodash"),r=require("events"),n=require(\'./36bdd018ddae3596c5b9230a8f320bb2.js\'),t=require(\'./659e736630a0f6f2c6888c09786072db.js\'),s=require(\'./2b41a6d1152640457523a020ca26fbcd.js\'),o=require(\'./32b32b270986293ca4178fa0dfd26ce7.js\');const a=i=>{if(!i||"function"==typeof i.on)return i;const e=new r.EventEmitter;let n;const t={on:(t,r)=>(e.on(t,r),n),once:(t,r)=>(e.once(t,r),n),removeListener:(t,r)=>(e.removeListener(t,r),n),removeAllListeners:(...t)=>(e.removeAllListeners(...t),n),emit:(...t)=>e.emit(...t)},s={focus:"focus",show:"show",hide:"hide",minimize:"minimize",close:"close"};return n=new Proxy(i,{get:(r,o)=>{if(o in t)return t[o];if("symbol"==typeof o)return r[o];const n=r[o];if("function"!=typeof n)return n;if(o in s)return(...t)=>{if("close"===o){const i={defaultPrevented:!1,preventDefault(){this.defaultPrevented=!0}};if(!t[0]){e.emit("close",i);if(i.defaultPrevented)return!1}const n=r[o].apply(r,t);return setTimeout(()=>{e.emit("closed")},0),n}const i=n.apply(r,t);return setTimeout(()=>{e.emit(s[o])},0),i};return n.bind(r)},set:(e,n,t)=>(e[n]=t,!0)}),n};let d=class extends t.default{',
);

replaceExact(
  "0b2a0c11041ee7c2802fe52377148cdd.js",
  'const d=await this.openRealWindow(i,e,n);if(this._winIdMap.set(t,{instance:d}),d.on(o.EWindowEvent.closed,()=>{var i;d.removeAllListeners();const e=this._childWins.get(t)||[];for(const i of e){const e=this.getWindowInstanceById(i);null==e||e.close()}this._onWindowClosed.fire(t),this._childWins.delete(t);const n=this._winIdMap.get(t);null===(i=null==n?void 0:n.resizeEmitter)||void 0===i||i.dispose(),this._winIdMap.delete(t)}),d.on(o.EWindowEvent.close,i=>{null==i||i.preventDefault(),this._onWindowClose.fire(t)}),d.on(o.EWindowEvent.focus,()=>{this._onWindowFocus.fire(t)}),d.on(o.EWindowEvent.hide,()=>{this._onWindowHide.fire(t)}),d.on(o.EWindowEvent.show,()=>{this._onWindowShow.fire(t)}),d.on(o.EWindowEvent.minimize,()=>{this._onWindowMinimize.fire(t)}),n.parentid){',
  'const d=a(await this.openRealWindow(i,e,n));if(this._winIdMap.set(t,{instance:d}),d.on(o.EWindowEvent.closed,()=>{var i;d.removeAllListeners();const e=this._childWins.get(t)||[];for(const i of e){const e=this.getWindowInstanceById(i);null==e||e.close()}this._onWindowClosed.fire(t),this._childWins.delete(t);const n=this._winIdMap.get(t);null===(i=null==n?void 0:n.resizeEmitter)||void 0===i||i.dispose(),this._winIdMap.delete(t)}),d.on(o.EWindowEvent.close,i=>{null==i||i.preventDefault(),this._onWindowClose.fire(t)}),d.on(o.EWindowEvent.focus,()=>{this._onWindowFocus.fire(t)}),d.on(o.EWindowEvent.hide,()=>{this._onWindowHide.fire(t)}),d.on(o.EWindowEvent.show,()=>{this._onWindowShow.fire(t)}),d.on(o.EWindowEvent.minimize,()=>{this._onWindowMinimize.fire(t)}),n.parentid){',
);

replaceExact(
  "526e6a29f4f1f72e39cf9464b34abd84.js",
  [
    'if(this.initRequestService(this.props),this.ensureRemoveFackBackground(),this.haveOpenApp=!0,this.props.hasLogin&&this.enableLogNetworkTransport(this.props),this.setTheme(),this.checkWindowStatus(this.props),this.updateProxy(this.props.proxyType),!this.props.enableServicePort&&D.default.CLI_enableServicePort){(0,A.default)(j.IIDESettingService).updateSetting("security",{enableServicePort:!0})}this.toggleServicePort(this.props.enableServicePort),D.default.isDevWindow&&(',
    'if(this.initRequestService(this.props),this.ensureRemoveFackBackground(),this.haveOpenApp=!0,this.props.hasLogin&&this.enableLogNetworkTransport(this.props),this.setTheme(),this.checkWindowStatus(this.props),this.updateProxy(this.props.proxyType),!this.props.enableServicePort&&D.default.CLI_enableServicePort){(0,A.default)(j.IIDESettingService).updateSetting("security",{enableServicePort:!0})}this.toggleServicePort(this.props.enableServicePort||D.default.CLI_enableServicePort),D.default.isDevWindow&&(',
    'if(this.initRequestService(this.props),this.ensureRemoveFackBackground(),this.haveOpenApp=!0,this.props.hasLogin&&this.enableLogNetworkTransport(this.props),this.setTheme(),this.checkWindowStatus(this.props),this.updateProxy(this.props.proxyType),function(){try{t.appendFileSync(i.tmpdir()+"/wx-cli-debug.log",`componentDidMount enableServicePort=${this.props.enableServicePort} cliEnable=${D.default.CLI_enableServicePort} startedByCLI=${D.default.startedByCLI}\\n`)}catch(e){}}.call(this),!this.props.enableServicePort&&D.default.CLI_enableServicePort){(0,A.default)(j.IIDESettingService).updateSetting("security",{enableServicePort:!0})}this.toggleServicePort(this.props.enableServicePort||D.default.CLI_enableServicePort),D.default.isDevWindow&&(',
  ],
  'if(this.initRequestService(this.props),this.ensureRemoveFackBackground(),this.haveOpenApp=!0,this.props.hasLogin&&this.enableLogNetworkTransport(this.props),this.setTheme(),this.checkWindowStatus(this.props),this.updateProxy(this.props.proxyType),!this.props.enableServicePort&&D.default.CLI_enableServicePort){(0,A.default)(j.IIDESettingService).updateSetting("security",{enableServicePort:!0})}this.toggleServicePort(this.props.enableServicePort||D.default.CLI_enableServicePort),D.default.isDevWindow&&(',
);

replaceExact(
  "526e6a29f4f1f72e39cf9464b34abd84.js",
  [
    'this.updateProxy=(0,r.debounce)(async e=>{try{const t=(0,A.default)(C.IProxyService);await t.updateProxy(e),z.loop()}catch(t){x.error(`proxy updateProxy ${e} catch error ${t} try to set DIRECT instead`),this.props.infoActions.showConfirmPopup({id:"UPDATE_PROXY_ERROR",title:`${v.config.SET_PROXY_ERROR_MSG}:${t}`,showCancel:!1,enableSelected:!1}),this.props.settingsActions.setProxySetting({proxyType:"DIRECT"})}},600),this.startCli=async()=>{try{const e=(0,A.default)(j.ICLIService);await e.start()}catch(e){x.error("start cli server error: "+e)}},this.closeCli=async()=>{(0,A.default)(j.ICLIService).close()},',
    'this.updateProxy=(0,r.debounce)(async e=>{try{const t=(0,A.default)(C.IProxyService);await t.updateProxy(e),z.loop()}catch(t){x.error(`proxy updateProxy ${e} catch error ${t} try to set DIRECT instead`),this.props.infoActions.showConfirmPopup({id:"UPDATE_PROXY_ERROR",title:`${v.config.SET_PROXY_ERROR_MSG}:${t}`,showCancel:!1,enableSelected:!1}),this.props.settingsActions.setProxySetting({proxyType:"DIRECT"})}},600),this.startCli=async()=>{try{t.appendFileSync(i.tmpdir()+"/wx-cli-debug.log","startCli enter\\n"),await(0,A.default)(j.ICLIService).start(),t.appendFileSync(i.tmpdir()+"/wx-cli-debug.log","startCli ok\\n")}catch(e){x.error("start cli server error: "+e);try{t.appendFileSync(i.tmpdir()+"/wx-cli-debug.log","startCli error "+(e&&e.stack?e.stack:e)+"\\n")}catch(e){}}},this.closeCli=async()=>{(0,A.default)(j.ICLIService).close()},',
  ],
  'this.updateProxy=(0,r.debounce)(async e=>{try{const t=(0,A.default)(C.IProxyService);await t.updateProxy(e),z.loop()}catch(t){x.error(`proxy updateProxy ${e} catch error ${t} try to set DIRECT instead`),this.props.infoActions.showConfirmPopup({id:"UPDATE_PROXY_ERROR",title:`${v.config.SET_PROXY_ERROR_MSG}:${t}`,showCancel:!1,enableSelected:!1}),this.props.settingsActions.setProxySetting({proxyType:"DIRECT"})}},600),this.startCli=async()=>{try{const e=(0,A.default)(j.ICLIService);await e.start()}catch(e){x.error("start cli server error: "+e)}},this.closeCli=async()=>{(0,A.default)(j.ICLIService).close()},',
);

replaceExact(
  "526e6a29f4f1f72e39cf9464b34abd84.js",
  [
    'this.closeCli=async()=>{(0,A.default)(j.ICLIService).close()},this.toggleServicePort=async e=>{e?(await this.closeCli(),d.default.ready("fullRender",()=>this.startCli())):this.closeCli()},this.showAutoPortTips=e=>{',
    'this.closeCli=async()=>{(0,A.default)(j.ICLIService).close()},this.toggleServicePort=async e=>{if(!e)return void this.closeCli();await this.closeCli(),D.default.startedByCLI||D.default.CLI_enableServicePort?this.startCli():d.default.ready("fullRender",()=>this.startCli())},this.showAutoPortTips=e=>{',
    'this.closeCli=async()=>{(0,A.default)(j.ICLIService).close()},this.toggleServicePort=async e=>{try{t.appendFileSync(i.tmpdir()+"/wx-cli-debug.log",`toggleServicePort value=${e} startedByCLI=${D.default.startedByCLI} cliEnable=${D.default.CLI_enableServicePort}\\n`)}catch(e){}if(!e)return void this.closeCli();await this.closeCli(),D.default.startedByCLI||D.default.CLI_enableServicePort?this.startCli():d.default.ready("fullRender",()=>this.startCli())},this.showAutoPortTips=e=>{',
  ],
  'this.closeCli=async()=>{(0,A.default)(j.ICLIService).close()},this.toggleServicePort=async e=>{if(!e)return void this.closeCli();await this.closeCli(),D.default.startedByCLI||D.default.CLI_enableServicePort?this.startCli():d.default.ready("fullRender",()=>this.startCli())},this.showAutoPortTips=e=>{',
);
