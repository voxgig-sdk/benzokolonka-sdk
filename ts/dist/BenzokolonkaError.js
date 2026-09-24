"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenzokolonkaError = void 0;
class BenzokolonkaError extends Error {
    isBenzokolonkaError = true;
    sdk = 'Benzokolonka';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.BenzokolonkaError = BenzokolonkaError;
//# sourceMappingURL=BenzokolonkaError.js.map