"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    pseudo: String,
    email: String,
    password: String,
    isAccepted: Boolean,
    openToPlay: Boolean,
});
exports.User = mongoose_1.default.model('User', userSchema);
