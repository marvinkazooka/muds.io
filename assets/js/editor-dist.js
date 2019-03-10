"use strict";!function(){function t(t){var e=document.createElement("span");e.classList.add("muds-separator"),t.menu.appendChild(e)}function e(t){var e=document.createElement("button");e.classList.add("muds-item","fullscreen"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>',e.setAttribute("onclick","muds.enterFullScreen()"),e.setAttribute("tabindex","-1"),e.setAttribute("type","button"),e.setAttribute("data-tooltip","Fullscreen ("+t.osModifier+"+Enter)"),t.menu.appendChild(e)}function n(t){var e=document.createElement("div");e.classList.add("muds-item"),e.classList.add("muds-dropdown"),e.classList.add("headers"),e.innerHTML='<label><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M5 4v3h5.5v12h3V7H19V4H5z"/></svg></label><ul><li><button type="button" class="muds-h1" tabindex="-1" title="Healine 1 (cmd+1)" onclick="muds.buttonH1Action()">Header 1</button></li><li><button type="button" class="muds-h2" tabindex="-1" title="Healine 2 (cmd+2)" onclick="muds.buttonH2Action()">Header 2</button></li><li><button type="button" class="muds-h3" tabindex="-1" title="Healine 3 (cmd+3)" onclick="muds.buttonH3Action()">Header 3</button></li><li><button type="button" class="muds-body" tabindex="-1" title="Body Text (cmd+0)" onclick="muds.buttonBodyTextAction()">Body</button></li><li><button type="button" class="muds-blockquote" tabindex="-1" title="Blockquote (shift+cmd+B)" onclick="muds.buttonBlockquoteAction()">Blockquote</button></li><li><button type="button" class="muds-blockquote" tabindex="-1" title="Code Block" onclick="muds.buttonCodeBlockAction()">Code Block</button></li></ul>',t.menu.appendChild(e)}function o(t){var e=document.createElement("div");e.classList.add("muds-item"),e.classList.add("muds-dropdown"),e.classList.add("fonts"),e.innerHTML='<label><svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"/></svg>\n</label><ul><div class="wrapper"><li><button type="button" tabindex="-1" class="font-arial" title="Arial" onclick="muds.buttonFontArialAction()">Arial</button></li><li><button type="button" tabindex="-1" class="font-arial-black" title="Arial Black" onclick="muds.buttonFontArialBlackAction()">Arial Black</button></li><li><button type="button" tabindex="-1" class="font-comic-sans" title="Comic Sans" onclick="muds.buttonFontComicSansAction()">Comic Sans</button></li><li><button type="button" tabindex="-1" class="font-courier-new" title="Courier New" onclick="muds.buttonFontCourierNewAction()">Courier New</button></li><li><button type="button" tabindex="-1" class="font-georgia" title="Georgia" onclick="muds.buttonFontGeorgiaAction()">Georgia</button></li><li><button type="button" tabindex="-1" class="font-impact" title="Georgia" onclick="muds.buttonFontImpactAction()">Impact</button></li><li><button type="button" tabindex="-1" class="font-lucida-console" title="Lucida Console" onclick="muds.buttonFontLucidaConsoleAction()">Lucida Console</button></li><li><button type="button" tabindex="-1" class="font-lucida-sans-unicode" title="Lucida Sans Unicode" onclick="muds.buttonFontLucidaSansUnicodeAction()">Lucida Sans Unicode</button></li><li><button type="button" tabindex="-1" class="font-palatino" title="Palatino" onclick="muds.buttonFontPalatinoAction()">Palatino</button></li><li><button type="button" tabindex="-1" class="font-default" title="Default" onclick="muds.buttonFontDefaultAction()">System Default</button></li><li><button type="button" tabindex="-1" class="font-tahoma" title="Tahoma" onclick="muds.buttonFontTahamoAction()">Tahoma</button></li><li><button type="button" tabindex="-1" class="font-times-new-roman" title="Times New Roman" onclick="muds.buttonFontTimesNewRomanAction()">Times New Roman</button></li><li><button type="button" tabindex="-1" class="font-trebuchet" title="Trehuchet MS" onclick="muds.buttonFontTrebuchetAction()">Trebuchet MS</button></li><li><button type="button" tabindex="-1" class="font-verdana" title="Verdana" onclick="muds.buttonFontVerdanaAction()">Verdana</button></li></div></ul>',t.menu.appendChild(e)}function i(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',e.setAttribute("onclick","muds.buttonUnorderedListAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Unordered list ("+t.osModifier+"+.)"),t.menu.appendChild(e)}function s(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',e.setAttribute("onclick","muds.buttonOrderedListAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Ordered list  ("+t.osModifier+"+,)"),t.menu.appendChild(e)}function u(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>',e.setAttribute("onclick","muds.buttonUnderlineAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Underline ("+t.osModifier+"+U)"),t.menu.appendChild(e)}function a(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"/></svg>',e.setAttribute("onclick","muds.buttonItalicAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Italic ("+t.osModifier+"+I)"),t.menu.appendChild(e)}function d(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',e.setAttribute("onclick","muds.buttonBlockquoteAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Blockquote (SHIFT+"+t.osModifier+"+B)"),t.menu.appendChild(e)}function l(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',e.setAttribute("onclick","muds.buttonCodeBlockAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Code Block"),t.menu.appendChild(e)}function c(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>',e.setAttribute("onclick","muds.buttonBoldAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("unselectable","on"),e.setAttribute("data-tooltip","Bold ("+t.osModifier+"+B)"),t.menu.appendChild(e)}function r(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/></svg>',e.setAttribute("onclick","muds.buttonLinkAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Create link ("+t.osModifier+"+L)"),t.menu.appendChild(e)}function m(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z" /></svg>',e.setAttribute("onclick","muds.buttonCutAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Cut ("+t.osModifier+"+X)"),t.menu.appendChild(e)}function h(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"/></svg>',e.setAttribute("onclick","muds.buttonCopyAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Copy ("+t.osModifier+"+C)"),t.menu.appendChild(e)}function p(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>',e.setAttribute("onclick","muds.buttonUndoAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Undo ("+t.osModifier+"+Z)"),t.menu.appendChild(e)}function v(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>',e.setAttribute("onclick","muds.buttonRedoAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Redo (SHIFT+"+t.osModifier+"+Z)"),t.menu.appendChild(e)}function b(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill-opacity=".36" d="M0 20h24v4H0v-4z"/><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"/></svg>',e.setAttribute("onclick","muds.buttonChangeColorAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Text color (SHIFT+"+t.osModifier+"+C)"),t.menu.appendChild(e)}function f(t){var e=document.createElement("input");e.classList.add("muds-item"),e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.id="file",e.style.display="none",e.setAttribute("tabindex","-1"),e.setAttribute("onchange","muds.buttonGetImageAction()"),t.menu.appendChild(e);var n=document.createElement("label");n.setAttribute("for","file"),n.classList.add("muds-item"),n.setAttribute("data-tooltip","Insert image"),n.setAttribute("type","button"),n.setAttribute("tabindex","-1"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"/></svg>',t.menu.appendChild(n)}function y(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43s.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13s-.53.21-.72.36c-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51s.35.36.43.57c.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75s-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21V12z"/></svg>',e.setAttribute("onclick","muds.buttonStrikeThroughAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Strike Through ("+t.osModifier+"+S)"),t.menu.appendChild(e)}function w(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>',e.setAttribute("onclick","muds.buttonDeleteAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Delete (DEL)"),t.menu.appendChild(e)}function g(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/></svg>',e.setAttribute("onclick","muds.buttonSelectAllAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Select all ("+t.osModifier+"+A)"),t.menu.appendChild(e)}function A(t){var e=document.createElement("div");e.classList.add("muds-item"),e.classList.add("muds-dropdown"),e.classList.add("justification"),e.innerHTML='<label><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg></label><ul><li><button type="button" class="just-left" title="Justify Left" onclick="muds.buttonJustifyLeftAction()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg> Justify Left</button></li><li><button type="button" class="just-center" title="Justify Center" onclick="muds.buttonJustifyCenterAction()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg> Justify Center</button></li><li><button type="button" class="just-right" title="Justify Right" onclick="muds.buttonJustifyRightAction()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg> Justify Right</button></li><li><button type="button" class="just-indent" title="Indent" onclick="muds.buttonIndentAction()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg> Indent</button></li><li><button type="button" class="just-outdent" title="Outdent" onclick="muds.buttonOutdentAction()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg> Outdent</button></li></ul>',t.menu.appendChild(e)}function H(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg>',e.setAttribute("onclick","muds.buttonJustifyCenterAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Justify center ("+t.osModifier+"+Up/Down Arrow)"),t.menu.appendChild(e)}function x(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>',e.setAttribute("onclick","muds.buttonJustifyLeftAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Justify Left ("+t.osModifier+"+Left Arrow)"),t.menu.appendChild(e)}function z(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg>',e.setAttribute("onclick","muds.buttonJustifyRightAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Justify Right ("+t.osModifier+"+Right Arrow)"),t.menu.appendChild(e)}function M(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',e.setAttribute("onclick","muds.buttonIndentAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Indent (SHIFT+"+t.osModifier+"+Right Arrow)"),t.menu.appendChild(e)}function L(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',e.setAttribute("onclick","muds.buttonOutdentAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Outdent (SHIFT+"+t.osModifier+"+Left Arrow)"),t.menu.appendChild(e)}function C(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg>',e.setAttribute("onclick","muds.buttonPrintMeAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Print ("+t.osModifier+"+P)"),t.menu.appendChild(e)}function k(t){var e=document.createElement("button");e.classList.add("muds-item","show-html"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',e.setAttribute("onclick","muds.buttonShowHTMLAction(event)"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","Show HTML ("+t.osModifier+"+H)"),t.menu.appendChild(e)}function V(t){var e=document.createElement("button");e.classList.add("muds-item"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>',e.setAttribute("onclick","muds.buttonShowTextAction()"),e.setAttribute("type","button"),e.setAttribute("tabindex","-1"),e.setAttribute("data-tooltip","View content ("+t.osModifier+"+O)"),t.menu.appendChild(e)}function T(t){var e=t,n=e.wrapper;t.content.addEventListener("keydown",function(t){if(9===t.keyCode){t.preventDefault();var o=document.getElementById(e.original_input.id),i=o.ownerDocument.defaultView,s=i.getSelection(),u=s.getRangeAt(0),a=document.createTextNode("    ");u.insertNode(a),u.setStartAfter(a),u.setEndAfter(a),s.removeAllRanges(),s.addRange(u)}80===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.cancelBubble=!0,t.preventDefault(),t.stopImmediatePropagation(),E.prototype.buttonPrintMeAction())),37===t.keyCode&&((!0===t.metaKey&&!1===t.shiftKey||!0===t.ctrlKey&&!1===t.shiftKey)&&(t.preventDefault(),E.prototype.buttonJustifyLeftAction()),(!0===t.metaKey&&!0===t.shiftKey||!0===t.ctrlKey&&!0===t.shiftKey)&&(t.preventDefault(),E.prototype.buttonOutdentAction())),38!==t.keyCode&&40!==t.keyCode||!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonJustifyCenterAction()),39===t.keyCode&&((!0===t.metaKey&&!1===t.shiftKey||!0===t.ctrlKey&&!1===t.shiftKey)&&(t.preventDefault(),E.prototype.buttonJustifyRightAction()),(!0===t.metaKey&&!0===t.shiftKey||!0===t.ctrlKey&&!0===t.shiftKey)&&(t.preventDefault(),E.prototype.buttonIndentAction())),67===t.keyCode&&(!0===t.metaKey&&!0===t.shiftKey||!0===t.ctrlKey&&!0===t.shiftKey)&&(t.preventDefault(),E.prototype.buttonChangeColorAction()),72===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonShowHTMLAction())),76===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonLinkAction())),83===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonStrikeThroughAction())),85===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonUnderlineAction())),48===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonBodyTextAction())),66===t.keyCode&&(!0===t.metaKey&&!0===t.shiftKey||!0===t.ctrlKey&&!0===t.shiftKey)&&(t.preventDefault(),E.prototype.buttonBlockquoteAction()),49===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonH1Action())),50===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonH2Action())),51===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonH3Action())),190===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonUnorderedListAction())),188===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonOrderedListAction())),13===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),n.classList.contains("fullscreen")?E.prototype.exitFullScreen(e):E.prototype.enterFullScreen(e))),79===t.keyCode&&(!0!==t.metaKey&&!0!==t.ctrlKey||(t.preventDefault(),E.prototype.buttonShowTextAction()))},!1)}function S(T){function S(S){"header"===S&&n(T),"fonts"===S&&o(T),"underline"===S&&u(T),"strikeThrough"===S&&y(T),"italic"===S&&a(T),"bold"===S&&c(T),"link"===S&&r(T),"blockquote"===S&&d(T),"code"===S&&l(T),"changeColor"===S&&b(T),"image"===S&&f(T),"undo"===S&&p(T),"redo"===S&&v(T),"justification"===S&&A(T),"unorderedList"===S&&i(T),"orderedList"===S&&s(T),"selectAll"===S&&g(T),"copy"===S&&h(T),"cut"===S&&m(T),"delete"===S&&w(T),"justifyLeft"===S&&x(T),"justifyCenter"===S&&H(T),"justifyRight"===S&&z(T),"indent"===S&&M(T),"outdent"===S&&L(T),"print"===S&&C(T),"showHTML"===S&&k(T),"showText"===S&&V(T),"fullScreen"===S&&e(T),"separator"===S&&t(T)}if("full"===T.menu_style||void 0===T.menu_style)n(T),o(T),c(T),a(T),u(T),y(T),t(T),r(T),b(T),f(T),p(T),v(T),t(T),A(T),i(T),s(T),g(T),h(T),m(T),w(T),t(T),C(T),k(T),V(T),e(T);else if("minimal"===T.menu_style)c(T),a(T),u(T),y(T),b(T);else if("custom"===T.menu_style)for(var B=T.menu_custom,E=0;E<B.length;E++)S(B[E])}function B(t){var e=t.wrapper,n=t.menu,o=t.content,i=t.contentSubmittable,s=void 0;if(0!=t.tooltips&&n.classList.add("tooltips"),0!=t.keybindings&&T(t),s=void 0===t.content_submit?"muds-submit":t.content_submit,void 0===t.theme?e.classList.add("light"):e.classList.add(t.theme),n.classList.add("muds-toolbar"),o.classList.add("muds-content"),o.setAttribute("contenteditable","true"),o.style.overflow="auto",i.setAttribute("name",s),i.setAttribute("id",s),e.id=t.original_input.id,e.style.position="relative",e.style.height="150px",e.style.height=t.height,e.appendChild(n),e.appendChild(o),e.appendChild(i),void 0!=t.placeholder&&""===t.content.innerText){var u=document.createElement("div");u.classList.add("muds-placeholder"),u.innerHTML=t.placeholder,""!=t.original_content&&(u.style.display="none"),e.appendChild(u)}if(t.original_input.parentNode.replaceChild(e,t.original_input),o.style.height="calc(100% - "+t.menu.offsetHeight+"px",void 0!=t.placeholder&&""===t.content.innerText&&""===t.original_content&&(u.style.top=t.menu.offsetHeight+10+"px"),window.addEventListener("resize",function(){o.style.height="calc(100% - "+t.menu.offsetHeight+"px",void 0!=t.placeholder&&(u.style.top=t.menu.offsetHeight+10+"px")},!0),""===t.original_content||void 0===t.original_content?o.innerHTML="<p><br></p>":(o.innerHTML=t.original_content,i.innerHTML=t.original_content),!1!==t.resize){var a=function e(){window.addEventListener("mousemove",d,!1),window.addEventListener("mouseup",l,!1),t.content.style.pointerEvents="none"},d=function t(e){console.log(e.clientY),e.clientY<=75?c.style.height="75px":c.style.height=e.clientY-c.offsetTop+"px"},l=function e(){window.removeEventListener("mousemove",d,!1),window.removeEventListener("mouseup",e,!1),t.content.style.pointerEvents="auto"},c=t.wrapper,r=document.createElement("div");r.className="muds-resizer",c.appendChild(r),r.addEventListener("mousedown",a,!1)}document.execCommand("defaultParagraphSeparator",!1,"p"),t.content.addEventListener("input",function(){i.innerHTML=o.innerHTML,void 0!=t.placeholder&&""!=t.content.innerText?u.style.display="none":void 0!=t.placeholder&&""===t.content.innerText&&(u.style.display="block",u.style.top=t.menu.offsetHeight+10+"px")});for(var m=document.querySelectorAll(".muds-item"),h=0;h<m.length;h++)m[h].addEventListener("mousedown",function(){event.preventDefault()});void 0!=t.onChange&&t.content.addEventListener("input",function(){t.onChange()})}var E=function t(e){function n(t,e){var n={},o;for(o in t)n[o]=t[o];for(o in e)n[o]=e[o];return n}this.options=n(t.defaults,e),this.original_input=document.getElementById(e.selector),this.original_content=this.original_input.textContent,this.menu_style=e.menuStyle,this.menu_custom=e.menuCustom,this.height=e.height,this.resize=e.resize,this.tooltips=e.tooltips,this.theme=e.theme,this.selector=e.selector,this.onChange=e.onChange,this.content_submit=e.submitName,this.placeholder=e.placeholder,-1!=window.navigator.userAgent.indexOf("Mac")?this.osModifier="CMD":this.osModifier="CTRL",this.menu=document.createElement("div"),this.content=document.createElement("div"),this.wrapper=document.createElement("div"),this.contentSubmittable=document.createElement("textarea"),this.contentSubmittable.style.display="none",this.contentSubmittable.style.opacity="0",this.contentSubmittable.style.height="0",S(this),B(this)};E.prototype.enterFullScreen=function(t){var e;e=t||this;var n=e.wrapper.querySelector(".muds-toolbar .muds-item.fullscreen");e.wrapper.style.height="100vh",e.wrapper.style.width="100vw",e.wrapper.style.position="fixed",e.wrapper.style.top="0",e.wrapper.style.left="0",e.wrapper.style.zIndex="999",e.wrapper.classList.add("fullscreen"),n.setAttribute("onclick","muds.exitFullScreen()"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>'},E.prototype.exitFullScreen=function(t){var e;e=t||this;var n=e.wrapper.querySelector(".muds-content"),o=e.wrapper.querySelector(".muds-toolbar .muds-item.fullscreen");e.wrapper.setAttribute("style",""),e.wrapper.style.position="relative",e.wrapper.classList.remove("fullscreen"),void 0===e.height?n.wrapper.height="150px":e.wrapper.style.height=e.height,o.setAttribute("onclick","muds.enterFullScreen()"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>'},E.prototype.buttonBodyTextAction=function(){document.execCommand("formatBlock",!1,"p")},E.prototype.buttonBlockquoteAction=function(){document.execCommand("formatBlock",!1,"blockquote"),window.getSelection().focusNode.parentNode.classList.add("muds-quote")},E.prototype.buttonCodeBlockAction=function(){document.execCommand("formatBlock",!1,"pre")},E.prototype.buttonH1Action=function(){document.execCommand("formatBlock",!1,"h1")},E.prototype.buttonH2Action=function(){document.execCommand("formatBlock",!1,"h2")},E.prototype.buttonH3Action=function(){document.execCommand("formatBlock",!1,"h3")},E.prototype.buttonFontDefaultAction=function(){
document.execCommand("fontName",!1,'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"')},E.prototype.buttonFontArialAction=function(){document.execCommand("fontName",!1,"Arial, Helvetica, sans-serif")},E.prototype.buttonFontArialBlackAction=function(){document.execCommand("fontName",!1,'"Arial Black", Gadget, sans-serif')},E.prototype.buttonFontGeorgiaAction=function(){document.execCommand("fontName",!1,"Georgia, serif")},E.prototype.buttonFontPalatinoAction=function(){document.execCommand("fontName",!1,'"Palatino Linotype", "Book Antiqua", Palatino, serif')},E.prototype.buttonFontTimesNewRomanAction=function(){document.execCommand("fontName",!1,'"Times New Roman", Times, serif')},E.prototype.buttonFontComicSansAction=function(){document.execCommand("fontName",!1,'"Comic Sans MS", cursive, sans-serif')},E.prototype.buttonFontImpactAction=function(){document.execCommand("fontName",!1,"Impact, Charcoal, sans-serif")},E.prototype.buttonFontLucidaSansUnicodeAction=function(){document.execCommand("fontName",!1,'"Lucida Sans Unicode", "Lucida Grande", sans-serif')},E.prototype.buttonFontLucidaConsoleAction=function(){document.execCommand("fontName",!1,'"Lucida Console", Monaco, monospace')},E.prototype.buttonFontTahamoAction=function(){document.execCommand("fontName",!1,"Tahoma, Geneva, sans-serif")},E.prototype.buttonFontTrebuchetAction=function(){document.execCommand("fontName",!1,'"Trebuchet MS", Helvetica, sans-serif')},E.prototype.buttonFontVerdanaAction=function(){document.execCommand("fontName",!1,"Verdana, Geneva, sans-serif")},E.prototype.buttonFontCourierNewAction=function(){document.execCommand("fontName",!1,'"Courier New", Courier, monospace')},E.prototype.buttonUnorderedListAction=function(){document.execCommand("insertUnorderedList",!1,"")},E.prototype.buttonOrderedListAction=function(){document.execCommand("insertOrderedList",!1,"")},E.prototype.buttonUnderlineAction=function(){document.execCommand("underline",!1,"")},E.prototype.buttonItalicAction=function(){document.execCommand("italic",!1,"")},E.prototype.buttonBoldAction=function(){document.execCommand("bold",!1,"")},E.prototype.buttonStrikeThroughAction=function(){document.execCommand("strikeThrough",!1,"")},E.prototype.buttonLinkAction=function(){if("A"===window.getSelection().focusNode.parentElement.tagName)document.execCommand("unlink",!1,"");else{var t=prompt("Enter the URL");document.execCommand("createLink",!1,t)}},E.prototype.buttonCutAction=function(){document.execCommand("cut",!1,"")},E.prototype.buttonCopyAction=function(){document.execCommand("copy",!1,"")},E.prototype.buttonUndoAction=function(){document.execCommand("undo",!1,"")},E.prototype.buttonRedoAction=function(){document.execCommand("redo",!1,"")},E.prototype.buttonChangeColorAction=function(){var t=prompt("Enter your color in hex ex: #f1f233");document.execCommand("foreColor",!1,t)},E.prototype.buttonGetImageAction=function(){var t=document.querySelector(".muds-content"),e=document.querySelector("input[type=file]").files[0],n=new FileReader,o=void 0;n.addEventListener("load",function(){o=n.result;var e=document.createElement("img");e.src=o,t.appendChild(e)},!1),e&&n.readAsDataURL(e)},E.prototype.buttonDeleteAction=function(){document.execCommand("delete",!1,"")},E.prototype.buttonSelectAllAction=function(){var t=document.querySelector(".muds-content");document.activeElement!==t&&t.focus(),document.execCommand("selectAll",!1,"")},E.prototype.buttonJustifyCenterAction=function(){document.execCommand("justifyCenter",!1,"")},E.prototype.buttonJustifyLeftAction=function(){document.execCommand("justifyLeft",!1,"")},E.prototype.buttonJustifyRightAction=function(){document.execCommand("justifyRight",!1,"")},E.prototype.buttonIndentAction=function(){document.execCommand("indent",!1,"")},E.prototype.buttonOutdentAction=function(){document.execCommand("outdent",!1,"")},E.prototype.buttonShowHTMLAction=function(){var t={encode:function t(e){for(var n=[],o=e.length-1;o>=0;o--)n.unshift(["&#",e[o].charCodeAt(),";"].join(""));return n.join("")},decode:function t(e){return e.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(e)})}},e=document.querySelector(".muds-content"),n=document.querySelector(".show-html"),o=document.querySelectorAll(".muds-item"),i=e.innerHTML,s=t.encode(i);if(!1===n.classList.contains("active")){e.innerHTML=s;for(var u=0;u<o.length;++u)o[u].classList.contains("show-html")?o[u].classList.add("active"):(o[u].classList.add("disabled"),o[u].disabled=!0)}else if(!0===n.classList.contains("active")){e.innerHTML=e.textContent;for(var a=0;a<o.length;++a)o[a].classList.contains("show-html")?o[a].classList.remove("active"):(o[a].classList.remove("disabled"),o[a].disabled=!1)}},E.prototype.buttonShowTextAction=function(){var t=document.querySelector(".muds-content"),e=t.innerHTML,n=window.open("","muds - View Text","width=768,height=600");n.document.write('<html><head><title>muds - View Text</title><style>h1,h2{margin:0 0 1rem!important;font-weight:700!important}h1,h2,h3{font-weight:700!important}h3,p{margin:0 0 .5rem!important}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}h1{font-size:2.5rem!important}h2{font-size:2rem!important}h3{font-size:1.5rem!important}.muds-quote,p{font-size:1rem!important}p{font-weight:400!important}a{color:#61aeee!important}ol,ul{margin-left:1.5rem!important}.muds-quote{margin:1rem 3rem!important;font-style:italic!important;color:#555!important;padding:1.2em 30px 1.2em 50px!important;border-left:8px solid #61aeee!important;line-height:1.6!important;position:relative!important;background:#EDEDED!important}.muds-quote::before{font-family:Arial!important;content:"\\201C"!important;color:#61aeee!important;font-size:4em!important;position:absolute!important;left:10px!important;top:-10px!important}</style></head><body>'),n.document.write(e),n.document.write("</body></html>")},E.prototype.buttonPrintMeAction=function(){var t=document.querySelector(".muds-content"),e=t.innerHTML,n=window.open("","muds - Print","width=768,height=600");n.document.write('<html><head><title>muds - Print</title><style>h1,h2{margin:0 0 1rem!important;font-weight:700!important}h1,h2,h3{font-weight:700!important}h3,p{margin:0 0 .5rem!important}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}h1{font-size:2.5rem!important}h2{font-size:2rem!important}h3{font-size:1.5rem!important}.muds-quote,p{font-size:1rem!important}p{font-weight:400!important}a{color:#61aeee!important}ol,ul{margin-left:1.5rem!important}.muds-quote{margin:1rem 3rem!important;font-style:italic!important;color:#555!important;padding:1.2em 30px 1.2em 50px!important;border-left:8px solid #61aeee!important;line-height:1.6!important;position:relative!important;background:#EDEDED!important}.muds-quote::before{font-family:Arial!important;content:"\\201C"!important;color:#61aeee!important;font-size:4em!important;position:absolute!important;left:10px!important;top:-10px!important}</style></head><body>'),n.document.write(e),n.document.write("</body></html>"),n.document.close(),n.focus(),n.print(),n.close()},E.defaults={selector:"",submitName:"muds-submit",resize:!0,placeholder:!1,menuStyle:"custom",menuCustom:[],theme:"light",height:"150px",keybindings:!0,tooltips:!0,onChange:!1},window.muds=E}();
//# sourceMappingURL=./editor-dist.js.map