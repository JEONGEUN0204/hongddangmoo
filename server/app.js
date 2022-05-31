"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static('build')); //build폴더 안에 있는 파일 마음대로 꺼내쓸 수 있음
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});
app.listen(3000, () => {
    console.log('server is runnig!');
});
// client buld-> build폴더->server/build->서버를 실행
//client 폴더로 이동
// npm ci
//npm run build
//client/build-> server/build폴더로 이동
//server 폴더로 이동
//npm ci
//tsc
//node app.js
