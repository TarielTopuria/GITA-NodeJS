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
const handleDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    try {
        const res = yield fetch(`http://localhost:3000/api/expenses/${id}`, {
            method: 'DELETE',
            headers: {
                role: 'admin',
                'api-key': '12345',
            },
        });
        if (res.status === 200) {
            window.location.href = 'http://localhost:3000/api/expenses/';
        }
    }
    catch (error) {
        console.error('Error deleting expense:', error);
    }
});
const createExpense = () => {
    window.location.href = 'http://localhost:3000/api/expenses/add/';
};
