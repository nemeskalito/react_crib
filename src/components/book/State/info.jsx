export const useState = `import React, { useState } from 'react';

const [state, setState] = useState(initialState);`

export const counter = `import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
    </div>
  );
}`
export const wrong = `// Неправильно
state.count = 10;`

export const correctly = `setState(newValue);`

export const setCount = `setCount((prevCount) => prevCount + 1);`

export const counterHandle = `import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;`

export const handleIncrement = `const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
};`

export const objectState = `const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
};`

export const arrayState = `const [items, setItems] = useState([1, 2, 3]);

setItems((prevItems) => [...prevItems, 4]); // Добавление элемента
setItems((prevItems) => prevItems.filter((item) => item !== 2)); // Удаление элемента`

export const example1 = `const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};`

export const example2 = `import React, { useState } from "react";

const Example = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText((showText) => !showText);
  };

  return (
    <div>
      <button onClick={handleClick}>Показать/скрыть текст</button>
      {showText && <p>Этот текст может быть скрыт или показан</p>}
    </div>
  );
};`

export const example3 = `import React, { useState } from 'react';

const Example = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <label>
        Введи свое имя:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Привет, {name}!</p>
    </div>
  );
}`

export const example4 = `import React, { useState } from 'react';

const Example = () => {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  }

  const style = {
    color: color
  };

  return (
    <div>
      <button onClick={handleClick}>Сменить цвет</button>
      <p style={style}>Этот текст может быть красным или синим</p>
    </div>
  );
}`

export const parentComp = `const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

const ChildComponent = ({ count }) => {
  return <p>Счетчик: {count}</p>;
};`

export const userProfile = `import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // создаем новый объект с обновленным свойством
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Введите ваше имя"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Введите ваш возраст"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Введите вашу почту"
      />
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;`
