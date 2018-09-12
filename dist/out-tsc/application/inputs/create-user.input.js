"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var class_validator_1 = require("class-validator");
var CreateUserInput = /** @class */ (function () {
    function CreateUserInput() {
    }
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.MaxLength(30),
        __metadata("design:type", String)
    ], CreateUserInput.prototype, "username", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.Length(30, 255),
        __metadata("design:type", String)
    ], CreateUserInput.prototype, "description", void 0);
    __decorate([
        type_graphql_1.Field(function (type) { return [String]; }),
        class_validator_1.ArrayMaxSize(30),
        __metadata("design:type", Array)
    ], CreateUserInput.prototype, "usedNames", void 0);
    CreateUserInput = __decorate([
        type_graphql_1.InputType()
    ], CreateUserInput);
    return CreateUserInput;
}());
exports.CreateUserInput = CreateUserInput;
var PageQueryArgs = /** @class */ (function () {
    function PageQueryArgs() {
        this.pageIndex = 0;
        this.pageSize = 25;
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.Int; }, { nullable: true }),
        class_validator_1.Min(0),
        __metadata("design:type", Object)
    ], PageQueryArgs.prototype, "pageIndex", void 0);
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.Int; }, { nullable: true }),
        class_validator_1.Min(1), class_validator_1.Max(50),
        __metadata("design:type", Object)
    ], PageQueryArgs.prototype, "pageSize", void 0);
    PageQueryArgs = __decorate([
        type_graphql_1.ArgsType()
    ], PageQueryArgs);
    return PageQueryArgs;
}());
exports.PageQueryArgs = PageQueryArgs;
//# sourceMappingURL=create-user.input.js.map