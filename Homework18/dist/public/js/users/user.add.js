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
const userForm = document.querySelector('.user-create');
userForm === null || userForm === void 0 ? void 0 : userForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const firstName = userForm.querySelector('[name="firstName"]').value;
    const lastName = userForm.querySelector('[name="lastName"]').value;
    const age = userForm.querySelector('[name="age"]').value;
    const email = userForm.querySelector('[name="mail"]').value;
    const description = userForm.querySelector('[name="description"]').value;
    try {
        const res = yield fetch('http://localhost:3000/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                age,
                email,
                description,
            }),
        });
        if (res.status === 201) {
            window.location.href = 'http://localhost:3000/api/users/';
        }
    }
    catch (error) {
        console.error('Error creating user:', error);
    }
}));
