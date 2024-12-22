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
const updateUserForm = document.querySelector('.user-update');
updateUserForm === null || updateUserForm === void 0 ? void 0 : updateUserForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const id = updateUserForm.querySelector('[name="id"]').value;
    const firstName = updateUserForm.querySelector('[name="firstName"]').value;
    const lastName = updateUserForm.querySelector('[name="lastName"]').value;
    const age = updateUserForm.querySelector('[name="age"]').value;
    const email = updateUserForm.querySelector('[name="mail"]').value;
    const description = updateUserForm.querySelector('[name="description"]').value;
    try {
        const res = yield fetch(`http://localhost:3000/api/users/${id}`, {
            method: 'PUT',
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
        if (res.ok) {
            window.location.href = 'http://localhost:3000/api/users/';
        }
        else {
            const error = yield res.json();
            console.error(error.message);
            alert(`Error: ${error.message}`);
        }
    }
    catch (err) {
        console.error('Network error:', err);
        alert('An error occurred while updating the user.');
    }
}));
