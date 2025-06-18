 🍽️ Restaurant-Table-Booking-WebApp

A responsive and modern table reservation web application built with **React.js**, **TypeScript**, **Styled-Components**, and **Vite**. This app allows users to book tables, view special dishes, confirm reservations, and browse through customer testimonials — all in a seamless single-page experience.

🔗 **Live Website**: [https://pragin-t.github.io/Restaurant-table-booking-webapp/](https://pragin-t.github.io/Restaurant-table-booking-webapp/)

---

## 🚀 Features

- 📅 Table booking form with date, time, guest count, and occasion
- ✅ Booking confirmation page
- 🍝 Display of special dishes
- 👨‍🍳 Chef profile and restaurant section
- 💬 Real user testimonials
- 🧭 Fully responsive SPA using `react-router-dom`

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙋‍♂️ Author

**T. Pragin**  
GitHub: [@Pragin-T](https://github.com/Pragin-T)

---

## 📸 Screenshots

> *(Add actual screenshots in `/public` or `/assets` and link here)*

**Home Page View**  
![Restaurant Home](public/home-demo.png)

**Booking Form**  
![Booking Form](public/booking-form.png)

---

## 🛠️ Tech Stack

- ⚛️ React.js with Vite
- 🔠 TypeScript
- 🎨 Styled-Components
- 📍 React Router DOM
- 💡 Functional Component Architecture

---

## 📁 Project Folder Structure

Restaurant-table-booking-webapp/

public/

index.html

favicon.png

src/

assets/

Logo.svg

restaurantfood.jpg

...other images & icons

components/

BookingForm/

Button/

CallToAction/

Chicago/

ConfirmedBooking/

CustomersSay/

CustomersSayCard/

Footer/

Header/

MobileNav/

Nav/

SpecialFoodCard/

Specials/

pages/

Home/

Bookingpage/

ConfirmationPage/

styles/

global.ts

theme.ts

styled.d.ts

utils/

temp.ts

tests-ts.tsx

routes.tsx

main.tsx

vite-env.d.ts

.gitignore

index.html

package.json

tsconfig.json

tsconfig.node.json

vite.config.ts

README.md



## 🧪 Local Setup

Clone the repository:

```bash
git clone https://github.com/Pragin-T/Restaurant-table-booking-webapp.git
cd Restaurant-table-booking-webapp
Install the dependencies:

bash
Copy
Edit
npm install
Start the app:

bash
Copy
Edit
npm run dev
App will run at: http://localhost:5173

🌐 Deployment via GitHub Pages
Make sure the vite.config.ts file has the correct base path:

ts
Copy
Edit
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: "https://Pragin-T.github.io/Restaurant-table-booking-webapp/", // ✅ Important
});
Add deploy scripts to your package.json:

json
Copy
Edit
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
Now deploy:

bash
Copy
Edit
npm install gh-pages --save-dev
npm run build
npm run deploy
