interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updateProps: UpdatePropsOptional) {
    console.log('Email--->', updateProps.email);
    console.log('name--->', updateProps.name);
    console.log('age--->', updateProps.age);
}

updateUser({
    name: "himahsu",
    age: 44,
    email: "hmj@hj.com"
});

//ReadOnly

type Test = {
    readonly name: string,
    readonly age: 26,
}

type Config = {
    name: string,
    age: number,
    email: string,
    password: string
}

const config: Readonly<Config> = {
    name: "himahsu",
    age: 44,
    email: "hmj@hj.com",
    password: "hmj@hj.com",
}


// Record
// not clean
interface User1 {
    id: string;
    name: string;
}
  
type Users = { [key: string]: User1 };
  
const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};


// 2nd way 

interface User5 {
    id: string;
    name: string;
  }
  
  type Users5 = Record<string, User>;//<Key , value>
  
  const users5: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users5['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


// Map
  interface User12 {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap12 = new Map<string, User12>();
  
  // Add users to the map using .set
  usersMap12.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap12.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap12.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

//Exclude
type EventEvent = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventEvent, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK