"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const uuid_1 = require("uuid");
function generateToken() {
    return (0, uuid_1.v4)();
}
exports.generateToken = generateToken;
