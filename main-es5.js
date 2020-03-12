function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");

    var routes = [{
      path: "",
      redirectTo: "/welcome",
      pathMatch: "full"
    }, {
      path: "welcome",
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'reviewtimekeeper';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWdpbWEvRG9jdW1lbnRzL19ERVYvR0lUL2FuZ3VsYXIvcmV2aWV3dGltZWtlZXBlci9yZXZpZXd0aW1la2VlcGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4gXG5tYXQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuIFxubWFpbiB7XG4gICAgcGFkZGluZzogMTBweDtcbn0iLCJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/material.module */
    "./src/app/shared/material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _keeper_keeper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./keeper/keeper.component */
    "./src/app/keeper/keeper.component.ts");
    /* harmony import */


    var _shared_timertest_timertest_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/timertest/timertest.component */
    "./src/app/shared/timertest/timertest.component.ts");
    /* harmony import */


    var _components_subjectcompo_subjectcompo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/subjectcompo/subjectcompo.component */
    "./src/app/components/subjectcompo/subjectcompo.component.ts");
    /* harmony import */


    var _components_subject_display_subject_display_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/subject-display/subject-display.component */
    "./src/app/components/subject-display/subject-display.component.ts");
    /* harmony import */


    var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/timer/timer.component */
    "./src/app/components/timer/timer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"], _keeper_keeper_component__WEBPACK_IMPORTED_MODULE_11__["KeeperComponent"], _shared_timertest_timertest_component__WEBPACK_IMPORTED_MODULE_12__["TimertestComponent"], _components_subjectcompo_subjectcompo_component__WEBPACK_IMPORTED_MODULE_13__["SubjectcompoComponent"], _components_subject_display_subject_display_component__WEBPACK_IMPORTED_MODULE_14__["SubjectDisplayComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_15__["TimerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"], _keeper_keeper_component__WEBPACK_IMPORTED_MODULE_11__["KeeperComponent"], _shared_timertest_timertest_component__WEBPACK_IMPORTED_MODULE_12__["TimertestComponent"], _components_subjectcompo_subjectcompo_component__WEBPACK_IMPORTED_MODULE_13__["SubjectcompoComponent"], _components_subject_display_subject_display_component__WEBPACK_IMPORTED_MODULE_14__["SubjectDisplayComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_15__["TimerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/subject-display/subject-display.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/subject-display/subject-display.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SubjectDisplayComponent */

  /***/
  function srcAppComponentsSubjectDisplaySubjectDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectDisplayComponent", function () {
      return SubjectDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SubjectDisplayComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.minuteRest, ":", ctx_r2.secondRest, "");
      }
    }

    function SubjectDisplayComponent_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.minuteRest, ":0", ctx_r3.secondRest, "");
      }
    }

    function SubjectDisplayComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubjectDisplayComponent_div_7_div_1_Template, 2, 2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubjectDisplayComponent_div_7_div_2_Template, 2, 2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.secondRest >= 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.secondRest < 10);
      }
    }

    function SubjectDisplayComponent_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("- ", ctx_r4.minuteRest, ":", ctx_r4.secondRest, "");
      }
    }

    function SubjectDisplayComponent_div_8_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("- ", ctx_r5.minuteRest, ":0", ctx_r5.secondRest, "");
      }
    }

    function SubjectDisplayComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubjectDisplayComponent_div_8_div_1_Template, 2, 2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubjectDisplayComponent_div_8_div_2_Template, 2, 2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.secondRest >= 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.secondRest < 10);
      }
    }

    var SubjectDisplayComponent =
    /*#__PURE__*/
    function () {
      function SubjectDisplayComponent(dialogRef, data) {
        _classCallCheck(this, SubjectDisplayComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.timeLeft = this.data.timeLeft;
        this.isPaused = false;
      }

      _createClass(SubjectDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startTimer();
          this.colorBg = "good";
          this.isReverseTimer = false;
          this.timeStarted = this.timeLeft;
          var percent = 40;
          this.time25 = parseInt("" + Math.round(this.timeStarted * percent) / 100);
          this.minute25 = this.getMinutes(this.time25);
          this.second25 = this.getSecond(this.time25);
          percent = 25;
          this.time5 = parseInt("" + Math.round(this.timeStarted * percent) / 100);
          this.minute5 = this.getMinutes(this.time5);
          this.second5 = this.getSecond(this.time5);
          console.log("time25 ", this.time25);
          console.log("time5 ", this.time5);
          this.minuteRest = this.getMinutes(this.timeStarted);
          this.secondRest = this.getSecond(this.timeStarted);
          /* console.log("time minute ", this.minuteRest);
          console.log("time second ", this.secondRest);  */
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this = this;

          this.isPaused = false;
          this.interval = setInterval(function () {
            if (_this.secondRest > 0) {
              _this.secondRest--;
            } else if (_this.minuteRest > 0 && _this.secondRest == 0) {
              _this.minuteRest--;

              var secondTotal = _this.getMinutes(_this.minuteRest);

              secondTotal = +59;
              _this.secondRest = _this.getSecond(secondTotal);
            } else {
              clearInterval(_this.interval); //this.closerPopup();

              _this.startReverseTimer();
            }

            _this.lastButNotLeast();
          }, 1000);
        }
      }, {
        key: "startReverseTimer",
        value: function startReverseTimer() {
          var _this2 = this;

          this.isReverseTimer = true;
          this.isPaused = false;
          this.colorBg = "endsubjectreview";
          this.interval = setInterval(function () {
            if (_this2.secondRest < 59) {
              _this2.secondRest++;
            } else if (_this2.minuteRest >= 0 && _this2.secondRest == 59) {
              _this2.minuteRest++;

              var secondTotal = _this2.getMinutes(_this2.minuteRest);

              secondTotal = 0;
              _this2.secondRest = _this2.getSecond(secondTotal);
            } else {
              clearInterval(_this2.interval);
            }
          }, 1000);
        }
      }, {
        key: "closerPopup",
        value: function closerPopup() {
          var _this3 = this;

          // Close the popup 2 seconds after the end of the subject
          var timeToClosePopup = 10;
          var closePopupInterval = setInterval(function () {
            _this3.colorBg = "endsubjectreview";

            if (timeToClosePopup > 0) {
              timeToClosePopup--;
            } else {
              clearInterval(closePopupInterval); // The time is realy finish.

              _this3.dialogRef.close("ok");
            }
          }, 1000);
        }
      }, {
        key: "pauseTimer",
        value: function pauseTimer() {
          if (this.isPaused) {
            this.startTimer();
          } else {
            clearInterval(this.interval);
            this.isPaused = true;
          }
        }
      }, {
        key: "lastButNotLeast",
        value: function lastButNotLeast() {
          if (this.minute25 == this.minuteRest && this.second25 == this.secondRest) {
            this.colorBg = "warning";
          }

          if (this.minute5 == this.minuteRest && this.second5 == this.secondRest) {
            this.colorBg = "error";
          }
        }
      }, {
        key: "closeDial",
        value: function closeDial() {
          this.isReverseTimer = false;

          if (this.minuteRest != 0) {
            this.dialogRef.close(this.minuteRest);
          } else {
            this.dialogRef.close("0");
          }
        }
      }, {
        key: "getMinutes",
        value: function getMinutes(val) {
          return parseInt("" + val / 60);
        }
      }, {
        key: "getSecond",
        value: function getSecond(val) {
          return val % 60;
        }
      }]);

      return SubjectDisplayComponent;
    }();

    SubjectDisplayComponent.ɵfac = function SubjectDisplayComponent_Factory(t) {
      return new (t || SubjectDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    SubjectDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubjectDisplayComponent,
      selectors: [["app-subject-display"]],
      decls: 16,
      vars: 5,
      consts: [[1, "display-timer"], [3, "ngClass"], [1, "container"], [1, "title-view"], [1, "who-view"], [4, "ngIf"], [1, "space-view"], [3, "keydown.backspace"], ["mat-raised-button", "", 3, "keydown.backspace", "click"], ["mat-raised-button", "", 3, "click"], ["class", "lasttime-size", 4, "ngIf"], [1, "lasttime-size"]],
      template: function SubjectDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SubjectDisplayComponent_div_7_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SubjectDisplayComponent_div_8_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace", function SubjectDisplayComponent_Template_p_keydown_backspace_10_listener($event) {
            return ctx.pauseTimer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hit SPACE to PAUSE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace", function SubjectDisplayComponent_Template_button_keydown_backspace_12_listener($event) {
            return ctx.pauseTimer();
          })("click", function SubjectDisplayComponent_Template_button_click_12_listener($event) {
            return ctx.pauseTimer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PAUSE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectDisplayComponent_Template_button_click_14_listener($event) {
            return ctx.closeDial();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CLOSE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colorBg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.who);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isReverseTimer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isReverseTimer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: ["@charset \"UTF-8\";\n.error[_ngcontent-%COMP%] {\n  background: rgba(247, 5, 25, 0.8);\n  text-align: center;\n  height: 100%;\n}\n.warning[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 34, 0.8);\n  text-align: center;\n  height: 100%;\n}\n.good[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.8);\n  text-align: center;\n  height: 100%;\n}\n.lasttime-size[_ngcontent-%COMP%] {\n  color: white;\n  \n  font-size: 294.857px;\n  font-weight: bold;\n  text-shadow: 0 0 32px rgba(0, 0, 0, 0.3);\n  padding-top: 57px;\n}\n.title-view[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n  font-weight: bold;\n  text-shadow: 0 0 32px rgba(0, 0, 0, 0.3);\n}\n.who-view[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 43px;\n  font-weight: bold;\n  text-shadow: 0 0 32px rgba(0, 0, 0, 0.3);\n}\n.space-view[_ngcontent-%COMP%] {\n  color: white;\n  font-size: x-large;\n  text-shadow: 0 0 32px rgba(0, 0, 0, 0.3);\n  padding-top: 57px;\n}\n.display-timer[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.display-chiffre[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.container[_ngcontent-%COMP%] {\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column wrap;\n  \n  justify-content: space-around;\n  height: 100%;\n}\n\n@-webkit-keyframes wheelHueColor {\n  from, to {\n    background: #c32283;\n  }\n  10% {\n    background: #bd2828;\n  }\n  20% {\n    background: #cf8517;\n  }\n  30% {\n    background: #fcf802;\n  }\n  40% {\n    background: #eae748;\n  }\n  50% {\n    background: #fd9712;\n  }\n  60% {\n    background: #f48f0b;\n  }\n  70% {\n    background: #ff5842;\n  }\n  80% {\n    background: #f90101;\n  }\n  90% {\n    background: #ee1b1b;\n  }\n}\n@keyframes wheelHueColor {\n  from, to {\n    background: #c32283;\n  }\n  10% {\n    background: #bd2828;\n  }\n  20% {\n    background: #cf8517;\n  }\n  30% {\n    background: #fcf802;\n  }\n  40% {\n    background: #eae748;\n  }\n  50% {\n    background: #fd9712;\n  }\n  60% {\n    background: #f48f0b;\n  }\n  70% {\n    background: #ff5842;\n  }\n  80% {\n    background: #f90101;\n  }\n  90% {\n    background: #ee1b1b;\n  }\n}\n.endsubjectreview[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 100%;\n  \n  background: #c32283;\n  -webkit-animation: wheelHueColor 1s infinite;\n          animation: wheelHueColor 1s infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0LWRpc3BsYXkvc3ViamVjdC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL25lZ2ltYS9Eb2N1bWVudHMvX0RFVi9HSVQvYW5ndWxhci9yZXZpZXd0aW1la2VlcGVyL3Jldmlld3RpbWVrZWVwZXIvc3JjL2FwcC9jb21wb25lbnRzL3N1YmplY3QtZGlzcGxheS9zdWJqZWN0LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURDSjtBQ0VBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURDSjtBQ0VBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURDSjtBQ0VBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBRENKO0FDRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QURDSjtBQ0VBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FEQ0o7QUNFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QURDSjtBQ0VBO0VBQ0ksWUFBQTtBRENKO0FDRUE7RUFDSSxZQUFBO0FEQ0o7QUNHQTtFQUNJLDBCQUFBO1VBQUEsb0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFFQSwwREFBQTtFQUNBLDZCQUFBO0VBRUEsWUFBQTtBREZKO0FDS0EsY0FBQTtBQUNBO0VBQ0k7SUFBVyxtQkFBQTtFRERiO0VDRUU7SUFBVyxtQkFBQTtFRENiO0VDQUU7SUFBVyxtQkFBQTtFREdiO0VDRkU7SUFBVyxtQkFBQTtFREtiO0VDSkU7SUFBVyxtQkFBQTtFRE9iO0VDTkU7SUFBVyxtQkFBQTtFRFNiO0VDUkU7SUFBVyxtQkFBQTtFRFdiO0VDVkU7SUFBVyxtQkFBQTtFRGFiO0VDWkU7SUFBVyxtQkFBQTtFRGViO0VDZEU7SUFBVyxtQkFBQTtFRGlCYjtBQUNGO0FDNUJBO0VBQ0k7SUFBVyxtQkFBQTtFRERiO0VDRUU7SUFBVyxtQkFBQTtFRENiO0VDQUU7SUFBVyxtQkFBQTtFREdiO0VDRkU7SUFBVyxtQkFBQTtFREtiO0VDSkU7SUFBVyxtQkFBQTtFRE9iO0VDTkU7SUFBVyxtQkFBQTtFRFNiO0VDUkU7SUFBVyxtQkFBQTtFRFdiO0VDVkU7SUFBVyxtQkFBQTtFRGFiO0VDWkU7SUFBVyxtQkFBQTtFRGViO0VDZEU7SUFBVyxtQkFBQTtFRGlCYjtBQUNGO0FDZkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtBRGlCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViamVjdC1kaXNwbGF5L3N1YmplY3QtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5lcnJvciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCA1LCAyNSwgMC44KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi53YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDg3LCAzNCwgMC44KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nb29kIHtcbiAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC44KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYXN0dGltZS1zaXplIHtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiAzMjMuODU3cHggKi9cbiAgZm9udC1zaXplOiAyOTQuODU3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMCAwIDMycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nLXRvcDogNTdweDtcbn1cblxuLnRpdGxlLXZpZXcge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMzJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi53aG8tdmlldyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0M3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnNwYWNlLXZpZXcge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZy10b3A6IDU3cHg7XG59XG5cbi5kaXNwbGF5LXRpbWVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGlzcGxheS1jaGlmZnJlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gIC8qIFRoZW4gd2UgZGVmaW5lIGhvdyBpcyBkaXN0cmlidXRlZCB0aGUgcmVtYWluaW5nIHNwYWNlICovXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIEFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyB3aGVlbEh1ZUNvbG9yIHtcbiAgZnJvbSwgdG8ge1xuICAgIGJhY2tncm91bmQ6ICNjMzIyODM7XG4gIH1cbiAgMTAlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYmQyODI4O1xuICB9XG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZDogI2NmODUxNztcbiAgfVxuICAzMCUge1xuICAgIGJhY2tncm91bmQ6ICNmY2Y4MDI7XG4gIH1cbiAgNDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlNzQ4O1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZDogI2ZkOTcxMjtcbiAgfVxuICA2MCUge1xuICAgIGJhY2tncm91bmQ6ICNmNDhmMGI7XG4gIH1cbiAgNzAlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY1ODQyO1xuICB9XG4gIDgwJSB7XG4gICAgYmFja2dyb3VuZDogI2Y5MDEwMTtcbiAgfVxuICA5MCUge1xuICAgIGJhY2tncm91bmQ6ICNlZTFiMWI7XG4gIH1cbn1cbi5lbmRzdWJqZWN0cmV2aWV3IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qaHNsID0gVGVpbnRlIChIKSwgbGEgU2F0dXJhdGlvbiAoUykgZXQgbGEgTHVtacOocmUgKEwpKi9cbiAgYmFja2dyb3VuZDogI2MzMjI4MztcbiAgYW5pbWF0aW9uOiB3aGVlbEh1ZUNvbG9yIDFzIGluZmluaXRlO1xufSIsIlxuLmVycm9yIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgNSwgMjUsIDAuOCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiAgXG4ud2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDg3LCAzNCwgMC44KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuICBcbi5nb29kIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYXN0dGltZS1zaXplIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLyogMzIzLjg1N3B4ICovXG4gICAgZm9udC1zaXplOiAyOTQuODU3cHg7ICAgIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcGFkZGluZy10b3A6IDU3cHg7XG59XG5cbi50aXRsZS12aWV3IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi53aG8tdmlldyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNDNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uc3BhY2UtdmlldyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmctdG9wOiA1N3B4O1xufVxuXG4uZGlzcGxheS10aW1lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGlzcGxheS1jaGlmZnJlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLmNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBcbiAgICAvKiBUaGVuIHdlIGRlZmluZSBob3cgaXMgZGlzdHJpYnV0ZWQgdGhlIHJlbWFpbmluZyBzcGFjZSAqL1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBBbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgd2hlZWxIdWVDb2xvciB7XG4gICAgZnJvbSwgdG8geyBiYWNrZ3JvdW5kOiBoc2woMzI0LCA3MCUsIDQ1JSk7IH1cbiAgICAxMCUgICAgICB7IGJhY2tncm91bmQ6IGhzbCgzNjAsIDY1JSwgNDUlKTsgfVxuICAgIDIwJSAgICAgIHsgYmFja2dyb3VuZDogaHNsKCAzNiwgODAlLCA0NSUpOyB9XG4gICAgMzAlICAgICAgeyBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNDgsIDIpOyB9XG4gICAgNDAlICAgICAgeyBiYWNrZ3JvdW5kOiBoc2woNTksIDc5JSwgNjAlKTsgfVxuICAgIDUwJSAgICAgIHsgYmFja2dyb3VuZDogaHNsKDM0LCA5OCUsIDUzJSk7IH1cbiAgICA2MCUgICAgICB7IGJhY2tncm91bmQ6IGhzbCgzNCwgOTElLCA1MCUpOyB9XG4gICAgNzAlICAgICAgeyBiYWNrZ3JvdW5kOiBoc2woNywgMTAwJSwgNjMlKTsgfVxuICAgIDgwJSAgICAgIHsgYmFja2dyb3VuZDogaHNsKDAsIDk5JSwgNDklKTsgfVxuICAgIDkwJSAgICAgIHsgYmFja2dyb3VuZDogaHNsKDAsIDg2JSwgNTIlKTsgfVxufVxuXG4uZW5kc3ViamVjdHJldmlldyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKmhzbCA9IFRlaW50ZSAoSCksIGxhIFNhdHVyYXRpb24gKFMpIGV0IGxhIEx1bWnDqHJlIChMKSovXG4gICAgYmFja2dyb3VuZDogaHNsKDMyNCwgNzAlLCA0NSUpO1xuICAgIGFuaW1hdGlvbjogd2hlZWxIdWVDb2xvciAxcyBpbmZpbml0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-subject-display',
          templateUrl: './subject-display.component.html',
          styleUrls: ['./subject-display.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/subjectcompo/subjectcompo.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/subjectcompo/subjectcompo.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SubjectcompoComponent */

  /***/
  function srcAppComponentsSubjectcompoSubjectcompoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectcompoComponent", function () {
      return SubjectcompoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _subject_display_subject_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../subject-display/subject-display.component */
    "./src/app/components/subject-display/subject-display.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function SubjectcompoComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubjectcompoComponent_form_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.order = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubjectcompoComponent_form_0_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Who");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubjectcompoComponent_form_0_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.who = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time (in minute)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubjectcompoComponent_form_0_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.timeMinute = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectcompoComponent_form_0_Template_button_click_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectcompoComponent_form_0_Template_button_click_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.deleteItem();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Time not use");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SubjectcompoComponent_form_0_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.theRestTimeNotCusome = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.colorForms);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.order);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.who);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.timeMinute);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.theRestTimeNotCusome);
      }
    }

    var SubjectcompoComponent =
    /*#__PURE__*/
    function () {
      function SubjectcompoComponent(dialog) {
        _classCallCheck(this, SubjectcompoComponent);

        this.dialog = dialog;
        this.title = "";
        this.who = "";
        this.order = 0;
        this.isDel = false;
        this.istOk = false;
      }

      _createClass(SubjectcompoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this4 = this;

          this.timeLeft = this.timeMinute * 60;
          var dial = this.dialog.open(_subject_display_subject_display_component__WEBPACK_IMPORTED_MODULE_1__["SubjectDisplayComponent"], {
            position: {
              top: '25px'
            },
            disableClose: true,
            maxWidth: '100vw',
            height: '100%',
            width: '100%',
            panelClass: 'myapp-no-padding-dialog',
            data: {
              title: this.title,
              who: this.who,
              timeLeft: this.timeLeft
            }
          });
          dial.afterClosed().subscribe(function (result) {
            console.log("result", result);

            if (result == "ok") {
              _this4.colorForms = "good";
            } else {
              _this4.theRestTimeNotCusome = result;
              _this4.colorForms = "warning";
            }
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          this.isDel = true;
        }
      }, {
        key: "isDelete",
        value: function isDelete() {
          return this.isDel;
        }
      }]);

      return SubjectcompoComponent;
    }();

    SubjectcompoComponent.ɵfac = function SubjectcompoComponent_Factory(t) {
      return new (t || SubjectcompoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    SubjectcompoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubjectcompoComponent,
      selectors: [["app-subjectcompo"]],
      decls: 1,
      vars: 1,
      consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "rev-full-width"], ["matInput", "", "type", "text", "name", "order", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "title", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "who", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "timeLeft", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete this flow line", 3, "click"], ["aria-label", "Delete"]],
      template: function SubjectcompoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubjectcompoComponent_form_0_Template, 26, 6, "form", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDelete());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
      styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.warning[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 34, 0.8);\n  text-align: center;\n}\n\n.good[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.8);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWdpbWEvRG9jdW1lbnRzL19ERVYvR0lUL2FuZ3VsYXIvcmV2aWV3dGltZWtlZXBlci9yZXZpZXd0aW1la2VlcGVyL3NyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0Y29tcG8vc3ViamVjdGNvbXBvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1YmplY3Rjb21wby9zdWJqZWN0Y29tcG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREdBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBOztHQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0Y29tcG8vc3ViamVjdGNvbXBvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiAgXG4ud2FybmluZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA4NywgMzQsIDAuOCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdvb2Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIC5mdWxsLXNjcmVlbi1tb2RhbCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IG5vbmU7XG59ICovXG4iLCIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgODcsIDM0LCAwLjgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nb29kIHtcbiAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC44KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiAuZnVsbC1zY3JlZW4tbW9kYWwgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiBub25lO1xufSAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectcompoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-subjectcompo',
          templateUrl: './subjectcompo.component.html',
          styleUrls: ['./subjectcompo.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/timer/timer.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/timer/timer.component.ts ***!
    \*****************************************************/

  /*! exports provided: TimerComponent */

  /***/
  function srcAppComponentsTimerTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerComponent", function () {
      return TimerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/timer */
    "./src/app/shared/timer.ts");
    /* harmony import */


    var src_app_shared_timerState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/timerState */
    "./src/app/shared/timerState.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function TimerComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_button_9_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.backward();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "erase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_button_10_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.stop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_button_11_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.play();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.btnPlay);
      }
    }

    var TimerComponent =
    /*#__PURE__*/
    function () {
      function TimerComponent() {
        _classCallCheck(this, TimerComponent);

        this.btnPlay = 'Start Review';
        this.timer = new src_app_shared_timer__WEBPACK_IMPORTED_MODULE_1__["Timer"]();
        this.state = new src_app_shared_timerState__WEBPACK_IMPORTED_MODULE_2__["TimerState"]();
      }

      _createClass(TimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "play",
        value: function play() {
          this.timer.start();
          this.state.setPlay();
          this.btnPlay = 'Continue';
        }
      }, {
        key: "stop",
        value: function stop() {
          this.timer.stop();
          this.state.setStop();
        }
      }, {
        key: "backward",
        value: function backward() {
          this.timer.reset();
          this.state.setBackward();
          this.btnPlay = 'Start Review';
        }
      }]);

      return TimerComponent;
    }();

    TimerComponent.ɵfac = function TimerComponent_Factory(t) {
      return new (t || TimerComponent)();
    };

    TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimerComponent,
      selectors: [["app-timer"]],
      decls: 12,
      vars: 5,
      consts: [["color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["color", "warn", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", 3, "click"], ["color", "warn", "mat-raised-button", "", 3, "click"]],
      template: function TimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TimerComponent_button_9_Template, 2, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimerComponent_button_10_Template, 2, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TimerComponent_button_11_Template, 2, 1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timer.minutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timer.secondes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state.backward);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state.stop);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state.play);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timer',
          templateUrl: './timer.component.html',
          styleUrls: ['./timer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/keeper/keeper.component.ts":
  /*!********************************************!*\
    !*** ./src/app/keeper/keeper.component.ts ***!
    \********************************************/

  /*! exports provided: KeeperComponent */

  /***/
  function srcAppKeeperKeeperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeeperComponent", function () {
      return KeeperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_subjectcompo_subjectcompo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/subjectcompo/subjectcompo.component */
    "./src/app/components/subjectcompo/subjectcompo.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = ["appenHere"];

    var KeeperComponent =
    /*#__PURE__*/
    function () {
      function KeeperComponent(resolver) {
        _classCallCheck(this, KeeperComponent);

        this.resolver = resolver;
      }

      _createClass(KeeperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addSubject",
        value: function addSubject() {
          var childComponent = this.resolver.resolveComponentFactory(_components_subjectcompo_subjectcompo_component__WEBPACK_IMPORTED_MODULE_1__["SubjectcompoComponent"]);
          this.componentRef = this.target.createComponent(childComponent);
        }
      }]);

      return KeeperComponent;
    }();

    KeeperComponent.ɵfac = function KeeperComponent_Factory(t) {
      return new (t || KeeperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    KeeperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KeeperComponent,
      selectors: [["app-keeper"]],
      viewQuery: function KeeperComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.target = _t.first);
        }
      },
      decls: 12,
      vars: 0,
      consts: [["mat-card-avatar", "", 1, "example-header-image"], [1, "mat-elevation-z8"], [1, "row"], ["appenHere", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function KeeperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Subjects ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeeperComponent_Template_button_click_10_listener($event) {
            return ctx.addSubject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/bee.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWdpbWEvRG9jdW1lbnRzL19ERVYvR0lUL2FuZ3VsYXIvcmV2aWV3dGltZWtlZXBlci9yZXZpZXd0aW1la2VlcGVyL3NyYy9hcHAva2VlcGVyL2tlZXBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2VlcGVyL2tlZXBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2tlZXBlci9rZWVwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9iZWUuanBnJyk7ICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH0iLCIuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JlZS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeeperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-keeper',
          templateUrl: './keeper.component.html',
          styleUrls: ['./keeper.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['appenHere', {
            static: false,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 0,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {},
      styles: [".alert[_ngcontent-%COMP%] {\n  background-color: red;\n  font-size: 150%;\n  color: white;\n  text-align: center;\n}\n\n.warn[_ngcontent-%COMP%] {\n  background-color: orangered;\n  font-size: 150%;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWdpbWEvRG9jdW1lbnRzL19ERVYvR0lUL2FuZ3VsYXIvcmV2aWV3dGltZWtlZXBlci9yZXZpZXd0aW1la2VlcGVyL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREo7O0FES0E7RUFHSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcbiAgICAvLyAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxuICAgIC8vICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cblxuLndhcm4ge1xuICAgIC8vICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgLy8gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufSIsIi5hbGVydCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-footer",
          templateUrl: "./footer.component.html",
          styleUrls: ["./footer.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      /* @Input() theGoodColor: string; */
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.isDarkTheme = this.themeService.isDarkTheme;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 5,
      vars: 0,
      consts: [["color", "primary"], [1, "material-icons"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " watch_later ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Review Timekeeper tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]],
      styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n  color: white;\n}\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n.navigation-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n.spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n#logout[_ngcontent-%COMP%] {\n  margin: 0 14px;\n}\n.icon[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n}\n@media (max-width: 959px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWdpbWEvRG9jdW1lbnRzL19ERVYvR0lUL2FuZ3VsYXIvcmV2aWV3dGltZWtlZXBlci9yZXZpZXd0aW1la2VlcGVyL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0pKO0FES0k7RUFDRSxnQkFBQTtBQ0hOO0FET0U7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSko7QURPRTtFQUNFLGtCQUFBO0FDSko7QURPRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0pKO0FET0U7RUFDRSxjQUFBO0FDSko7QURPRTtFQUNFLDJCQUFBO0FDSko7QURPRTtFQUNFO0lBQ0Usa0JBQUE7RUNKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4vLyAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxuLy8gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4vLyAgZmxleDogMSAxIGF1dG87XG4vL31cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgICY6aG92ZXIsICY6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgfVxuICB9XG4gIFxuICAubmF2aWdhdGlvbi1pdGVtcyB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICBtYXQtdG9vbGJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIFxuICAuc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4gICNsb2dvdXQge1xuICAgIG1hcmdpbjogMCAxNHB4O1xuICB9XG5cbiAgLmljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgfSAgXG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgbWF0LXRvb2xiYXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbiAgfSIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuYTpob3ZlciwgYTphY3RpdmUge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubmF2aWdhdGlvbi1pdGVtcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4jbG9nb3V0IHtcbiAgbWFyZ2luOiAwIDE0cHg7XG59XG5cbi5pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgbWF0LXRvb2xiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-header",
          templateUrl: "./header.component.html",
          styleUrls: ["./header.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "layout-wrapper"], ["fxFlex", "80%", "fxFlex.lt-md", "100%", 1, "flex-wrapper"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".layout-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.flex-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWdpbWEvRG9jdW1lbnRzL19ERVYvR0lUL2FuZ3VsYXIvcmV2aWV3dGltZWtlZXBlci9yZXZpZXd0aW1la2VlcGVyL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LXdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmxleC13cmFwcGVye1xuICAgIGhlaWdodDogMTAwJTtcbn0iLCIubGF5b3V0LXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mbGV4LXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/material.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/material.module.ts ***!
    \*******************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var material = [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], material], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], material],
          exports: [material]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/timer.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/timer.ts ***!
    \*********************************/

  /*! exports provided: Timer */

  /***/
  function srcAppSharedTimerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Timer", function () {
      return Timer;
    });

    var Timer =
    /*#__PURE__*/
    function () {
      function Timer() {
        _classCallCheck(this, Timer);

        this._minutes = 0;
        this.seconde = 0;
        this._totalSecondes = 0;
      }

      _createClass(Timer, [{
        key: "start",
        value: function start() {
          var _this5 = this;

          this._timer = setInterval(function () {
            _this5._minutes = Math.floor(++_this5._totalSecondes / 60);
            _this5.seconde = _this5._totalSecondes - _this5._minutes * 60;
          }, 1000);
        }
      }, {
        key: "stop",
        value: function stop() {
          clearInterval(this._timer);
        }
      }, {
        key: "reset",
        value: function reset() {
          this._totalSecondes = this._minutes = this.seconde = 0;
        }
      }, {
        key: "minutes",
        get: function get() {
          return this._minutes;
        }
      }, {
        key: "secondes",
        get: function get() {
          return this.seconde;
        }
      }]);

      return Timer;
    }();
    /***/

  },

  /***/
  "./src/app/shared/timerState.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/timerState.ts ***!
    \**************************************/

  /*! exports provided: TimerState */

  /***/
  function srcAppSharedTimerStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerState", function () {
      return TimerState;
    });

    var TimerState =
    /*#__PURE__*/
    function () {
      function TimerState() {
        _classCallCheck(this, TimerState);

        this._play = true;
        this._stop = false;
        this._backward = false;
      }

      _createClass(TimerState, [{
        key: "setPlay",
        value: function setPlay() {
          this._stop = true;
          this._play = this._backward = false;
        }
      }, {
        key: "setStop",
        value: function setStop() {
          this._stop = false;
          this._play = this._backward = true;
        }
      }, {
        key: "setBackward",
        value: function setBackward() {
          this._play = true;
          this._stop = this._backward = false;
        }
      }, {
        key: "stop",
        get: function get() {
          return this._stop;
        }
      }, {
        key: "backward",
        get: function get() {
          return this._backward;
        }
      }, {
        key: "play",
        get: function get() {
          return this._play;
        }
      }]);

      return TimerState;
    }();
    /***/

  },

  /***/
  "./src/app/shared/timertest/timertest.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/timertest/timertest.component.ts ***!
    \*********************************************************/

  /*! exports provided: TimertestComponent */

  /***/
  function srcAppSharedTimertestTimertestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimertestComponent", function () {
      return TimertestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TimertestComponent =
    /*#__PURE__*/
    function () {
      function TimertestComponent() {
        _classCallCheck(this, TimertestComponent);

        this.timeLeft = 60;
      }

      _createClass(TimertestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this6 = this;

          this.interval = setInterval(function () {
            if (_this6.timeLeft > 0) {
              _this6.timeLeft--;
            } else {
              _this6.timeLeft = 60;
            }
          }, 1000);
        }
      }, {
        key: "pauseTimer",
        value: function pauseTimer() {
          clearInterval(this.interval);
        }
      }]);

      return TimertestComponent;
    }();

    TimertestComponent.ɵfac = function TimertestComponent_Factory(t) {
      return new (t || TimertestComponent)();
    };

    TimertestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimertestComponent,
      selectors: [["app-timertest"]],
      decls: 8,
      vars: 1,
      consts: [[3, "click"]],
      template: function TimertestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start editing to see some magic happen :)\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimertestComponent_Template_button_click_2_listener($event) {
            return ctx.startTimer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimertestComponent_Template_button_click_4_listener($event) {
            return ctx.pauseTimer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pause");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.timeLeft, " Seconds Left....");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90aW1lcnRlc3QvdGltZXJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimertestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timertest',
          templateUrl: './timertest.component.html',
          styleUrls: ['./timertest.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/timer/timer.component */
    "./src/app/components/timer/timer.component.ts");
    /* harmony import */


    var _keeper_keeper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../keeper/keeper.component */
    "./src/app/keeper/keeper.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)();
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 5,
      vars: 0,
      consts: [[2, "text-align", "center"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-keeper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"], _keeper_keeper_component__WEBPACK_IMPORTED_MODULE_3__["KeeperComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n.nav-caption[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 6px;\n}\n.links[_ngcontent-%COMP%] {\n  color: #b51606;\n}\n.links[_ngcontent-%COMP%]:hover {\n  color: grey;\n}\n.angular[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/angular.svg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 50%;\n  height: 50%;\n  padding: 0 0 0 84px;\n}\n.duck[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/duck.svg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 50%;\n  height: 50%;\n  padding: 0px 0 0 217px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWdpbWEvRG9jdW1lbnRzL19ERVYvR0lUL2FuZ3VsYXIvcmV2aWV3dGltZWtlZXBlci9yZXZpZXd0aW1la2VlcGVyL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBRUUsZ0JBQUE7QUNDSjtBREdBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7QUNBRjtBRElBO0VBQ0UsNENBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0RGO0FESUE7RUFDRSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gICY6aG92ZXIsXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xuICB9XG59XG5cbi5uYXYtY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5saW5rcyB7XG4gIGNvbG9yOiAjYjUxNjA2O1xufVxuXG4ubGlua3M6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbn1cblxuXG4uYW5ndWxhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYW5ndWxhci5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgcGFkZGluZzogMCAwIDAgODRweDtcbn1cblxuLmR1Y2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2R1Y2suc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBhZGRpbmc6IDBweCAwIDAgMjE3cHg7XG59XG5cbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmE6aG92ZXIsIGE6YWN0aXZlIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm5hdi1jYXB0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cblxuLmxpbmtzIHtcbiAgY29sb3I6ICNiNTE2MDY7XG59XG5cbi5saW5rczpob3ZlciB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uYW5ndWxhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYW5ndWxhci5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgcGFkZGluZzogMCAwIDAgODRweDtcbn1cblxuLmR1Y2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2R1Y2suc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBhZGRpbmc6IDBweCAwIDAgMjE3cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/negima/Documents/_DEV/GIT/angular/reviewtimekeeper/reviewtimekeeper/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map