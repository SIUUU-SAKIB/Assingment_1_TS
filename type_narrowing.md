# Q: What is Type Narrowing in TypeScript?

Provide practical examples using `typeof`, `instanceof`, and the `in` operator.

## Ans

Type narrowing is an important feature of TypeScript. It makes TypeScript more flexible with variable. We can do more specific and predictable work with TypeScript by narrowing the types such as union type like `string | number`.

---

### `typeof` method

```ts
const roleNumber = (role: number | string) => {
  if (typeof role === "string") {
    // TypeScript knows `role` is a string here
    console.log(role.toUpperCase());
  } else {
    // TypeScript knows `role` is a number here
    console.log(role.toFixed(2));
  }
}

roleNumber("abc123"); // Outputs: ABC123
```

### `instanceof` method

```ts
class Wolf {
  howl() {
    console.log("woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function speak(animal: Wolf | Cat) {
  if (animal instanceof Wolf) {
    // TypeScript knows `animal` is a Dog here
    animal.howl();
  } else {
    // TypeScript knows `animal` is a Cat here
    animal.meow();
  }
}

speak(new Wolf()); // Outputs: Woof!
```

### `in` operator

```ts
interface Admin {
  name: string;
  manageUsers(): void;
}

interface User {
  name: string;
  login(): void;
}

function handleAccount(account: Admin | User) {
  if ("manageUsers" in account) {
    // TypeScript knows `account` is an Admin here
    account.manageUsers();
  } else {
    // TypeScript knows `account` is a User here
    account.login();
  }
}

const adminObj: Admin = {
  name: "Alice",
  manageUsers: () => console.log("Managing users...")
};

handleAccount(adminObj); // Outputs: Managing users...
```