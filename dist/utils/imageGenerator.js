"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Função para ler e codificar a imagem em base64
function encodeImageToBase64(imagePath) {
    const imageData = fs_1.default.readFileSync(imagePath);
    return Buffer.from(imageData).toString('base64');
}
// Caminho para a imagem local
const imagePath = path_1.default.join(__dirname, 'assets', 'logo.png');
// Codificar a imagem em base64
const base64Image = encodeImageToBase64(imagePath);
