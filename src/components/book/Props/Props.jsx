export const Props = () => {
  const greet = `function greet(name) {
  return "Hello, "+name;
}
console.log(greet('Pavel')); // Hello, Pavel`;

  const greeting = `function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
<Greeting name={"Pavel"} />;`;

  const welcome = `function Welcome(props) {
  return <h1>Welcome, {props.userName}!</h1>;
}

<Welcome userName={"Pavel"} />;`;

  const userStatus = `function UserStatus(props) {
  return (
    <div>
      <p>User ID: {props.id}</p>
      <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

<UserStatus id={123} isActive={true} />;`;
  const profile = `function Profile(props) {
  return <p>Name: {props.name}</p>;
}
<Profile name={"Pavel"} />;`;

  const destrProfile = `function Profile({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
<Profile name={"Pavel"} age={27} />;`;

  const todoList = `function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

<TodoList todos={["Learn React", "Build a project", "Get a job"]} />;`;

  const button = `function Button(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}

<Button onClick={() => console.log("Button clicked!")} />;`;

  const container = `function Container({ children }) {
  return <div className="container">{children}</div>;
}

function App() {
  return (
    <Container>
      <h1>Welcome!</h1>
      <p>This is a reusable container component.</p>
    </Container>
  );
}`;

  const example = `function Example(props) {
  props.name = "Ivan"; // Нельзя!
  return <p>{props.name}</p>;
}`;

  const product = `function ProductCard({ name, price, inStock }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: $/{price}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

<ProductCard name="Laptop" price={999.99} inStock={true} />;`;

  const itemList = `function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

<ItemList items={["Item 1", "Item 2", "Item 3"]} />;`;

  return (
    <>
      <h1>Props</h1>
      <div className="impoBlock">
        <h3>1. Введение в Props</h3>
        <p>
          Props (от англ. “properties”) — это механизм передачи данных между
          компонентами в React. Они делают React-компоненты повторно
          используемыми и универсальными.
        </p>
        <h2>Что такое props?</h2>
        <ul>
          <li>
            - Props — это объект, содержащий данные, которые передаются в
            компонент из его родителя.
          </li>
          <li>
            - Props похожи на параметры функций: они предоставляют компонентам
            необходимую информацию для корректной работы.
          </li>
        </ul>
        <h2>Почему props важны?</h2>
        <ul>
          <li>
            - Они позволяют создавать динамичные компоненты, которые могут
            отображать разные данные.
          </li>
          <li>
            - С props можно легко передавать данные внутрь сложной структуры
            компонентов.
          </li>
        </ul>
        <h2>Аналогия: параметры функций</h2>
        <span>
          Представь, что props — это параметры, которые передаются функции при
          ее вызове. Вместо:
        </span>
        <pre>
          <code>{greet}</code>
        </pre>
        <span>В React ты можешь сделать компонент с props:</span>
        <pre>
          <code>{greeting}</code>
        </pre>
      </div>
      <div className="impoBlock">
        {" "}
        <h3>2. Основы работы с Props</h3>
        <p>
          Props передаются в компоненты так же, как атрибуты в HTML-элементы.
        </p>
        <h2>Передача данных через JSX</h2>
        <span>Синтаксис прост: данные указываются как атрибуты JSX:</span>
        <pre>
          <code>{welcome}</code>
        </pre>
        <h2>Пример с числом и булевыми значениями</h2>
        <pre>
          <code>{userStatus}</code>
        </pre>
      </div>
      <div className="impoBlock">
        <h3>3. Чтение Props в дочернем компоненте</h3>
        <h2>Доступ к props через объект</h2>
        <span>Props доступны как объект внутри компонента:</span>
        <pre>
          <code>{profile}</code>
        </pre>
        <h2>Деструктуризация props</h2>
        <span>
          Рекомендуется использовать деструктуризацию для более читаемого кода:
        </span>
        <pre>
          <code>{destrProfile}</code>
        </pre>
      </div>
      <div className="impoBlock">
        {" "}
        <h3>4. Типы данных, передаваемые через Props</h3>
        <h2>Передача массивов и объектов</h2>
        <span>Props поддерживают сложные типы данных:</span>
        <pre>
          <code>{todoList}</code>
        </pre>
        <h2>Передача функций</h2>
        <span>
          Props могут быть функциями для управления поведением компонента:
        </span>
        <pre>
          <code>{button}</code>
        </pre>
      </div>

      <div className="impoBlock">
        <h3>
          5. Использование <i>props.children</i> в компонентах
        </h3>
        <h2>
          Что такое <i>props.children</i>?
        </h2>
        <p>
          <i>props.children</i> — это специальное свойство, которое
          автоматически передаётся в компонент, если внутри него вложены другие
          компоненты или элементы. Это позволяет создавать гибкие и
          универсальные компоненты.
        </p>
        <h2>
          Пример использования <i>props.children</i>
        </h2>
        <pre>
          <code>{container}</code>
        </pre>
        <p>
          В этом примере Container отображает вложенные в него элементы
          (&lt;h1&gt; и &lt;p&gt;) через props.children.
        </p>
      </div>
      <div className="impoBlock">
        {" "}
        <h3>6. Props как неизменяемые данные</h3>
        <p>
          <i>
            Пропсы являются неизменяемыми (immutable), их нельзя изменять
            напрямую.
          </i>
        </p>
        <h2>Пример изменения props</h2>
        <pre>
          <code>{example}</code>
        </pre>
      </div>
      <div className="impoBlock">
        <h3>7. Примеры использования Props в реальных приложениях</h3>
        <h2>Пример 1: Компонент карточки товара</h2>
        <pre>
          <code>{product}</code>
        </pre>
        <h2>Пример 2: Список элементов</h2>
        <pre>
          <code>{itemList}</code>
        </pre>
      </div>
    </>
  );
};
