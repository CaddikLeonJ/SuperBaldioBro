// Super Baldio Bros — Scriptable launcher
// Fetch the latest GitHub game every launch and cache the full HTML.
// Scriptable > + > paste this script > Run. Presents the game fullscreen.
const fm=FileManager.local();
const saved=fm.joinPath(fm.documentsDirectory(),"SuperBaldioBro.html");
const base="https://raw.githubusercontent.com/CaddikLeonJ/SuperBaldioBro/main/";
const remote=base+"SuperBaldioBro.html?scriptable="+Date.now();
let html="",usingCache=false;
try{
 const request=new Request(remote);
 request.timeoutInterval=30;
 request.headers={"Cache-Control":"no-cache","Pragma":"no-cache"};
 const fresh=await request.loadString();
 if(!/<html[\s>]/i.test(fresh)||!fresh.includes("const VERSION="))
  throw new Error("Downloaded response is not the game HTML");
 html=fresh;
 fm.writeString(saved,html);
 console.log("Super Baldio Bros updated from GitHub");
}catch(error){
 if(!fm.fileExists(saved))throw new Error("Cannot download the game and no saved copy exists: "+error);
 html=fm.readString(saved);
 usingCache=true;
 console.warn("GitHub unavailable; using last saved game: "+error);
}
const version=html.match(/const VERSION='([^']+)'/)?.[1]||"unknown";
console.log("Launching Super Baldio Bros v"+version+(usingCache?" (cached)":""));
const view=new WebView();
await view.loadHTML(html,base);
await view.present(true);
Script.complete();
