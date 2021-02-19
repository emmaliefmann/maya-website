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
___CSS_LOADER_EXPORT___.push([module.i, ".AboutMe_about__3O9_4 {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.AboutMe_about__3O9_4 h3 {\n  font-size: 35px;\n  letter-spacing: 2px;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_btnContainer__2qNXC {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_btnContainer__2qNXC button {\n  margin-top: 30px;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_headshot__FQZC3 {\n  width: 90%;\n  max-width: 370px;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_background__30Rk- {\n  display: none;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_text__2pLkU {\n  width: 90%;\n  margin: 15px 0px;\n}\n\n@media (min-width: 768px) {\n  .AboutMe_about__3O9_4 .AboutMe_container__2ufeO {\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 100%;\n    margin: 15px;\n    position: relative;\n    padding-right: 15px;\n    max-width: 934px;\n  }\n  .AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_text__2pLkU {\n    background-color: #f2f2f2;\n    z-index: 1;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 12px 12px 0px;\n    position: absolute;\n    width: 68%;\n    min-width: 523px;\n    max-width: 588px;\n    padding: 10px 15px;\n    left: 5%;\n    transform: translateX(5%);\n  }\n}", "",{"version":3,"sources":["webpack://AboutMe.module.scss","webpack://variables.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;ECwBA,aAAA;EACA,sBDxBuB;ECyBvB,mBAAA;EACA,uBAAA;ADxBF;AADE;EACE,eAAA;EACA,mBAAA;AAGJ;AADE;ECkBA,aAAA;EACA,sBDlByB;ECmBzB,mBAAA;EACA,uBAAA;ADdF;AALI;ECgBF,aAAA;EACA,mBDhB2B;ECiB3B,mBAAA;EACA,uBAAA;ADRF;AATM;EACE,gBAAA;AAWR;AARI;EACE,UAAA;EACA,gBAAA;AAUN;AARI;EACE,aAAA;AAUN;AARI;EACE,UAAA;EACA,gBAAA;AAUN;;AC7BE;ED6BE;IACE,mBAAA;IACA,yBAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,mBAAA;IACA,gBAAA;EAIJ;EAHI;IACE,yBCxBG;IDyBH,UAAA;IACA,gDAAA;IACA,kBAAA;IACA,UAAA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;IACA,QAAA;IACA,yBAAA;EAKN;AACF","sourcesContent":["@use \"variables\" as *;\r\n\r\n.about {\r\n  width: 100%;\r\n  @include flexboxCenter(column);\r\n  h3 {\r\n    font-size: 35px;\r\n    letter-spacing: 2px;\r\n  }\r\n  .container {\r\n    @include flexboxCenter(column);\r\n    .btnContainer {\r\n      @include flexboxCenter(row);\r\n      button {\r\n        margin-top: 30px;\r\n      }\r\n    }\r\n    .headshot {\r\n      width: 90%;\r\n      max-width: 370px;\r\n    }\r\n    .background {\r\n      display: none;\r\n    }\r\n    .text {\r\n      width: 90%;\r\n      margin: 15px 0px;\r\n      // background-color: $tv-white;\r\n      // z-index: 1;\r\n      // box-shadow: rgb(0 0 0 / 40%) 0px 12px 12px 0px;\r\n    }\r\n  }\r\n}\r\n\r\n@include tablet {\r\n  .about {\r\n    .container {\r\n      flex-direction: row;\r\n      justify-content: flex-end;\r\n      width: 100%;\r\n      margin: 15px;\r\n      position: relative;\r\n      padding-right: 15px;\r\n      max-width: 934px;\r\n      .text {\r\n        background-color: $tv-white;\r\n        z-index: 1;\r\n        box-shadow: rgb(0 0 0 / 40%) 0px 12px 12px 0px;\r\n        position: absolute;\r\n        width: 68%;\r\n        min-width: 523px;\r\n        max-width: 588px;\r\n        padding: 10px 15px;\r\n        left: 5%;\r\n        transform: translateX(5%);\r\n      }\r\n    }\r\n  }\r\n}\r\n","//media queries\r\n@mixin phone {\r\n  @media (max-width: 414px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin tablet {\r\n  @media (min-width: 768px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin desktop {\r\n  @media (min-width: 1240px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n//color palette\r\n$main-color: #948e88;\r\n$dark-color: #575b4f;\r\n$light-color: #889194;\r\n$tv-white: #f2f2f2;\r\n//fonts\r\n$text-font: \"Roboto\", sans-serif;\r\n$title-font: \"Bodoni Moda\", serif;\r\n//flexbox mixins\r\n@mixin flexboxCenter($direction) {\r\n  display: flex;\r\n  flex-direction: $direction;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n@mixin flexboxJust {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n@mixin flexAround {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n//Row\r\n@mixin row($spacing) {\r\n  display: flex;\r\n  justify-content: $spacing;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n//card\r\n@mixin card($width) {\r\n  @include flexboxCenter(column);\r\n  width: $width;\r\n  margin: 20px;\r\n  box-shadow: rgb(0 0 0 / 40%) 0px 12px 12px 0px;\r\n  .image {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    img {\r\n      max-width: 100%;\r\n    }\r\n  }\r\n  .description {\r\n    width: 100%;\r\n    padding: 10px;\r\n    background-color: $tv-white;\r\n    .invisible {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0Fib3V0TWUubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcsNEJBQTRCLG9CQUFvQix3QkFBd0IsR0FBRyxtREFBbUQsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcsZ0ZBQWdGLGtCQUFrQix3QkFBd0Isd0JBQXdCLDRCQUE0QixHQUFHLHVGQUF1RixxQkFBcUIsR0FBRyw0RUFBNEUsZUFBZSxxQkFBcUIsR0FBRyw4RUFBOEUsa0JBQWtCLEdBQUcsd0VBQXdFLGVBQWUscUJBQXFCLEdBQUcsK0JBQStCLHFEQUFxRCwwQkFBMEIsZ0NBQWdDLGtCQUFrQixtQkFBbUIseUJBQXlCLDBCQUEwQix1QkFBdUIsS0FBSywwRUFBMEUsZ0NBQWdDLGlCQUFpQix1REFBdUQseUJBQXlCLGlCQUFpQix1QkFBdUIsdUJBQXVCLHlCQUF5QixlQUFlLGdDQUFnQyxLQUFLLEdBQUcsT0FBTywrR0FBK0csVUFBVSxXQUFXLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFdBQVcsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxpREFBaUQsZ0JBQWdCLGtCQUFrQixxQ0FBcUMsVUFBVSx3QkFBd0IsNEJBQTRCLE9BQU8sa0JBQWtCLHVDQUF1Qyx1QkFBdUIsc0NBQXNDLGtCQUFrQiw2QkFBNkIsV0FBVyxTQUFTLG1CQUFtQixxQkFBcUIsMkJBQTJCLFNBQVMscUJBQXFCLHdCQUF3QixTQUFTLGVBQWUscUJBQXFCLDJCQUEyQix5Q0FBeUMsd0JBQXdCLDREQUE0RCxTQUFTLE9BQU8sS0FBSyx5QkFBeUIsY0FBYyxvQkFBb0IsOEJBQThCLG9DQUFvQyxzQkFBc0IsdUJBQXVCLDZCQUE2Qiw4QkFBOEIsMkJBQTJCLGlCQUFpQix3Q0FBd0MsdUJBQXVCLDJEQUEyRCwrQkFBK0IsdUJBQXVCLDZCQUE2Qiw2QkFBNkIsK0JBQStCLHFCQUFxQixzQ0FBc0MsV0FBVyxTQUFTLE9BQU8sS0FBSyx3Q0FBd0MsaUNBQWlDLGlCQUFpQixPQUFPLEtBQUssbUJBQW1CLGlDQUFpQyxpQkFBaUIsT0FBTyxLQUFLLG9CQUFvQixrQ0FBa0MsaUJBQWlCLE9BQU8sS0FBSyxnREFBZ0QseUJBQXlCLDBCQUEwQix1QkFBdUIsa0RBQWtELHdDQUF3QywwREFBMEQsb0JBQW9CLGlDQUFpQywwQkFBMEIsOEJBQThCLEtBQUssd0JBQXdCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssdUJBQXVCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLEtBQUssbUNBQW1DLG9CQUFvQixnQ0FBZ0MsMEJBQTBCLG9CQUFvQixLQUFLLG1DQUFtQyxxQ0FBcUMsb0JBQW9CLG1CQUFtQixxREFBcUQsY0FBYyxvQkFBb0IseUJBQXlCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLGFBQWEsMEJBQTBCLFNBQVMsT0FBTyxvQkFBb0Isb0JBQW9CLHNCQUFzQixvQ0FBb0Msb0JBQW9CLHdCQUF3QixTQUFTLE9BQU8sS0FBSyx1QkFBdUI7QUFDOWlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIxYTYzMzM2Mzk5ZGQyYmI4MTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQWJvdXRNZV9hYm91dF9fM085XzQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLkFib3V0TWVfYWJvdXRfXzNPOV80IGgzIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcbi5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uQWJvdXRNZV9hYm91dF9fM085XzQgLkFib3V0TWVfY29udGFpbmVyX18ydWZlTyAuQWJvdXRNZV9idG5Db250YWluZXJfXzJxTlhDIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uQWJvdXRNZV9hYm91dF9fM085XzQgLkFib3V0TWVfY29udGFpbmVyX18ydWZlTyAuQWJvdXRNZV9idG5Db250YWluZXJfXzJxTlhDIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uQWJvdXRNZV9hYm91dF9fM085XzQgLkFib3V0TWVfY29udGFpbmVyX18ydWZlTyAuQWJvdXRNZV9oZWFkc2hvdF9fRlFaQzMge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogMzcwcHg7XFxufVxcbi5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIC5BYm91dE1lX2JhY2tncm91bmRfXzMwUmstIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIC5BYm91dE1lX3RleHRfXzJwTGtVIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDE1cHggMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBtYXgtd2lkdGg6IDkzNHB4O1xcbiAgfVxcbiAgLkFib3V0TWVfYWJvdXRfXzNPOV80IC5BYm91dE1lX2NvbnRhaW5lcl9fMnVmZU8gLkFib3V0TWVfdGV4dF9fMnBMa1Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDEycHggMTJweCAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDY4JTtcXG4gICAgbWluLXdpZHRoOiA1MjNweDtcXG4gICAgbWF4LXdpZHRoOiA1ODhweDtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBsZWZ0OiA1JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUlKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0Fib3V0TWUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFdBQUE7RUN3QkEsYUFBQTtFQUNBLHNCRHhCdUI7RUN5QnZCLG1CQUFBO0VBQ0EsdUJBQUE7QUR4QkY7QUFERTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUdKO0FBREU7RUNrQkEsYUFBQTtFQUNBLHNCRGxCeUI7RUNtQnpCLG1CQUFBO0VBQ0EsdUJBQUE7QURkRjtBQUxJO0VDZ0JGLGFBQUE7RUFDQSxtQkRoQjJCO0VDaUIzQixtQkFBQTtFQUNBLHVCQUFBO0FEUkY7QUFUTTtFQUNFLGdCQUFBO0FBV1I7QUFSSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQVVOO0FBUkk7RUFDRSxhQUFBO0FBVU47QUFSSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQVVOOztBQzdCRTtFRDZCRTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQUlKO0VBSEk7SUFDRSx5QkN4Qkc7SUR5QkgsVUFBQTtJQUNBLGdEQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLHlCQUFBO0VBS047QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJ2YXJpYWJsZXNcXFwiIGFzICo7XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgQGluY2x1ZGUgZmxleGJveENlbnRlcihjb2x1bW4pO1xcclxcbiAgaDMge1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICB9XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgQGluY2x1ZGUgZmxleGJveENlbnRlcihjb2x1bW4pO1xcclxcbiAgICAuYnRuQ29udGFpbmVyIHtcXHJcXG4gICAgICBAaW5jbHVkZSBmbGV4Ym94Q2VudGVyKHJvdyk7XFxyXFxuICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5oZWFkc2hvdCB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDM3MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5iYWNrZ3JvdW5kIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC50ZXh0IHtcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgIG1hcmdpbjogMTVweCAwcHg7XFxyXFxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHR2LXdoaXRlO1xcclxcbiAgICAgIC8vIHotaW5kZXg6IDE7XFxyXFxuICAgICAgLy8gYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAwcHggMTJweCAxMnB4IDBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AaW5jbHVkZSB0YWJsZXQge1xcclxcbiAgLmFib3V0IHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIG1hcmdpbjogMTVweDtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDkzNHB4O1xcclxcbiAgICAgIC50ZXh0IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0di13aGl0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA0MCUpIDBweCAxMnB4IDEycHggMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDY4JTtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogNTIzcHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDU4OHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICAgICAgbGVmdDogNSU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNSUpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi8vbWVkaWEgcXVlcmllc1xcclxcbkBtaXhpbiBwaG9uZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiB0YWJsZXQge1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gZGVza3RvcCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI0MHB4KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vL2NvbG9yIHBhbGV0dGVcXHJcXG4kbWFpbi1jb2xvcjogIzk0OGU4ODtcXHJcXG4kZGFyay1jb2xvcjogIzU3NWI0ZjtcXHJcXG4kbGlnaHQtY29sb3I6ICM4ODkxOTQ7XFxyXFxuJHR2LXdoaXRlOiAjZjJmMmYyO1xcclxcbi8vZm9udHNcXHJcXG4kdGV4dC1mb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4kdGl0bGUtZm9udDogXFxcIkJvZG9uaSBNb2RhXFxcIiwgc2VyaWY7XFxyXFxuLy9mbGV4Ym94IG1peGluc1xcclxcbkBtaXhpbiBmbGV4Ym94Q2VudGVyKCRkaXJlY3Rpb24pIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuQG1peGluIGZsZXhib3hKdXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5AbWl4aW4gZmxleEFyb3VuZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4vL1Jvd1xcclxcbkBtaXhpbiByb3coJHNwYWNpbmcpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzcGFjaW5nO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi8vY2FyZFxcclxcbkBtaXhpbiBjYXJkKCR3aWR0aCkge1xcclxcbiAgQGluY2x1ZGUgZmxleGJveENlbnRlcihjb2x1bW4pO1xcclxcbiAgd2lkdGg6ICR3aWR0aDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMHB4IDEycHggMTJweCAwcHg7XFxyXFxuICAuaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHR2LXdoaXRlO1xcclxcbiAgICAuaW52aXNpYmxlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImFib3V0XCI6IFwiQWJvdXRNZV9hYm91dF9fM085XzRcIixcblx0XCJjb250YWluZXJcIjogXCJBYm91dE1lX2NvbnRhaW5lcl9fMnVmZU9cIixcblx0XCJidG5Db250YWluZXJcIjogXCJBYm91dE1lX2J0bkNvbnRhaW5lcl9fMnFOWENcIixcblx0XCJoZWFkc2hvdFwiOiBcIkFib3V0TWVfaGVhZHNob3RfX0ZRWkMzXCIsXG5cdFwiYmFja2dyb3VuZFwiOiBcIkFib3V0TWVfYmFja2dyb3VuZF9fMzBSay1cIixcblx0XCJ0ZXh0XCI6IFwiQWJvdXRNZV90ZXh0X18ycExrVVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=