var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DBMonster = (function (_super) {
    __extends(DBMonster, _super);
    function DBMonster() {
        _super.call(this);
        this.dbs = new mz.Collection(null, { key: "name" });
        this.appendTo("#body");
    }
    DBMonster.prototype.db_data_changed = function (col) {
        this.dbs.mergeArray(col);
    };
    __decorate([
        DBMonster.proxy, 
        __metadata('design:type', Object)
    ], DBMonster.prototype, "dbs", void 0);
    __decorate([
        DBMonster.proxy, 
        __metadata('design:type', Object)
    ], DBMonster.prototype, "db_data", void 0);
    DBMonster = __decorate([
        mz.Widget.Template("\n<table class=\"table table-striped latest-data\">\n    <mz-repeat list=\"{this.dbs}\" tag=\"tbody\">\n        <tr>\n            <td class=\"dbname\">{scope.name}</td>\n\n            <td class=\"query-count\">\n                <span class=\"{ scope.countClassName }\">{ scope.queries.length }</span>\n            </td>\n\n            <td class=\"Query { scope.topFiveQueries[0].className }\">\n                { scope.topFiveQueries[0].elapsed }\n                <div class=\"popover left\">\n                    <div class=\"popover-content\">{ scope.topFiveQueries[0].query }</div>\n                    <div class=\"arrow\"></div>\n                </div>\n            </td>\n            \n            <td class=\"Query { scope.topFiveQueries[1].className }\">\n                { scope.topFiveQueries[1].elapsed }\n                <div class=\"popover left\">\n                    <div class=\"popover-content\">{ scope.topFiveQueries[1].query }</div>\n                    <div class=\"arrow\"></div>\n                </div>\n            </td>\n            \n            <td class=\"Query { scope.topFiveQueries[2].className }\">\n                { scope.topFiveQueries[2].elapsed }\n                <div class=\"popover left\">\n                    <div class=\"popover-content\">{ scope.topFiveQueries[2].query }</div>\n                    <div class=\"arrow\"></div>\n                </div>\n            </td>\n            \n            <td class=\"Query { scope.topFiveQueries[3].className }\">\n                { scope.topFiveQueries[3].elapsed }\n                <div class=\"popover left\">\n                    <div class=\"popover-content\">{ scope.topFiveQueries[3].query }</div>\n                    <div class=\"arrow\"></div>\n                </div>\n            </td>\n            \n            <td class=\"Query { scope.topFiveQueries[4].className }\">\n                { scope.topFiveQueries[4].elapsed }\n                <div class=\"popover left\">\n                    <div class=\"popover-content\">{ scope.topFiveQueries[4].query }</div>\n                    <div class=\"arrow\"></div>\n                </div>\n            </td>\n        </tr>\n    </mz-repeat>\n</table>\n"),
        mz.Widget.ConfigureUnwrapped, 
        __metadata('design:paramtypes', [])
    ], DBMonster);
    return DBMonster;
})(mz.widgets.BasePagelet);
//# sourceMappingURL=index.js.map