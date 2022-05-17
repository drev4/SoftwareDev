"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogEntryCreator = void 0;
const BlogEntry_1 = require("../domain/BlogEntry");
class BlogEntryCreator {
    constructor(repository) {
        this.repository = repository;
    }
    run(id, title, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = new BlogEntry_1.BlogEntry({ id, title, body });
            return this.repository.save(course);
        });
    }
}
exports.BlogEntryCreator = BlogEntryCreator;
