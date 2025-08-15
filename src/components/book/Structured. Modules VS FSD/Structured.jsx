export const Structured = () => {
	return (
		<>
			<h1>Структура проекта. Modules VS FSD</h1>
			<div className='impoBlock'>
				<span>
					<strong>В React нет жёсткой структуры, но есть рекомендации</strong>
				</span>
				<p>
					Когда ты начинаешь писать проект на React, первая проблема — как
					правильно организовать файлы и папки?
				</p>
				<p>
					В отличие от фреймворков (Next.js, Angular), React не диктует
					конкретную структуру проекта. Ты сам решаешь, как организовать код, но
					есть популярные подходы, которые помогают избежать хаоса.
				</p>
				<span>
					<strong>
						Если структура не продумана, код быстро превращается в "спагетти".
					</strong>
				</span>
				<br />
				<span>В этой главе разберём два подхода:</span>
				<ul>
					<li>
						- Modules (разделение по страницам и переиспользуемым компонентам).
					</li>
					<li>
						- FSD (Feature-Sliced Design) (разделение на уровни: app, pages,
						features, entities, shared).
					</li>
				</ul>
			</div>

			<div className='impoBlock'>
				<h3>Modules vs FSD – в чём разница?</h3>
				<table>
					<tbody>
						<tr>
							<th>Modules</th>
							<th>FSD (Feature-Sliced Design)</th>
						</tr>
						<tr>
							<td>Подходит для маленьких и средних проектов.</td>
							<td>Подходит для больших, сложных проектов.</td>
						</tr>
						<tr>
							<td>
								Делит код на pages (страницы) и components (переиспользуемые
								компоненты).
							</td>
							<td>
								Разделяет код по логическим уровням (features, entities,
								shared).
							</td>
						</tr>
						<tr>
							<td>Простая структура, легко освоить.</td>
							<td>Требует продуманного подхода.</td>
						</tr>
						<tr>
							<td>Может появиться запутанная архитектура при росте проекта.</td>
							<td>Облегчает поддержку и масштабирование.</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='impoBlock'>
				<h3>Modules</h3>
				<span>Как устроено?</span>
				<ul>
					<li>
						- Код делится на pages (страницы) и components (переиспользуемые
						UI-элементы).
					</li>
					<li>- Логика страницы собирается в одном месте (в pages).</li>
					<li>- Мелкие компоненты (кнопки, инпуты) хранятся в components.</li>
				</ul>
			</div>
			<div className='impoBlock'>
				<span>Структура проекта (Modules)</span>
				<br />
				/src <br />
				├── /pages <span className='padding-left'># Страницы приложения</span>
				<br />
				│ ├── Home.jsx
				<br />
				│ ├── Profile.jsx
				<br />
				├── /components{' '}
				<span className='padding-left'># Переиспользуемые UI-компоненты</span>
				<br />
				│ ├── Button.jsx
				<br />
				│ ├── Input.jsx
				<br />
				├── /hooks <span className='padding-left'># Пользовательские хуки</span>
				<br />
				│ ├── useAuth.js
				<br />
				│ ├── useFetch.js
				<br />
				├── /utils{' '}
				<span className='padding-left'>
					# Утилиты (общие вспомогательные функции)
				</span>
				<br />
				│ ├── formatDate.js
				<br />
				│ ├── debounce.js
				<br />
				├── /helpers{' '}
				<span className='padding-left'>
					# Хелперы (функции, связанные с конкретными модулями)
				</span>
				<br />
				│ ├── authHelper.js
				<br />
				│ ├── validationHelper.js
				<br />
				├── /redux{' '}
				<span className='padding-left'># Redux-хранилище и слайсы</span>
				<br />
				│ ├── store.js
				<br />
				│ ├── authSlice.js
				<br />
				│ ├── userSlice.js
				<br />
				├── /api{' '}
				<span className='padding-left'>
					# Файлы для работы с сервером (запросы к API)
				</span>
				<br />
				│ ├── apiConfig.js
				<br />
				│ ├── authApi.js
				<br />
				│ ├── userApi.js
				<br />
				├── App.jsx <span className='padding-left'># Главный компонент</span>
				<br />
				├── index.js <span className='padding-left'># Точка входа</span>
				<ul>
					<li>
						- pages — находятся страницы (Home, Profile) → они импортируют
						нужные компоненты.
					</li>
					<li>- components — хранятся общие элементы UI (Button, Input).</li>
					<li>
						- hooks — пользовательские хуки, которые можно переиспользовать в
						проекте.
					</li>
					<li>
						- utils – для чистых функций, которые не зависят от React (например,
						formatDate, debounce).
					</li>
					<li>
						- helpers – для функций-помощников, которые связаны с конкретными
						модулями (authHelper, validationHelper).
					</li>
					<li>
						- redux – хранилище состояния, слайсы (store.js, authSlice.js).
					</li>
					<li>
						- api – для работы с бэкендом, запросов к серверу (authApi.js,
						userApi.js).
					</li>
				</ul>
			</div>
			<div className='impoBlock'>
				<h3>FSD</h3>
				<span>Как устроено?</span>
				<ul>
					<li>- Код разделён на логические уровни.</li>
					<li>- Чётко разделены бизнес-логика, UI и API-запросы.</li>
					<li>- Удобно работать в команде — каждый знает, где лежит код.</li>
				</ul>
				<span>Структура проекта (FSD)</span>
				<br />
				/src <br />
				├── /app{' '}
				<span className='padding-left'>
					# Конфигурация приложения (роутинг, провайдеры)
				</span>{' '}
				<br />
				│ ├── App.jsx
				<br />
				│ ├── routes.jsx
				<br />
				├── /pages{' '}
				<span className='padding-left'>
					# Страницы (собирают features и entities){' '}
				</span>{' '}
				<br />
				│ ├── HomePage.jsx
				<br />
				│ ├── ProfilePage.jsx
				<br />
				├── /features{' '}
				<span className='padding-left'>
					# Фичи (авторизация, поиск, корзина){' '}
				</span>{' '}
				<br />
				│ ├── /auth
				<br />
				│ │ ├── LoginForm.jsx
				<br />│ │ ├── model.js{' '}
				<span className='padding-left'># Логика авторизации </span>
				<br />
				├── /entities{' '}
				<span className='padding-left'>
					# Бизнес-логика (пользователь, товары){' '}
				</span>{' '}
				<br />
				│ ├── /user
				<br />
				│ │ ├── UserCard.jsx
				<br />
				│ │ ├── userModel.js
				<br />
				├── /shared{' '}
				<span className='padding-left'>
					# Общие UI-компоненты (кнопки, инпуты, утилиты)
				</span>{' '}
				<br />
				│ ├── Button.jsx
				<br />
				│ ├── Input.jsx
				<br />
				<ul>
					<li>- app – отвечает за настройку проекта (роутинг, провайдеры).</li>
					<li>- pages – собирает страницы из готовых фич.</li>
					<li>- features – фичи приложения (авторизация, поиск, фильтры).</li>
					<li>- entities – бизнес-логика (пользователь, товары).</li>
					<li>
						- shared – переиспользуемые компоненты (кнопки, формы, утилиты).
					</li>
				</ul>
			</div>
		</>
	)
}
