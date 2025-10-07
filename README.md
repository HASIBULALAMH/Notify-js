# Notify.js

[![npm version](https://img.shields.io/npm/v/@hasibulalam/notify-js)](https://www.npmjs.com/package/@hasibulalam/notify-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Minzipped Size](https://badgen.net/bundlephobia/minzip/@hasibulalam/notify-js)](https://bundlephobia.com/package/@hasibulalam/notify-js)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A lightweight, zero-dependency JavaScript library for beautiful, non-blocking notifications.

## Installation

### Package Managers

#### NPM
```bash
# Install
npm install @hasibulalam/notify-js

# Publish (for maintainers)
npm login
npm publish --access public

# Update version and publish
npm version patch  # or minor/major
npm publish
```

#### Yarn
```bash
# Install
yarn add @hasibulalam/notify-js

# Publish (for maintainers)
yarn login
yarn publish
```

#### PNPM
```bash
# Install
pnpm add @hasibulalam/notify-js

# Publish (for maintainers)
pnpm login
pnpm publish
```

### CDN
```html
<!-- Latest Version -->
<link href="https://cdn.jsdelivr.net/npm/@hasibulalam/notify-js/dist/notify.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/@hasibulalam/notify-js/dist/notify.min.js"></script>

<!-- Specific Version -->
<link href="https://cdn.jsdelivr.net/npm/@hasibulalam/notify-js@2.0.1/dist/notify.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/@hasibulalam/notify-js@2.0.1/dist/notify.min.js"></script>
```

## Framework Integration

### React
```bash
# Create React App
npx create-react-app my-app
cd my-app
npm install @hasibulalam/notify-js

# Next.js
npx create-next-app my-app
cd my-app
npm install @hasibulalam/notify-js
```

### Vue.js
```bash
# Vue CLI
npm install -g @vue/cli
vue create my-app
cd my-app
npm install @hasibulalam/notify-js

# Nuxt.js
npx create-nuxt-app my-app
cd my-app
npm install @hasibulalam/notify-js
```

### Angular
```bash
# New Angular project
ng new my-app
cd my-app
npm install @hasibulalam/notify-js

# Or add to existing
ng add @hasibulalam/notify-js
```

### Svelte
```bash
# Svelte
npx degit sveltejs/template my-svelte-app
cd my-svelte-app
npm install
npm install @hasibulalam/notify-js

# SvelteKit
npm create svelte@latest my-app
cd my-app
npm install
npm install @hasibulalam/notify-js
```

### PHP/Laravel
```bash
# New Laravel project
composer create-project laravel/laravel my-app
cd my-app
npm install @hasibulalam/notify-js

# Publish assets (for Laravel packages)
php artisan vendor:publish --tag=notify-js
```

### Python/Django
```bash
# New Django project
django-admin startproject myproject
cd myproject
npm init -y
npm install @hasibulalam/notify-js

# Or with pipenv
pipenv --three
pipenv install django
npm install @hasibulalam/notify-js
```

### Ruby on Rails
```bash
# New Rails app
rails new myapp
cd myapp
yarn add @hasibulalam/notify-js

# Or with bundle
echo "gem 'toastr-rails'" >> Gemfile
bundle install
```

### .NET Core
```bash
# New .NET Core app
dotnet new webapp -o myapp
cd myapp
npm init -y
npm install @hasibulalam/notify-js
```

## Publishing to Package Registries

### NPM
```bash
# Login
npm login

# Publish
npm publish --access public

# Update version
npm version patch  # or minor/major
npm publish
```

### Yarn
```bash
# Login
yarn login

# Publish
yarn publish

# Update version
yarn version --patch  # or --minor/--major
yarn publish
```

### GitHub Packages
```bash
# .npmrc
@hasibulalam:registry=https://npm.pkg.github.com

# Publish
npm publish
```

## Building from Source

```bash
# Clone repository
git clone https://github.com/hasibulalam/notify-js.git
cd notify-js

# Install dependencies
npm install

# Build production files
npm run build

# Watch for changes
npm run dev

# Run tests
npm test
```

## Usage

### Basic Example
```javascript
import toastr from '@hasibulalam/notify-js';
import '@hasibulalam/notify-js/dist/notify.min.css';

// Simple notification
toastr.success('Operation completed!');

// With title
toastr.info('New message received', 'Notification');

// With options
toastr.warning('Please check your input', 'Warning', {
    timeOut: 5000,
    position: 'top-center'
});
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

📫 **Contact**: [hasibulalam108@gmail.com](mailto:hasibulalam108@gmail.com)  
🌐 **Website**: [Hasibul Alam](https://github.com/HASIBULALAMH)  

