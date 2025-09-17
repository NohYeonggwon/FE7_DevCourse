interface User {
  name: string;
  age: number;
}

interface UserProps {
  userObj: User;
  clickHandler: () => void;
}
