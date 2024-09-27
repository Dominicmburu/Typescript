import { Expect, Equal } from '@total-typescript/helpers';

// Basic Types with Function Parameters
export const add = (a: number, b: number) => {
    return a + b;
};

const result1 = add(1, 2);

// Annotating Empty Parameters
const concatTwoStrings = (a: string, b: string) => {
    return [a, b].join(" ");
};

const result2 = concatTwoStrings("Hello", "World");

// The Basic Types
let example1: string = "Hello World!";

let example2: number = 42;

let example3: boolean = true;

let example4: symbol = Symbol();

let example5: bigint = 123n;

// The any Type
const handleFormData = (e: any) => {
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
const concatName = (first: string, last?: string) => {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
};

const result3 = concatName("John");
const result4 = concatName("John", "Doe");

it("should return the full name", () => {
    const result = concatName("John", "Doe");

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toEqual("John Doe");
});

it("should return the first name", () => {
    const result = concatName("John");

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toEqual("John Pocock");
});


// Rest Parameters
export function concatenate(...strings: string[]) {
    return strings.join("");
}


// Function types
type User = {
    id: string;
    name: string;
};



const modifyUser = (user: User[], id: string, makeChange: (user: User) => any) => {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }

        return u;
    });
};

const users: User[] = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];

modifyUser(users, "1", (user) => {
    return { ...user, name: "Waqas" };
});


// Functions Returning
const addClickEventListener = (listener: () => void) => {
    document.addEventListener("click", listener);
};

addClickEventListener(() => {
    console.log("Clicked!");
});

addClickEventListener(
    // @ts-expect-error
    "abc",
);


type Circle = {
    kind: 'circle'
    radius: number
}

type Square = {
    kind: 'square'
    sideLength: number
}

type Shape = Circle | Square

function calculateArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius
    } else {
        return shape.sideLength * shape.sideLength
    }
}

function calculateArea1(shape: Shape) {

    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius * shape.radius
        case 'square':
            return shape.sideLength * shape.sideLength
    }
}

type APIResponse = ['error', string] | ['success', User[]];

async function fetchData(): Promise<APIResponse> {
    try {
        const response = await fetch('https://api.example.com/data')

        if (!response.ok) {
            return [
                'error',
                // Imagine some improved error handling here
                'An error occurred',
            ]
        }

        const data = await response.json()

        return ['success', data]
    } catch (error) {
        return ['error', 'An error occurred']
    }
}

async function exampleFunc() {
    const [status, value] = await fetchData()

    if (status === 'success') {
        console.log(value)

        type test = Expect<Equal<typeof value, User[]>>
    } else {
        console.error(value)

        type test = Expect<Equal<typeof value, string>>
    }
}

type Circle2 = {
    kind?: 'circle'
    radius: number
}

type Square2 = {
    kind: 'square'
    sideLength: number
}

type Shape2 = Circle2 | Square2

function calculateArea2(shape: Shape2) {
    if (shape.kind === 'square') {
        return shape.sideLength * shape.sideLength
    } else {
        return Math.PI * shape.radius * shape.radius
    }
}

it('Should calculate the area of a circle when no kind is passed', () => {
    const result = calculateArea2({
        radius: 5,
    })

    expect(result).toBe(78.53981633974483)

    type test = Expect<Equal<typeof result, number>>
})


type BaseEntity = {
    id: string;
    createdAt: Date;
}

type User2 = {
    name: string;
    email: string;
} & BaseEntity;

type Product2 = {
    name: string;
    price: number;
} & BaseEntity;

interface User3 extends BaseEntity {
    name: string;
    email: string;
}

interface Product3 extends BaseEntity {
    name: string;
    price: number;
}



