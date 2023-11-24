import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'add-defer-attribute', // Ім'я плагіну (можете назвати як захочете)
      transformIndexHtml(html) { // Функція для трансформації HTML
        return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (match) => {
          if (match.includes('defer')) {
            return match; // Якщо defer вже є, пропускаємо
          } else {
            return match.replace('<script', '<script defer'); // Додаємо defer, якщо його немає
          }
        });
      },
    },
  ],
});

