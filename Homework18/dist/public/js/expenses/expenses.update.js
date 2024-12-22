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
const updateForm = document.querySelector('.expense-update');
updateForm === null || updateForm === void 0 ? void 0 : updateForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const id = updateForm.querySelector('[name="id"]').value;
    const type = updateForm.querySelector('[name="type"]').value;
    const cost = updateForm.querySelector('[name="cost"]').value;
    const quantity = updateForm.querySelector('[name="quantity"]').value;
    try {
        const res = yield fetch(`http://localhost:3000/api/expenses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type,
                cost,
                quantity,
            }),
        });
        if (res.ok) {
            window.location.href = 'http://localhost:3000/api/expenses/';
        }
        else {
            const error = yield res.json();
            console.error(error.message);
            alert(`Error: ${error.message}`);
        }
    }
    catch (err) {
        console.error('Network error:', err);
        alert('An error occurred while updating the expense.');
    }
}));
