export const constructor = `constructor(props) {
  super(props);
  this.state = { data: null };
}`;

export const compDidMount = `componentDidMount() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}`;

export const compDidUpd = `componentDidUpdate(prevProps, prevState) {
  if (prevState.data !== this.state.data) {
    console.log('Данные обновились!');
  }
}`;

export const unMount = `componentWillUnmount() {
  // Отписываемся от событий, очищаем таймеры и т.д.
  console.log('Компонент удалён');
}`;

export const useEffect = `// Отработает как componentDidMount
useEffect(() => { console.log("componentDidMount") }, []) 

// Отработает как componentDidUpdate (но есть прикол. Покажу ниже)
useEffect(() => { console.log("componentDidUpdate") }, [dependency]) 

// Отработает как componentDidMount и componentDidUpdate
useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 

 // Отработает как componentWillUnmount
useEffect(() => {
  return () => console.log('componentWillUnmount')
}, [])`;

export const effect = `useEffect(() => { console.log("componentDidUpdate") }, [dependency]) `;


export const example1 = `import React, { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Компонент был монтирован');
    return () => {
      console.log('Компонент будет размонтирован');
    };
  }, []); // Пустой массив зависимостей и возвращает функцию, 
					// а значит выполнится только при монтировании и размонтировании

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
    </div>
  );
}

export default Example;`


export const example2 = `import React, { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(Счетчик изменен на: "$&{count}");
  }, [count]); // Зависимость [count] - выполнится при изменении состояния count

  return (
    <div>
      <p>{message}</p>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
    </div>
  );
};

export default Example;`


export const myComp = `import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [dependency, setDependency] = useState(0);

  // useEffect будет вызван каждый раз при изменении зависимости "dependency"
  useEffect(() => {
    console.log('componentDidUpdate');
  }, [dependency]);

  return (
    <div>
      <p>Dependency value: {dependency}</p>
      <button onClick={() => setDependency(dependency + 1)}>
        Increment Dependency
      </button>
    </div>
  );
};

export default MyComponent;`

