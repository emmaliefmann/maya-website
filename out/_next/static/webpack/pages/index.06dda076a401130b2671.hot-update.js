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
___CSS_LOADER_EXPORT___.push([module.i, ".AboutMe_about__3O9_4 {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.AboutMe_about__3O9_4 h3 {\n  font-size: 35px;\n  letter-spacing: 2px;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_btnContainer__2qNXC {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_btnContainer__2qNXC button {\n  margin-top: 30px;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_headshot__FQZC3 {\n  width: 90%;\n  max-width: 370px;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_background__30Rk- {\n  display: none;\n}\n.AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_text__2pLkU {\n  width: 90%;\n  margin: 15px 0px;\n}\n\n@media (min-width: 768px) {\n  .AboutMe_about__3O9_4 .AboutMe_container__2ufeO {\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 100%;\n    margin: 15px;\n    position: relative;\n    padding-right: 15px;\n    max-width: 934px;\n  }\n  .AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_background__30Rk- {\n    display: block;\n    width: 200px;\n    position: absolute;\n  }\n  .AboutMe_about__3O9_4 .AboutMe_container__2ufeO .AboutMe_text__2pLkU {\n    background-color: #f2f2f2;\n    z-index: 1;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 12px 12px 0px;\n    position: absolute;\n    width: 68%;\n    min-width: 523px;\n    max-width: 588px;\n    padding: 10px 15px;\n    left: 5%;\n    transform: translateX(5%);\n    bottom: 5%;\n  }\n}", "",{"version":3,"sources":["webpack://AboutMe.module.scss","webpack://variables.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;ECwBA,aAAA;EACA,sBDxBuB;ECyBvB,mBAAA;EACA,uBAAA;ADxBF;AADE;EACE,eAAA;EACA,mBAAA;AAGJ;AADE;ECkBA,aAAA;EACA,sBDlByB;ECmBzB,mBAAA;EACA,uBAAA;ADdF;AALI;ECgBF,aAAA;EACA,mBDhB2B;ECiB3B,mBAAA;EACA,uBAAA;ADRF;AATM;EACE,gBAAA;AAWR;AARI;EACE,UAAA;EACA,gBAAA;AAUN;AARI;EACE,aAAA;AAUN;AARI;EACE,UAAA;EACA,gBAAA;AAUN;;AC7BE;ED6BE;IACE,mBAAA;IACA,yBAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,mBAAA;IACA,gBAAA;EAIJ;EAHI;IACE,cAAA;IACA,YAAA;IACA,kBAAA;EAKN;EAHI;IACE,yBC7BG;ID8BH,UAAA;IACA,gDAAA;IACA,kBAAA;IACA,UAAA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;IACA,QAAA;IACA,yBAAA;IACA,UAAA;EAKN;AACF","sourcesContent":["@use \"variables\" as *;\r\n\r\n.about {\r\n  width: 100%;\r\n  @include flexboxCenter(column);\r\n  h3 {\r\n    font-size: 35px;\r\n    letter-spacing: 2px;\r\n  }\r\n  .container {\r\n    @include flexboxCenter(column);\r\n    .btnContainer {\r\n      @include flexboxCenter(row);\r\n      button {\r\n        margin-top: 30px;\r\n      }\r\n    }\r\n    .headshot {\r\n      width: 90%;\r\n      max-width: 370px;\r\n    }\r\n    .background {\r\n      display: none;\r\n    }\r\n    .text {\r\n      width: 90%;\r\n      margin: 15px 0px;\r\n      // background-color: $tv-white;\r\n      // z-index: 1;\r\n      // box-shadow: rgb(0 0 0 / 40%) 0px 12px 12px 0px;\r\n    }\r\n  }\r\n}\r\n\r\n@include tablet {\r\n  .about {\r\n    .container {\r\n      flex-direction: row;\r\n      justify-content: flex-end;\r\n      width: 100%;\r\n      margin: 15px;\r\n      position: relative;\r\n      padding-right: 15px;\r\n      max-width: 934px;\r\n      .background {\r\n        display: block;\r\n        width: 200px;\r\n        position: absolute;\r\n      }\r\n      .text {\r\n        background-color: $tv-white;\r\n        z-index: 1;\r\n        box-shadow: rgb(0 0 0 / 40%) 0px 12px 12px 0px;\r\n        position: absolute;\r\n        width: 68%;\r\n        min-width: 523px;\r\n        max-width: 588px;\r\n        padding: 10px 15px;\r\n        left: 5%;\r\n        transform: translateX(5%);\r\n        bottom: 5%;\r\n      }\r\n    }\r\n  }\r\n}\r\n","//media queries\r\n@mixin phone {\r\n  @media (max-width: 414px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin tablet {\r\n  @media (min-width: 768px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin desktop {\r\n  @media (min-width: 1240px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n//color palette\r\n$main-color: #948e88;\r\n$dark-color: #575b4f;\r\n$light-color: #889194;\r\n$tv-white: #f2f2f2;\r\n//fonts\r\n$text-font: \"Roboto\", sans-serif;\r\n$title-font: \"Bodoni Moda\", serif;\r\n//flexbox mixins\r\n@mixin flexboxCenter($direction) {\r\n  display: flex;\r\n  flex-direction: $direction;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n@mixin flexboxJust {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n@mixin flexAround {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n//Row\r\n@mixin row($spacing) {\r\n  display: flex;\r\n  justify-content: $spacing;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n//card\r\n@mixin card($width) {\r\n  @include flexboxCenter(column);\r\n  width: $width;\r\n  margin: 20px;\r\n  box-shadow: rgb(0 0 0 / 40%) 0px 12px 12px 0px;\r\n  .image {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    img {\r\n      max-width: 100%;\r\n    }\r\n  }\r\n  .description {\r\n    width: 100%;\r\n    padding: 10px;\r\n    background-color: $tv-white;\r\n    .invisible {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0Fib3V0TWUubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcsNEJBQTRCLG9CQUFvQix3QkFBd0IsR0FBRyxtREFBbUQsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcsZ0ZBQWdGLGtCQUFrQix3QkFBd0Isd0JBQXdCLDRCQUE0QixHQUFHLHVGQUF1RixxQkFBcUIsR0FBRyw0RUFBNEUsZUFBZSxxQkFBcUIsR0FBRyw4RUFBOEUsa0JBQWtCLEdBQUcsd0VBQXdFLGVBQWUscUJBQXFCLEdBQUcsK0JBQStCLHFEQUFxRCwwQkFBMEIsZ0NBQWdDLGtCQUFrQixtQkFBbUIseUJBQXlCLDBCQUEwQix1QkFBdUIsS0FBSyxnRkFBZ0YscUJBQXFCLG1CQUFtQix5QkFBeUIsS0FBSywwRUFBMEUsZ0NBQWdDLGlCQUFpQix1REFBdUQseUJBQXlCLGlCQUFpQix1QkFBdUIsdUJBQXVCLHlCQUF5QixlQUFlLGdDQUFnQyxpQkFBaUIsS0FBSyxHQUFHLE9BQU8sK0dBQStHLFVBQVUsV0FBVyxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxXQUFXLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssaURBQWlELGdCQUFnQixrQkFBa0IscUNBQXFDLFVBQVUsd0JBQXdCLDRCQUE0QixPQUFPLGtCQUFrQix1Q0FBdUMsdUJBQXVCLHNDQUFzQyxrQkFBa0IsNkJBQTZCLFdBQVcsU0FBUyxtQkFBbUIscUJBQXFCLDJCQUEyQixTQUFTLHFCQUFxQix3QkFBd0IsU0FBUyxlQUFlLHFCQUFxQiwyQkFBMkIseUNBQXlDLHdCQUF3Qiw0REFBNEQsU0FBUyxPQUFPLEtBQUsseUJBQXlCLGNBQWMsb0JBQW9CLDhCQUE4QixvQ0FBb0Msc0JBQXNCLHVCQUF1Qiw2QkFBNkIsOEJBQThCLDJCQUEyQix1QkFBdUIsMkJBQTJCLHlCQUF5QiwrQkFBK0IsV0FBVyxpQkFBaUIsd0NBQXdDLHVCQUF1QiwyREFBMkQsK0JBQStCLHVCQUF1Qiw2QkFBNkIsNkJBQTZCLCtCQUErQixxQkFBcUIsc0NBQXNDLHVCQUF1QixXQUFXLFNBQVMsT0FBTyxLQUFLLHdDQUF3QyxpQ0FBaUMsaUJBQWlCLE9BQU8sS0FBSyxtQkFBbUIsaUNBQWlDLGlCQUFpQixPQUFPLEtBQUssb0JBQW9CLGtDQUFrQyxpQkFBaUIsT0FBTyxLQUFLLGdEQUFnRCx5QkFBeUIsMEJBQTBCLHVCQUF1QixrREFBa0Qsd0NBQXdDLDBEQUEwRCxvQkFBb0IsaUNBQWlDLDBCQUEwQiw4QkFBOEIsS0FBSyx3QkFBd0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsS0FBSyx1QkFBdUIsb0JBQW9CLG9DQUFvQywwQkFBMEIsS0FBSyxtQ0FBbUMsb0JBQW9CLGdDQUFnQywwQkFBMEIsb0JBQW9CLEtBQUssbUNBQW1DLHFDQUFxQyxvQkFBb0IsbUJBQW1CLHFEQUFxRCxjQUFjLG9CQUFvQix5QkFBeUIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsYUFBYSwwQkFBMEIsU0FBUyxPQUFPLG9CQUFvQixvQkFBb0Isc0JBQXNCLG9DQUFvQyxvQkFBb0Isd0JBQXdCLFNBQVMsT0FBTyxLQUFLLHVCQUF1QjtBQUNwNUs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDZkZGEwNzZhNDAxMTMwYjI2NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BYm91dE1lX2Fib3V0X18zTzlfNCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uQWJvdXRNZV9hYm91dF9fM085XzQgaDMge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuLkFib3V0TWVfYWJvdXRfXzNPOV80IC5BYm91dE1lX2NvbnRhaW5lcl9fMnVmZU8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIC5BYm91dE1lX2J0bkNvbnRhaW5lcl9fMnFOWEMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIC5BYm91dE1lX2J0bkNvbnRhaW5lcl9fMnFOWEMgYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIC5BYm91dE1lX2hlYWRzaG90X19GUVpDMyB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiAzNzBweDtcXG59XFxuLkFib3V0TWVfYWJvdXRfXzNPOV80IC5BYm91dE1lX2NvbnRhaW5lcl9fMnVmZU8gLkFib3V0TWVfYmFja2dyb3VuZF9fMzBSay0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLkFib3V0TWVfYWJvdXRfXzNPOV80IC5BYm91dE1lX2NvbnRhaW5lcl9fMnVmZU8gLkFib3V0TWVfdGV4dF9fMnBMa1Uge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMTVweCAwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLkFib3V0TWVfYWJvdXRfXzNPOV80IC5BYm91dE1lX2NvbnRhaW5lcl9fMnVmZU8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIG1heC13aWR0aDogOTM0cHg7XFxuICB9XFxuICAuQWJvdXRNZV9hYm91dF9fM085XzQgLkFib3V0TWVfY29udGFpbmVyX18ydWZlTyAuQWJvdXRNZV9iYWNrZ3JvdW5kX18zMFJrLSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG4gIC5BYm91dE1lX2Fib3V0X18zTzlfNCAuQWJvdXRNZV9jb250YWluZXJfXzJ1ZmVPIC5BYm91dE1lX3RleHRfXzJwTGtVIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAxMnB4IDEycHggMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA2OCU7XFxuICAgIG1pbi13aWR0aDogNTIzcHg7XFxuICAgIG1heC13aWR0aDogNTg4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgbGVmdDogNSU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1JSk7XFxuICAgIGJvdHRvbTogNSU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9BYm91dE1lLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFBO0VDd0JBLGFBQUE7RUFDQSxzQkR4QnVCO0VDeUJ2QixtQkFBQTtFQUNBLHVCQUFBO0FEeEJGO0FBREU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQURFO0VDa0JBLGFBQUE7RUFDQSxzQkRsQnlCO0VDbUJ6QixtQkFBQTtFQUNBLHVCQUFBO0FEZEY7QUFMSTtFQ2dCRixhQUFBO0VBQ0EsbUJEaEIyQjtFQ2lCM0IsbUJBQUE7RUFDQSx1QkFBQTtBRFJGO0FBVE07RUFDRSxnQkFBQTtBQVdSO0FBUkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFVTjtBQVJJO0VBQ0UsYUFBQTtBQVVOO0FBUkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFVTjs7QUM3QkU7RUQ2QkU7SUFDRSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFJSjtFQUhJO0lBQ0UsY0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUtOO0VBSEk7SUFDRSx5QkM3Qkc7SUQ4QkgsVUFBQTtJQUNBLGdEQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLHlCQUFBO0lBQ0EsVUFBQTtFQUtOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwidmFyaWFibGVzXFxcIiBhcyAqO1xcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIEBpbmNsdWRlIGZsZXhib3hDZW50ZXIoY29sdW1uKTtcXHJcXG4gIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgfVxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXhib3hDZW50ZXIoY29sdW1uKTtcXHJcXG4gICAgLmJ0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgQGluY2x1ZGUgZmxleGJveENlbnRlcihyb3cpO1xcclxcbiAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZHNob3Qge1xcclxcbiAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAzNzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAudGV4dCB7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICBtYXJnaW46IDE1cHggMHB4O1xcclxcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICR0di13aGl0ZTtcXHJcXG4gICAgICAvLyB6LWluZGV4OiAxO1xcclxcbiAgICAgIC8vIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMHB4IDEycHggMTJweCAwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGluY2x1ZGUgdGFibGV0IHtcXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXJnaW46IDE1cHg7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA5MzRweDtcXHJcXG4gICAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLnRleHQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHR2LXdoaXRlO1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMHB4IDEycHggMTJweCAwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogNjglO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA1MjNweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNTg4cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgICAgICBsZWZ0OiA1JTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1JSk7XFxyXFxuICAgICAgICBib3R0b206IDUlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi8vbWVkaWEgcXVlcmllc1xcclxcbkBtaXhpbiBwaG9uZSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiB0YWJsZXQge1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gZGVza3RvcCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI0MHB4KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vL2NvbG9yIHBhbGV0dGVcXHJcXG4kbWFpbi1jb2xvcjogIzk0OGU4ODtcXHJcXG4kZGFyay1jb2xvcjogIzU3NWI0ZjtcXHJcXG4kbGlnaHQtY29sb3I6ICM4ODkxOTQ7XFxyXFxuJHR2LXdoaXRlOiAjZjJmMmYyO1xcclxcbi8vZm9udHNcXHJcXG4kdGV4dC1mb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4kdGl0bGUtZm9udDogXFxcIkJvZG9uaSBNb2RhXFxcIiwgc2VyaWY7XFxyXFxuLy9mbGV4Ym94IG1peGluc1xcclxcbkBtaXhpbiBmbGV4Ym94Q2VudGVyKCRkaXJlY3Rpb24pIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuQG1peGluIGZsZXhib3hKdXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5AbWl4aW4gZmxleEFyb3VuZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4vL1Jvd1xcclxcbkBtaXhpbiByb3coJHNwYWNpbmcpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzcGFjaW5nO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi8vY2FyZFxcclxcbkBtaXhpbiBjYXJkKCR3aWR0aCkge1xcclxcbiAgQGluY2x1ZGUgZmxleGJveENlbnRlcihjb2x1bW4pO1xcclxcbiAgd2lkdGg6ICR3aWR0aDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMHB4IDEycHggMTJweCAwcHg7XFxyXFxuICAuaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHR2LXdoaXRlO1xcclxcbiAgICAuaW52aXNpYmxlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImFib3V0XCI6IFwiQWJvdXRNZV9hYm91dF9fM085XzRcIixcblx0XCJjb250YWluZXJcIjogXCJBYm91dE1lX2NvbnRhaW5lcl9fMnVmZU9cIixcblx0XCJidG5Db250YWluZXJcIjogXCJBYm91dE1lX2J0bkNvbnRhaW5lcl9fMnFOWENcIixcblx0XCJoZWFkc2hvdFwiOiBcIkFib3V0TWVfaGVhZHNob3RfX0ZRWkMzXCIsXG5cdFwiYmFja2dyb3VuZFwiOiBcIkFib3V0TWVfYmFja2dyb3VuZF9fMzBSay1cIixcblx0XCJ0ZXh0XCI6IFwiQWJvdXRNZV90ZXh0X18ycExrVVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=