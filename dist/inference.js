"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const profileSchema = zod_1.z.object({
    name: zod_1.z.string().min(5),
    email: zod_1.z.string().max(100).email(),
    age: zod_1.z.number().min(18).max(200).optional()
});
// it will infer the type of profileSchema althougth profileSchema is runtime things
// no need write it again
app.put("/user", (req, res) => {
    const { success } = profileSchema.safeParse(req.body);
    const updateBody = req.body;
    if (!success) {
        res.status(411).json({
            message: "There is something wrong in credentials"
        });
        return;
    }
    res.json({
        message: "Database get updated"
    });
});
app.listen(3000, () => {
    console.log("This server is running at 3000 port");
});
