"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
exports.concatenate = concatenate;
// Basic Types with Function Parameters
const add = (a, b) => {
    return a + b;
};
exports.add = add;
const result1 = (0, exports.add)(1, 2);
// Annotating Empty Parameters
const concatTwoStrings = (a, b) => {
    return [a, b].join(" ");
};
const result2 = concatTwoStrings("Hello", "World");
// The Basic Types
let example1 = "Hello World!";
let example2 = 42;
let example3 = true;
let example4 = Symbol();
let example5 = 123n;
// The any Type
const handleFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    return value;
};
it("Should handle a form submit", () => {
    const form = document.createElement("form");
    form.innerHTML = `
  <input name="name" value="John Doe"></Exercise>
  `;
    form.onsubmit = (e) => {
        const value = handleFormData(e);
        expect(value).toEqual({ name: "John Doe" });
    };
    form.requestSubmit();
    expect.assertions(1);
});
// Optional Function Parameters
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
const result3 = concatName("John");
const result4 = concatName("John", "Doe");
it("should return the full name", () => {
    const result = concatName("John", "Doe");
    expect(result).toEqual("John Doe");
});
it("should return the first name", () => {
    const result = concatName("John");
    expect(result).toEqual("John Pocock");
});
// Rest Parameters
function concatenate(...strings) {
    return strings.join("");
}
const modifyUser = (user, id, makeChange) => {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
const users = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];
modifyUser(users, "1", (user) => {
    return { ...user, name: "Waqas" };
});
// Functions Returning
const addClickEventListener = (listener) => {
    document.addEventListener("click", listener);
};
addClickEventListener(() => {
    console.log("Clicked!");
});
addClickEventListener(
// @ts-expect-error
"abc");
function calculateArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.sideLength * shape.sideLength;
    }
}
function calculateArea1(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
        case 'square':
            return shape.sideLength * shape.sideLength;
    }
}
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            return [
                'error',
                // Imagine some improved error handling here
                'An error occurred',
            ];
        }
        const data = await response.json();
        return ['success', data];
    }
    catch (error) {
        return ['error', 'An error occurred'];
    }
}
async function exampleFunc() {
    const [status, value] = await fetchData();
    if (status === 'success') {
        console.log(value);
    }
    else {
        console.error(value);
    }
}
function calculateArea2(shape) {
    if (shape.kind === 'square') {
        return shape.sideLength * shape.sideLength;
    }
    else {
        return Math.PI * shape.radius * shape.radius;
    }
}
it('Should calculate the area of a circle when no kind is passed', () => {
    const result = calculateArea2({
        radius: 5,
    });
    expect(result).toBe(78.53981633974483);
});
