webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/AboutMe.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/AboutMe.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".AboutMe_about__3O9_4 {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.AboutMe_about__3O9_4 h3 {\n  font-size: 35px;\n  letter-spacing: 2px;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_btnContainer__2qNXC {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_btnContainer__2qNXC button {\n  margin-top: 30px;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_headshot__FQZC3 {\n  width: 90%;\n  max-width: 370px;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_background__30Rk- {\n  display: none;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_text__2pLkU {\n  width: 90%;\n  margin: 15px 0px;\n}\n\n@media (min-width: 768px) {\n  .AboutMe_about__3O9_4 .AboutMe_container__2ufeO {\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 100%;\n    margin: 15px;\n  }\n  .AboutMe_about__3O9_4 .AboutMe_text__2pLkU {\n    background-color: #f2f2f2;\n    z-index: 1;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 12px 12px 0px;\n    position: absolute;\n  }\n}", "",{"version":3,"sources":["webpack://AboutMe.module.scss","webpack://variables.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;ECwBA,aAAA;EACA,sBDxBuB;ECyBvB,mBAAA;EACA,uBAAA;ADxBF;AADE;EACE,eAAA;EACA,mBAAA;AAGJ;AADE;ECkBA,aAAA;EACA,sBDlByB;ECmBzB,mBAAA;EACA,uBAAA;ADdF;AALI;ECgBF,aAAA;EACA,mBDhB2B;ECiB3B,mBAAA;EACA,uBAAA;ADRF;AATM;EACE,gBAAA;AAWR;AARI;EACE,UAAA;EACA,gBAAA;AAUN;AARI;EACE,aAAA;AAUN;AARI;EACE,UAAA;EACA,gBAAA;AAUN;;AC7BE;ED6BE;IACE,mBAAA;IACA,yBAAA;IACA,WAAA;IACA,YAAA;EAIJ;EAFE;IACE,yBCtBK;IDuBL,UAAA;IACA,gDAAA;IACA,kBAAA;EAIJ;AACF","sourcesContent":["@use \"variables\" as *;\r\n\r\n.about {\r\n  width: 100%;\r\n  @include flexboxCenter(column);\r\n  h3 {\r\n    font-size: 35px;\r\n    letter-spacing: 2px;\r\n  }\r\n  .container {\r\n    @include flexboxCenter(column);\r\n    .btnContainer {\r\n      @include flexboxCenter(row);\r\n      button {\r\n        margin-top: 30px;\r\n      }\r\n    }\r\n    .headshot {\r\n      width: 90%;\r\n      max-width: 370px;\r\n    }\r\n    .background {\r\n      display: none;\r\n    }\r\n    .text {\r\n      width: 90%;\r\n      margin: 15px 0px;\r\n      // background-color: $tv-white;\r\n      // z-index: 1;\r\n      // box-shadow: rgb(0 0 0 / 40%) 0px 12px 12px 0px;\r\n    }\r\n  }\r\n}\r\n\r\n@include tablet {\r\n  .about {\r\n    .container {\r\n      flex-direction: row;\r\n      justify-content: flex-end;\r\n      width: 100%;\r\n      margin: 15px;\r\n    }\r\n    .text {\r\n      background-color: $tv-white;\r\n      z-index: 1;\r\n      box-shadow: rgb(0 0 0 / 40%) 0px 12px 12px 0px;\r\n      position: absolute;\r\n    }\r\n  }\r\n}\r\n","//media queries\r\n@mixin phone {\r\n  @media (max-width: 414px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin tablet {\r\n  @media (min-width: 768px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin desktop {\r\n  @media (min-width: 1240px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n//color palette\r\n$main-color: #948e88;\r\n$dark-color: #575b4f;\r\n$light-color: #889194;\r\n$tv-white: #f2f2f2;\r\n//fonts\r\n$text-font: \"Roboto\", sans-serif;\r\n$title-font: \"Bodoni Moda\", serif;\r\n//flexbox mixins\r\n@mixin flexboxCenter($direction) {\r\n  display: flex;\r\n  flex-direction: $direction;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n@mixin flexboxJust {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n@mixin flexAround {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n//Row\r\n@mixin row($spacing) {\r\n  display: flex;\r\n  justify-content: $spacing;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n//card\r\n@mixin card($width) {\r\n  @include flexboxCenter(column);\r\n  width: $width;\r\n  margin: 20px;\r\n  box-shadow: rgb(0 0 0 / 40%) 0px 12px 12px 0px;\r\n  .image {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    img {\r\n      max-width: 100%;\r\n    }\r\n  }\r\n  .description {\r\n    width: 100%;\r\n    padding: 10px;\r\n    background-color: $tv-white;\r\n    .invisible {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"about": "AboutMe_about__3O9_4",
	"container": "AboutMe_container__2ufeO",
	"btnContainer": "AboutMe_btnContainer__2qNXC",
	"headshot": "AboutMe_headshot__FQZC3",
	"background": "AboutMe_background__30Rk-",
	"text": "AboutMe_text__2pLkU"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0Fib3V0TWUubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcsNEJBQTRCLG9CQUFvQix3QkFBd0IsR0FBRyxtREFBbUQsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcsZ0ZBQWdGLGtCQUFrQix3QkFBd0Isd0JBQXdCLDRCQUE0QixHQUFHLHVGQUF1RixxQkFBcUIsR0FBRyw0RUFBNEUsZUFBZSxxQkFBcUIsR0FBRyw4RUFBOEUsa0JBQWtCLEdBQUcsd0VBQXdFLGVBQWUscUJBQXFCLEdBQUcsK0JBQStCLHFEQUFxRCwwQkFBMEIsZ0NBQWdDLGtCQUFrQixtQkFBbUIsS0FBSyxnREFBZ0QsZ0NBQWdDLGlCQUFpQix1REFBdUQseUJBQXlCLEtBQUssR0FBRyxPQUFPLCtHQUErRyxVQUFVLFdBQVcsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssV0FBVyxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFdBQVcsV0FBVyxLQUFLLGlEQUFpRCxnQkFBZ0Isa0JBQWtCLHFDQUFxQyxVQUFVLHdCQUF3Qiw0QkFBNEIsT0FBTyxrQkFBa0IsdUNBQXVDLHVCQUF1QixzQ0FBc0Msa0JBQWtCLDZCQUE2QixXQUFXLFNBQVMsbUJBQW1CLHFCQUFxQiwyQkFBMkIsU0FBUyxxQkFBcUIsd0JBQXdCLFNBQVMsZUFBZSxxQkFBcUIsMkJBQTJCLHlDQUF5Qyx3QkFBd0IsNERBQTRELFNBQVMsT0FBTyxLQUFLLHlCQUF5QixjQUFjLG9CQUFvQiw4QkFBOEIsb0NBQW9DLHNCQUFzQix1QkFBdUIsU0FBUyxlQUFlLHNDQUFzQyxxQkFBcUIseURBQXlELDZCQUE2QixTQUFTLE9BQU8sS0FBSyx3Q0FBd0MsaUNBQWlDLGlCQUFpQixPQUFPLEtBQUssbUJBQW1CLGlDQUFpQyxpQkFBaUIsT0FBTyxLQUFLLG9CQUFvQixrQ0FBa0MsaUJBQWlCLE9BQU8sS0FBSyxnREFBZ0QseUJBQXlCLDBCQUEwQix1QkFBdUIsa0RBQWtELHdDQUF3QywwREFBMEQsb0JBQW9CLGlDQUFpQywwQkFBMEIsOEJBQThCLEtBQUssd0JBQXdCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssdUJBQXVCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLEtBQUssbUNBQW1DLG9CQUFvQixnQ0FBZ0MsMEJBQTBCLG9CQUFvQixLQUFLLG1DQUFtQyxxQ0FBcUMsb0JBQW9CLG1CQUFtQixxREFBcUQsY0FBYyxvQkFBb0IseUJBQXlCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLGFBQWEsMEJBQTBCLFNBQVMsT0FBTyxvQkFBb0Isb0JBQW9CLHNCQUFzQixvQ0FBb0Msb0JBQW9CLHdCQUF3QixTQUFTLE9BQU8sS0FBSyx1QkFBdUI7QUFDcjlJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU5MGE3NGNhNTZjMmI4NzM3YzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQWJvdXRNZV9hYm91dF9fM085XzQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLkFib3V0TWVfYWJvdXRfXzNPOV80IGgzIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcbi5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uQWJvdXRNZV9hYm91dF9fM085XzQgLkFib3V0TWVfY29udGFpbmVyX18ydWZlTyAuQWJvdXRNZV9idG5Db250YWluZXJfXzJxTlhDIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uQWJvdXRNZV9hYm91dF9fM085XzQgLkFib3V0TWVfY29udGFpbmVyX18ydWZlTyAuQWJvdXRNZV9idG5Db250YWluZXJfXzJxTlhDIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uQWJvdXRNZV9hYm91dF9fM085XzQgLkFib3V0TWVfY29udGFpbmVyX18ydWZlTyAuQWJvdXRNZV9oZWFkc2hvdF9fRlFaQzMge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogMzcwcHg7XFxufVxcbi5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIC5BYm91dE1lX2JhY2tncm91bmRfXzMwUmstIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIC5BYm91dE1lX3RleHRfXzJwTGtVIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDE1cHggMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gIH1cXG4gIC5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV90ZXh0X18ycExrVSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMTJweCAxMnB4IDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQWJvdXRNZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBQTtFQ3dCQSxhQUFBO0VBQ0Esc0JEeEJ1QjtFQ3lCdkIsbUJBQUE7RUFDQSx1QkFBQTtBRHhCRjtBQURFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBR0o7QUFERTtFQ2tCQSxhQUFBO0VBQ0Esc0JEbEJ5QjtFQ21CekIsbUJBQUE7RUFDQSx1QkFBQTtBRGRGO0FBTEk7RUNnQkYsYUFBQTtFQUNBLG1CRGhCMkI7RUNpQjNCLG1CQUFBO0VBQ0EsdUJBQUE7QURSRjtBQVRNO0VBQ0UsZ0JBQUE7QUFXUjtBQVJJO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBVU47QUFSSTtFQUNFLGFBQUE7QUFVTjtBQVJJO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBVU47O0FDN0JFO0VENkJFO0lBQ0UsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBSUo7RUFGRTtJQUNFLHlCQ3RCSztJRHVCTCxVQUFBO0lBQ0EsZ0RBQUE7SUFDQSxrQkFBQTtFQUlKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyAqO1xcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIEBpbmNsdWRlIGZsZXhib3hDZW50ZXIoY29sdW1uKTtcXHJcXG4gIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgfVxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXhib3hDZW50ZXIoY29sdW1uKTtcXHJcXG4gICAgLmJ0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgQGluY2x1ZGUgZmxleGJveENlbnRlcihyb3cpO1xcclxcbiAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZHNob3Qge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAzNzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAudGV4dCB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICBtYXJnaW46IDE1cHggMHB4O1xcclxcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICR0di13aGl0ZTtcXHJcXG4gICAgICAvLyB6LWluZGV4OiAxO1xcclxcbiAgICAgIC8vIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMHB4IDEycHggMTJweCAwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGluY2x1ZGUgdGFibGV0IHtcXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXJnaW46IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRleHQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0di13aGl0ZTtcXHJcXG4gICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMHB4IDEycHggMTJweCAwcHg7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLy9tZWRpYSBxdWVyaWVzXFxyXFxuQG1peGluIHBob25lIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIHRhYmxldCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBkZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjQwcHgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vY29sb3IgcGFsZXR0ZVxcclxcbiRtYWluLWNvbG9yOiAjOTQ4ZTg4O1xcclxcbiRkYXJrLWNvbG9yOiAjNTc1YjRmO1xcclxcbiRsaWdodC1jb2xvcjogIzg4OTE5NDtcXHJcXG4kdHYtd2hpdGU6ICNmMmYyZjI7XFxyXFxuLy9mb250c1xcclxcbiR0ZXh0LWZvbnQ6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiR0aXRsZS1mb250OiBcXFwiQm9kb25pIE1vZGFcXFwiLCBzZXJpZjtcXHJcXG4vL2ZsZXhib3ggbWl4aW5zXFxyXFxuQG1peGluIGZsZXhib3hDZW50ZXIoJGRpcmVjdGlvbikge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5AbWl4aW4gZmxleGJveEp1c3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbkBtaXhpbiBmbGV4QXJvdW5kIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi8vUm93XFxyXFxuQG1peGluIHJvdygkc3BhY2luZykge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogJHNwYWNpbmc7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLy9jYXJkXFxyXFxuQG1peGluIGNhcmQoJHdpZHRoKSB7XFxyXFxuICBAaW5jbHVkZSBmbGV4Ym94Q2VudGVyKGNvbHVtbik7XFxyXFxuICB3aWR0aDogJHdpZHRoO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAwcHggMTJweCAxMnB4IDBweDtcXHJcXG4gIC5pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHYtd2hpdGU7XFxyXFxuICAgIC5pbnZpc2libGUge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYWJvdXRcIjogXCJBYm91dE1lX2Fib3V0X18zTzlfNFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkFib3V0TWVfY29udGFpbmVyX18ydWZlT1wiLFxuXHRcImJ0bkNvbnRhaW5lclwiOiBcIkFib3V0TWVfYnRuQ29udGFpbmVyX18ycU5YQ1wiLFxuXHRcImhlYWRzaG90XCI6IFwiQWJvdXRNZV9oZWFkc2hvdF9fRlFaQzNcIixcblx0XCJiYWNrZ3JvdW5kXCI6IFwiQWJvdXRNZV9iYWNrZ3JvdW5kX18zMFJrLVwiLFxuXHRcInRleHRcIjogXCJBYm91dE1lX3RleHRfXzJwTGtVXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==