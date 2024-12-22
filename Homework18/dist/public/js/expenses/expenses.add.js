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
const form = document.querySelector('.expense-create');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const type = form.querySelector('[name="type"]').value;
    const cost = form.querySelector('[name="cost"]').value;
    const quantity = form.querySelector('[name="quantity"]').value;
    try {
        const res = yield fetch('http://localhost:3000/api/expenses/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type,
                cost,
                quantity,
            }),
        });
        if (res.status === 201) {
            window.location.href = 'http://localhost:3000/api/expenses/';
        }
    }
    catch (error) {
        console.error('Error creating expense:', error);
    }
}));
