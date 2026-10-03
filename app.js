"use strict";
const en={
skip:"Skip to main content",navExperience:"Experience",navFeatures:"Product scope",navTeam:"Team",navRoadmap:"Roadmap",menu:"Menu",tryDemo:"Explore demo",heroEyebrow:"A classroom understanding companion",heroLine1:"Follow the lecture.",heroLine2:"Keep the questions.",heroDescription:"Speech, subtitles and slides in one context. ClassFormer helps you follow a foreign-language class and return to the moment you missed.",exploreExperience:"Explore the classroom",learnProject:"About the project",projectStage:"Software Engineering course project · Proposal & requirements",lectureSample:"Illustrative lecture segment",sampleSlideTitle:"Make requirements verifiable",heroTranslation:"A requirement should describe an observable outcome.",slideLinked:"Linked slide · Page 2",heroQuestion:"Missed the meaning?",heroQuestionHint:"Bookmark the moment. Return after class.",visualLabel:"Concept illustration · Not live recognition",problemTitle:"Hearing isn't always understanding.",problem1Title:"One missed sentence, lost context",problem1Text:"Keep listening or stop to look it up? Either choice can leave a gap.",problem2Title:"Unfamiliar terms, disconnected slides",problem2Text:"You hear an explanation, but cannot place it on the slide.",problem3Title:"A question without a way back",problem3Text:"You remember being confused, but not when or where.",experienceTitle:"From hearing to understanding.",experienceIntro:"Play the English lecture, follow English slides and Chinese subtitles, then bookmark a question or find a segment to listen again. This is a concept demo with prepared content.",demoCourse:"Software Engineering · Requirements & acceptance",demoStatus:"English-taught class · Synchronized audio & subtitles",audioLabel:"Sample lecture audio",audioError:"Audio could not play. Please try the audio controls or reload the page.",reset:"Reset",play:"Play demo",pause:"Pause",replay:"Replay",courseware:"Courseware",autoLinked:"Auto-linked",manualPage:"Manual selection",restoreAuto:"Restore auto",coursewareHint:"Prepared segments drive the sample page links. Manual selection is available.",transcript:"English original & Chinese translation",showOriginal:"Show original",markQuestion:"Mark a question",searchLabel:"Search the sample classroom record",exportSample:"Export sample text",questionCount:"questions",emptyQuestions:"Bookmark a question to return to its segment here.",demoDisclaimer:"Sample audio was extracted from a supplied recording. Subtitles and slides follow prepared timestamps. Speech recognition, live translation and slide matching are not connected.",featuresTitle:"Connect the whole class.",featuresIntro:"The first release connects listening, understanding, locating and reviewing. Inputs are the teacher's slides and computer microphone audio.",coreScope:"Confirmed first release",futureScope:"Future directions",feature1Title:"Live bilingual subtitles",feature1Text:"Translate English into Chinese and retain spoken Chinese, showing original and translated text through mixed-language lectures.",feature2Title:"Automatic slide association",feature2Text:"Identify the relevant page from the lecture, with manual page selection to correct the association.",feature3Title:"Manual question bookmarks",feature3Text:"Mark a confusing moment with an optional note. Return to the related speech, subtitles and slide after class.",feature4Title:"Records, search & review",feature4Text:"Save full-class audio and text, or text only. Find passages with keywords and export the record.",futureLabel:"These are future directions, not first-release commitments.",future1Title:"Classroom Q&A with sources",future1Text:"Ask about class material and locate the lecture or slide supporting the answer.",future2Title:"Summaries & natural-language search",future2Text:"Organize key points and find a passage using your own description.",future3Title:"More classrooms and inputs",future3Text:"Explore bilingual and Chinese classes, plus additional inputs such as shared screens.",scopeFootTitle:"Current boundaries",scopeFootText:"Translated speech playback is not required. PDF and PPT are target courseware types; specific versions, export formats, platform and model services remain undecided.",projectTitle:"Understanding you can trace.",projectIntro:"ClassFormer is a Software Engineering course project at Macau University of Science and Technology. We connect real classroom needs with automatic processing, clear feature ownership and verifiable outcomes.",projectNameLabel:"Product",teamNameLabel:"Team",phaseLabel:"Current phase",phaseValue:"Proposal & requirements",evidenceLabel:"Evaluation focus",evidenceValue:"Subtitle latency, slide links, question retrieval",projectHonesty:"This is a project concept and interaction demonstration. Product features are not yet implemented; acceptance thresholds and real-classroom results are still to be established.",teamTitle:"Three people. One classroom journey.",teamIntro:"We collaborate around user-facing features. Every member participates in requirements, design, implementation, testing and documentation.",leader:"Team leader",member:"Team member",nameZhang:"Zhang Boyi",nameSong:"Song Zheming",nameJiang:"Jiang Junhan",zhangRole:"Audio capture, live subtitles, translation and model-related work; the project website.",songRole:"Courseware association and related algorithms; question-processing responsibilities require further coordination.",jiangRole:"Question bookmarks, search and review; future classroom Q&A and source presentation.",zhangFocus:"VOICE & TRANSLATION",songFocus:"COURSEWARE & CONTEXT",jiangFocus:"QUESTIONS & RECALL",teamFootnote:"Record storage/export ownership and question-processing interfaces still need clarification.",roadmapTitle:"From classroom needs to a usable prototype.",roadmapIntro:"A proposed four-week path from the project knowledge base. Deliverables are planned goals; exact dates and implementation milestones remain open.",week1Title:"Materials & research",week1Text:"Prepare lecture recordings, try candidate speech models and identify terminology, noise and long-sentence challenges.",week1Output:"Output: audio samples & research notes",week2Title:"Subtitles & translation",week2Text:"Compare recognition and translation approaches, connect continuously updated bilingual subtitles and retain evaluation evidence.",week2Output:"Output: bilingual subtitle prototype",week3Title:"Slide links & review",week3Text:"Connect slides, subtitles and question timestamps. Evaluate automatic association and manual correction.",week3Output:"Output: association & review prototype",week4Title:"Integration & evaluation",week4Text:"Add keyword search and export, integrate the core journey and record sample tests and peer feedback.",week4Output:"Output: core prototype & evaluation records",task1:"Project proposal",task2:"User requirements specification",datesNote:"These are course-document deadlines, with exact submission times to be confirmed. Software implementation has a separate schedule.",closingTitle:"Give the sentence you missed<br>a second chance to make sense.",returnDemo:"Return to the classroom demo",footerText:"Macau University of Science and Technology · Software Engineering",footerStage:"About the project & its stage",questionDialogTitle:"Bookmark this question",questionNoteLabel:"Note (optional)",cancel:"Cancel",saveQuestion:"Save bookmark",remove:"Remove",noteSaved:"Question bookmarked. You can return to this segment.",returned:"Returned to the selected segment.",exported:"Sample text exported. This is not a real classroom record.",manualNotice:"Manual page selection. Restore auto to follow the sample.",noResults:"No matching sample segments. Try requirement, acceptance or 测试.",noNote:"Question without a note",searchCount:"matching segments",endNotice:"Demo complete. You can replay it or explore your bookmarks."
};
const zh={};document.querySelectorAll("[data-i18n]").forEach(el=>{zh[el.dataset.i18n]=el.innerHTML});
Object.assign(zh,{audioError:"音频暂时无法播放，请尝试音频控件或刷新页面。",pause:"暂停演示",replay:"重新播放",manualPage:"手动选择",remove:"移除",noteSaved:"疑问已标记，可从记录中回到这个片段。",returned:"已回到所选课堂片段。",exported:"示例文字已导出；这不是实际课堂记录。",manualNotice:"已手动选择课件页，可恢复自动关联。",noResults:"没有匹配的示例片段，可尝试 requirement、验收、测试。",noNote:"未附说明的疑问",searchCount:"个匹配片段",endNotice:"演示结束，可以重新播放或查看疑问标记。"});
let lang="en";try{lang=localStorage.getItem("classformer-site-language")==="zh"?"zh":"en"}catch{}
const $=id=>document.getElementById(id),t=key=>(lang==="en"?en:zh)[key]||key;
const slides=[
{titleZh:"需求：描述用户要完成的事情",titleEn:"Requirements describe user goals",textZh:"先明确谁在什么情境下需要什么结果。",textEn:"Start with who needs what outcome, and in which context.",tags:["User","Context","Outcome"]},
{titleZh:"验收：让结果可以被观察",titleEn:"Acceptance makes outcomes observable",textZh:"为每项需求定义可检查的结果与边界。",textEn:"Define an observable outcome and its boundaries for each requirement.",tags:["Criterion","Boundary","Evidence"]},
{titleZh:"验证：用证据检查承诺",titleEn:"Verification checks the promise",textZh:"记录预期、实际结果与仍未覆盖的条件。",textEn:"Record expectations, actual results and uncovered conditions.",tags:["Expected","Actual","Limitations"]}
];
const segments=[
{start:0,time:"00:00",original:"A requirement describes what the user needs to achieve.",translation:"需求描述用户需要完成什么事情。",page:0},
{start:3.6,time:"00:03",original:"First, define the user’s context. Then discuss the specific features.",translation:"先明确用户场景，再讨论具体功能。",page:0},
{start:8.21,time:"00:08",original:"A requirement should describe an observable outcome.",translation:"需求应该描述一个可观察的结果。",page:1},
{start:11.44,time:"00:11",original:"Acceptance criteria must be clear enough to check.",translation:"验收标准必须足够清晰，以便检查。",page:1},
{start:14.75,time:"00:14",original:"A successful test needs evidence, not only a completion message.",translation:"成功的测试需要证据，不能只有完成提示。",page:2},
{start:18.91,time:"00:18",original:"Record the actual test results, and explain which conditions have not been covered.",translation:"记录实际测试结果，并说明还没有覆盖哪些条件。",page:2}
];
const audio=$("demo-audio"),hasAudio=Boolean(audio.getAttribute("src")||audio.querySelector("source[src]"));
audio.parentElement.hidden=!hasAudio;
let current=0,page=0,manual=false,previewPlaying=false,timer=null,notes=[],pendingSegment=0,toastTimer=null;
function formatTime(seconds){const value=Math.max(0,Math.floor(seconds||0));return String(Math.floor(value/60)).padStart(2,"0")+":"+String(value%60).padStart(2,"0")}
function notify(key){$("toast").textContent=t(key);$("toast").hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{$("toast").hidden=true},3500)}
function applyLanguage(){
 document.documentElement.lang=lang==="en"?"en":"zh-CN";
 document.querySelectorAll("[data-i18n]").forEach(el=>{el.innerHTML=t(el.dataset.i18n)});
 document.querySelectorAll("[data-placeholder-zh]").forEach(el=>{el.placeholder=lang==="en"?el.dataset.placeholderEn:el.dataset.placeholderZh});
 $("language-toggle").innerHTML=lang==="en"?'中<span aria-hidden="true"> / EN</span>':'EN<span aria-hidden="true"> / 中</span>';
 $("language-toggle").setAttribute("aria-label",lang==="en"?"切换为中文":"Switch to English");
 $("page-prev").setAttribute("aria-label",lang==="en"?"Previous slide":"上一页");$("page-next").setAttribute("aria-label",lang==="en"?"Next slide":"下一页");
 $("search-clear").setAttribute("aria-label",lang==="en"?"Clear search":"清除搜索");
 audio.setAttribute("aria-label",t("audioLabel"));
 $("close-question").setAttribute("aria-label",lang==="en"?"Close":"关闭");
 document.title=lang==="en"?"ClassFormer — Follow the lecture. Keep the questions.":"ClassFormer — 听懂课堂，接住疑问";
 const ariaLabels=[[".desktop-nav","Main navigation","主要导航"],["#mobile-nav","Mobile navigation","移动导航"],[".courseware-panel","Courseware sample","课件示意"],[".transcript-panel","Bilingual subtitle sample","双语字幕示意"],[".scope-switch","Product scope","产品范围"]];
 ariaLabels.forEach(([selector,english,chinese])=>document.querySelector(selector).setAttribute("aria-label",lang==="en"?english:chinese));
 if(lang==="en")document.querySelector('[data-i18n="heroTranslation"]').textContent="需求应该描述一个可观察的结果。";
 render();
}
function renderSlide(){
 const s=slides[page],panel=$("demo-slide");panel.replaceChildren();
 const kicker=document.createElement("p");kicker.className="slide-kicker";kicker.textContent="SOFTWARE ENGINEERING / "+String(page+1).padStart(2,"0");
 const title=document.createElement("h3");title.textContent=s.titleEn;title.lang="en";
 const body=document.createElement("p");body.textContent=s.textEn;body.lang="en";
 const tags=document.createElement("div");tags.className="slide-bottom";s.tags.forEach(tag=>{const el=document.createElement("span");el.textContent=tag;tags.append(el)});
 panel.append(kicker,title,body,tags);$("page-label").textContent=String(page+1).padStart(2,"0")+" / 03";$("page-mode").textContent=t(manual?"manualPage":"autoLinked");$("auto-page").disabled=!manual;
 $("page-prev").disabled=page===0;$("page-next").disabled=page===slides.length-1;
}
function renderTranscript(){
 const box=$("transcript-list");box.replaceChildren();
 segments.slice(0,current+1).forEach((s,i)=>{
 const row=document.createElement("div");row.className="transcript-segment"+(i===current?" active":"");row.dataset.segment=i;
 const time=document.createElement("span");time.className="segment-time";time.textContent=s.time;
 const text=document.createElement("div");
 const original=document.createElement("p");original.className="segment-original";original.textContent=s.original;original.lang="en";original.hidden=!$("original-toggle").checked;
 const translation=document.createElement("p");translation.className="segment-translation";translation.textContent=s.translation;translation.lang="zh-CN";text.append(original,translation);row.append(time,text);
 if(notes.some(n=>n.segment===i)){const marker=document.createElement("span");marker.className="segment-marker";marker.textContent="?";row.append(marker)}
 box.append(row);
 });
 const active=box.lastElementChild;if(active)box.scrollTop=Math.max(0,active.offsetTop-box.offsetTop-box.clientHeight+active.offsetHeight+15);
 $("demo-clock").textContent=hasAudio?formatTime(audio.currentTime):segments[current].time;
}
function renderNotes(){
 const box=$("question-list");box.replaceChildren();$("note-count").textContent=notes.length;document.querySelector('[data-i18n="questionCount"]').textContent=lang==="en"&&notes.length===1?"question":t("questionCount");
 if(!notes.length){const p=document.createElement("p");p.className="empty-note";p.textContent=t("emptyQuestions");box.append(p);return}
 notes.forEach(note=>{
 const row=document.createElement("div");row.className="question-item";
 const jump=document.createElement("button");jump.type="button";jump.className="question-jump";
 const timestamp=document.createElement("span");timestamp.className="mono";timestamp.textContent=segments[note.segment].time;
 const label=document.createElement("span");label.className="question-text";label.textContent=note.text||t("noNote");jump.append(timestamp,label);
 jump.addEventListener("click",()=>{jumpTo(note.segment);notify("returned")});
 const remove=document.createElement("button");remove.type="button";remove.className="remove-question";remove.textContent=t("remove");remove.setAttribute("aria-label",(lang==="en"?"Remove question at ":"移除疑问 ")+segments[note.segment].time);
 remove.addEventListener("click",()=>{notes=notes.filter(n=>n.id!==note.id);renderNotes();renderTranscript()});row.append(jump,remove);box.append(row);
 });
}
function highlight(el,text,query){
 const index=text.toLocaleLowerCase().indexOf(query.toLocaleLowerCase());
 if(index<0){el.textContent=text;return}
 el.append(document.createTextNode(text.slice(0,index)));const mark=document.createElement("mark");mark.textContent=text.slice(index,index+query.length);el.append(mark,document.createTextNode(text.slice(index+query.length)));
}
function renderSearch(){
 const query=$("demo-search").value.trim(),box=$("search-results");box.replaceChildren();box.hidden=!query;$("search-clear").hidden=!query;if(!query)return;
 const hits=segments.map((s,i)=>({s,i})).filter(({s})=>(s.original+" "+s.translation).toLocaleLowerCase().includes(query.toLocaleLowerCase()));
 const summary=document.createElement("p");summary.className="search-empty";summary.textContent=hits.length?hits.length+" "+t("searchCount"):t("noResults");box.append(summary);
 hits.forEach(({s,i})=>{const btn=document.createElement("button");btn.type="button";btn.className="search-result";const meta=document.createElement("span");meta.textContent=s.time+" · "+(lang==="en"?"Slide ":"课件 ")+(s.page+1);btn.append(meta);const text=document.createElement("div");highlight(text,s.translation.toLocaleLowerCase().includes(query.toLocaleLowerCase())?s.translation:s.original,query);btn.append(text);btn.addEventListener("click",()=>{jumpTo(i);notify("returned")});box.append(btn)});
}
function updatePlay(){const playing=hasAudio?!audio.paused:previewPlaying,ended=hasAudio?audio.ended:current===segments.length-1;const key=playing?"pause":ended?"replay":"play";$("demo-play").textContent=t(key);$("demo-play").setAttribute("aria-pressed",String(playing))}
function render(){renderSlide();renderTranscript();renderNotes();renderSearch();updatePlay()}
function stop(){clearInterval(timer);timer=null;previewPlaying=false;audio.pause();updatePlay()}
function syncAudio(){
 if(!hasAudio)return;
 const next=segments.reduce((active,segment,i)=>audio.currentTime>=segment.start?i:active,0);
 if(next!==current){current=next;if(!manual)page=segments[current].page;renderSlide();renderTranscript()}
 $("demo-clock").textContent=hasAudio?formatTime(audio.currentTime):segments[current].time;
 updatePlay();
}
async function playAudio(){try{await audio.play()}catch{notify("audioError");updatePlay()}}
function jumpTo(i){stop();if(hasAudio)audio.currentTime=segments[i].start;current=i;manual=false;page=segments[i].page;render();if(hasAudio)playAudio();$("transcript-list").scrollIntoView({block:"nearest",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}
["timeupdate","seeking","seeked","loadedmetadata"].forEach(event=>audio.addEventListener(event,syncAudio));
["play","pause"].forEach(event=>audio.addEventListener(event,updatePlay));
audio.addEventListener("ended",()=>{syncAudio();notify("endNotice")});
audio.addEventListener("error",()=>{stop();notify("audioError")});
$("demo-play").addEventListener("click",()=>{
 if(hasAudio){if(!audio.paused){stop();return}if(audio.ended){audio.currentTime=0;current=0;manual=false;page=0;render()}playAudio();return}
 if(previewPlaying){stop();return}
 if(current===segments.length-1){current=0;manual=false;page=0}
 previewPlaying=true;render();timer=setInterval(()=>{if(current<segments.length-1){current++;if(!manual)page=segments[current].page;render()}if(current===segments.length-1){stop();notify("endNotice")}},6500);
});
$("demo-reset").addEventListener("click",()=>{stop();audio.currentTime=0;current=0;page=0;manual=false;notes=[];$("demo-search").value="";$("original-toggle").checked=true;render()});
$("page-prev").addEventListener("click",()=>{if(page>0){page--;manual=true;renderSlide();notify("manualNotice")}});
$("page-next").addEventListener("click",()=>{if(page<slides.length-1){page++;manual=true;renderSlide();notify("manualNotice")}});
$("auto-page").addEventListener("click",()=>{manual=false;page=segments[current].page;renderSlide()});
$("original-toggle").addEventListener("change",renderTranscript);
$("mark-question").addEventListener("click",()=>{stop();syncAudio();pendingSegment=current;$("question-context").textContent=segments[current].time+" · "+segments[current].translation;$("question-text").value="";$("question-dialog").showModal();$("question-text").focus()});
function closeQuestion(){$("question-dialog").close();$("mark-question").focus()}
$("close-question").addEventListener("click",closeQuestion);$("cancel-question").addEventListener("click",closeQuestion);
$("question-dialog").addEventListener("click",e=>{if(e.target===$("question-dialog")){const r=$("question-dialog").getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeQuestion()}});
$("question-form").addEventListener("submit",e=>{e.preventDefault();notes.push({id:Date.now()+"-"+notes.length,segment:pendingSegment,text:$("question-text").value.trim()});closeQuestion();renderNotes();renderTranscript();notify("noteSaved")});
$("demo-search").addEventListener("input",renderSearch);
$("search-clear").addEventListener("click",()=>{$("demo-search").value="";renderSearch();$("demo-search").focus()});
$("export-demo").addEventListener("click",()=>{const lines=["ClassFormer — SAMPLE / 示例课堂记录","Prepared concept demonstration; not an actual classroom recording.","预设交互概念演示，不是实际课堂记录。","",...segments.flatMap(s=>["["+s.time+"] Slide "+(s.page+1),s.original,s.translation,""]),"Questions / 疑问",...notes.map(n=>"["+segments[n.segment].time+"] "+(n.text||t("noNote")))];const blob=new Blob(["\uFEFF"+lines.join("\n")],{type:"text/plain;charset=utf-8"}),a=document.createElement("a"),url=URL.createObjectURL(blob);a.href=url;a.download="ClassFormer-sample-classroom-record.txt";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify("exported")});
$("language-toggle").addEventListener("click",()=>{lang=lang==="zh"?"en":"zh";try{localStorage.setItem("classformer-site-language",lang)}catch{}applyLanguage()});
const menu=$("menu-toggle");menu.addEventListener("click",()=>{const expanded=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!expanded));$("mobile-nav").hidden=expanded});
$("mobile-nav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{$("mobile-nav").hidden=true;menu.setAttribute("aria-expanded","false")}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("mobile-nav").hidden){$("mobile-nav").hidden=true;menu.setAttribute("aria-expanded","false");menu.focus()}});
document.querySelectorAll("[data-scope]").forEach(button=>{
function selectScope(){document.querySelectorAll("[data-scope]").forEach(b=>{const selected=b===button;b.setAttribute("aria-selected",String(selected));b.tabIndex=selected?0:-1;$("scope-"+b.dataset.scope).hidden=!selected})}
button.addEventListener("click",selectScope);
button.addEventListener("keydown",e=>{if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){e.preventDefault();const next=e.key==="Home"?$("scope-core-tab"):e.key==="End"?$("scope-future-tab"):button.dataset.scope==="core"?$("scope-future-tab"):$("scope-core-tab");next.click();next.focus()}});
});
document.addEventListener("visibilitychange",()=>{if(document.hidden&&(previewPlaying||!audio.paused))stop()});
applyLanguage();
