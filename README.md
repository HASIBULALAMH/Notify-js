# Toastr Simple

[![npm version](https://img.shields.io/npm/v/@hasibulalam/notify-js)](https://www.npmjs.com/package/@hasibulalam/notify-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Minzipped Size](https://img.shields.io/bundlephobia/minzip/@hasibulalam/notify-js)](https://bundlephobia.com/package/@hasibulalam/notify-js)

A lightweight, zero-dependency JavaScript library for non-blocking notifications. Toastr Simple is a modern re-implementation of the classic toastr.js, but without the jQuery dependency.

## Features

- 🚀 **Zero Dependencies** - No jQuery required
- 📦 **Lightweight** - Only ~2.5KB minified and gzipped
- 🎨 **Modern API** - Clean and simple to use
- 🌈 **Customizable** - Easy to style and extend
- 📱 **Responsive** - Works on all device sizes
- 🎭 **Smooth Animations** - CSS-based and performant
- 🔧 **Fully Configurable** - Global and per-notification options
- 🔄 **Queue System** - Handles multiple notifications gracefully

## Installation

### Via CDN

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/@hasibulalam/notify-js@2.0.1/toastr-simple.min.css" rel="stylesheet">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/@hasibulalam/notify-js@2.0.1/toastr-simple.min.js"></script>
```

### Via NPM

```bash
npm install @hasibulalam/notify-js
# or
yarn add @hasibulalam/notify-js
```

### Via ESM (Modern Browsers)

```javascript
import toastr from '@hasibulalam/notify-js';
import '@hasibulalam/notify-js/toastr-simple.css';
```

## Basic Usage

```javascript
// Show notifications
toastr('success', 'Operation completed!');
toastr('error', 'Something went wrong!');
toastr('warning', 'Please check your input');
toastr('info', 'New message received');

// Or using helper methods
toastr.success('Operation completed!');
toastr.error('Something went wrong!');
toastr.warning('Please check your input');
toastr.info('New message received');
```

## Advanced Usage

### Configuration

```javascript
// Global configuration
toastr.options = {
    timeOut: 3000,         // Time to display the toast (ms)
    closeButton: true,     // Show close button
    progressBar: true,     // Show progress bar
    position: 'top-right', // 'top-right', 'top-left', 'bottom-right', 'bottom-left'
    onClose: null          // Callback when toast is closed
};

// Per-toast configuration
toastr('success', 'Profile updated!', {
    timeOut: 5000,
    closeButton: true,
    onClose: () => console.log('Toast closed')
});
```

### API Reference

#### Methods
- `toastr(type, message, [options])` - Show a toast
- `toastr.success(message, [options])` - Show success toast
- `toastr.error(message, [options])` - Show error toast
- `toastr.warning(message, [options])` - Show warning toast
- `toastr.info(message, [options])` - Show info toast
- `toastr.clear()` - Remove all toasts

#### Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `timeOut` | number | `3000` | Time in ms before toast auto-closes |
| `closeButton` | boolean | `false` | Show close button |
| `progressBar` | boolean | `false` | Show progress bar |
| `position` | string | `'top-right'` | Toast position |
| `onClose` | function | `null` | Callback when toast is closed |

## Framework Integration

### React

1. Install the package:
```bash
npm install @hasibulalam/notify-js
# or
yarn add @hasibulalam/notify-js
```

2. Create a notification component:
```jsx
import { useEffect } from 'react';
import toastr from '@hasibulalam/notify-js';
import '@hasibulalam/notify-js/toastr-simple.css';

function App() {
  const showNotification = () => {
    toastr('success', 'Hello from React!');
  };

  return (
    <button onClick={showNotification}>
      Show Notification
    </button>
  );
}
```

### Vue.js

1. Install the package:
```bash
npm install @hasibulalam/notify-js
# or
yarn add @hasibulalam/notify-js
```

2. Use in your Vue component:
```vue
<template>
  <button @click="showNotification">Show Notification</button>
</template>

<script>
import toastr from '@hasibulalam/notify-js';
import '@hasibulalam/notify-js/toastr-simple.css';

export default {
  methods: {
    showNotification() {
      toastr('success', 'Hello from Vue!');
    }
  }
}
</script>
```

### Angular

1. Install the package:
```bash
ng add @hasibulalam/notify-js
# or
npm install @hasibulalam/notify-js
```

2. Add to your component:
```typescript
import { Component } from '@angular/core';
import toastr from '@hasibulalam/notify-js';
import '@hasibulalam/notify-js/toastr-simple.css';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="showNotification()">Show Notification</button>
  `
})
export class AppComponent {
  showNotification() {
    toastr('success', 'Hello from Angular!');
  }
}
```

### Express.js

1. Install the package:
```bash
npm install @hasibulalam/notify-js express express-session
```

2. Set up the middleware:
```javascript
// app.js
const session = require('express-session');
const { express } = require('@hasibulalam/notify-js/mvc');

app.use(session({ secret: 'your-secret-key' }));

// Flash messages
app.use((req, res, next) => {
  res.locals.messages = req.session.messages || [];
  req.session.messages = [];
  next();
});

// In your routes
app.post('/submit', (req, res) => {
    req.flash('success', 'Data saved successfully!');
    res.redirect('/');
});
```

3. In your template (EJS example):
```ejs
<% if (flash.success) { %>
    <script>
        toastr('success', '<%= flash.success %>');
    </script>
<% } %>
```

## Backend Framework Integration

### Laravel

1. Install via Composer:
```bash
composer require hasibulalam/notify-js
```

2. Publish assets:
```bash
php artisan vendor:publish --provider="Hasibulalam\NotifyJs\NotifyJsServiceProvider"
```

3. In your controller:
```php
public function store()
{
    // Set flash message
    return redirect()->back()->with([
        'notify' => [
            'type' => 'success',
            'message' => 'Operation completed successfully!'
        ]
    ]);
}
```

4. In your layout (app.blade.php):
```blade
<!DOCTYPE html>
<html>
<head>
    <link href="{{ asset('vendor/notify-js/toastr-simple.min.css') }}" rel="stylesheet">
</head>
<body>
    @if(session('notify'))
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const notify = @json(session('notify'));
            if (notify) {
                toastr(notify.type, notify.message);
            }
        });
    </script>
    @endif

    <script src="{{ asset('vendor/notify-js/toastr-simple.min.js') }}"></script>
</body>
</html>
```

### Django

1. Install via pip:
```bash
pip install django-toastr-simple
```

2. Add to INSTALLED_APPS in settings.py:
```python
INSTALLED_APPS = [
    # ...
    'toastr',
]
```

3. In your view:
```python
from django.contrib import messages

def my_view(request):
    messages.success(request, 'Operation completed successfully!')
    return redirect('home')
```

4. In your base template:
```html
{% load static %}
<!DOCTYPE html>
<html>
<head>
    <link href="{% static 'toastr/toastr-simple.min.css' %}" rel="stylesheet">
</head>
<body>
    {% if messages %}
    <script src="{% static 'toastr/toastr-simple.min.js' %}"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            {% for message in messages %}
                toastr('{{ message.tags }}', '{{ message }}');
            {% endfor %}
        });
    </script>
    {% endif %}
</body>
</html>
```

### Node.js (Express)

1. Install the package:
```bash
npm install @hasibulalam/notify-js express-session
```

2. Set up middleware (app.js):
```javascript
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Flash message middleware
app.use((req, res, next) => {
    res.locals.messages = req.session.messages || [];
    req.session.messages = [];
    next();
});
```

3. In your routes:
```javascript
app.post('/submit', (req, res) => {
    // Process form
    req.session.messages = [{
        type: 'success',
        message: 'Data saved successfully!'
    }];
    res.redirect('/');
});
```

4. In your template (EJS example):
```ejs
<!DOCTYPE html>
<html>
<head>
    <link href="/toastr-simple.min.css" rel="stylesheet">
</head>
<body>
    <% if (messages && messages.length) { %>
    <script src="/toastr-simple.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            <% messages.forEach(msg => { %>
                toastr('<%= msg.type %>', '<%= msg.message %>');
            <% }); %>
        });
    </script>
    <% } %>
</body>
</html>
```

### Ruby on Rails

1. Add to Gemfile:
```ruby
gem 'toastr-simple-rails'
```

2. Run bundle:
```bash
bundle install
```

3. In your controller:
```ruby
def create
  # Your logic here
  flash[:success] = 'Operation completed successfully!'
  redirect_to root_path
end
```

4. In your application layout:
```erb
<!DOCTYPE html>
<html>
<head>
  <%= stylesheet_link_tag 'toastr-simple' %>
</head>
<body>
  <% flash.each do |type, message| %>
    <div class="hidden" data-toastr="<%= type %>" data-message="<%= message %>"></div>
  <% end %>

  <%= yield %>

  <%= javascript_include_tag 'toastr-simple' %>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('[data-toastr]').forEach(el => {
        const type = el.dataset.toastr;
        const message = el.dataset.message;
        if (type && message) {
          toastr(type, message);
        }
      });
    });
  </script>
</body>
</html>
```

### ASP.NET Core

1. Install via NuGet Package Manager:
```bash
Install-Package Toastr.Simple
```

2. In your controller:
```csharp
public IActionResult Index()
{
    TempData["Notification"] = new { Type = "success", Message = "Operation completed!" };
    return View();
}
```

3. In your _Layout.cshtml:
```html
<!DOCTYPE html>
<html>
<head>
    <link href="~/lib/toastr-simple/toastr-simple.min.css" rel="stylesheet" />
</head>
<body>
    @if (TempData["Notification"] != null)
    {
        var notification = TempData["Notification"] as dynamic;
        <div id="notification" 
             data-type="@notification.Type" 
             data-message="@notification.Message" 
             style="display:none;"></div>
    }

    <script src="~/lib/toastr-simple/toastr-simple.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const notification = document.getElementById('notification');
            if (notification) {
                const type = notification.dataset.type;
                const message = notification.dataset.message;
                if (type && message) {
                    toastr(type, message);
                }
            }
        });
    </script>
</body>
</html>
```
            'message' => 'Data saved successfully!'
        ]
    ]);
}
```

3. In your main layout (app.blade.php):
```blade
@if(session('notify'))
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            toastr('{{ session('notify.type') }}', '{{ session('notify.message') }}');
        });
    </script>
@endif
```

### Django

1. Create a context processor:
```python
# myapp/context_processors.py
def notify_processor(request):
    return {
        'notify_messages': messages.get_messages(request)
    }
```

2. Add to settings.py:
```python
TEMPLATES = [
    {
        # ...
        'OPTIONS': {
            'context_processors': [
                # ...
                'myapp.context_processors.notify_processor',
            ],
        },
    },
]
```

3. In your template:
```html
{% for message in notify_messages %}
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            toastr('{{ message.tags }}', '{{ message|escapejs }}');
        });
    </script>
{% endfor %}
```

### Ruby on Rails

1. Create a helper method in `application_helper.rb`:
```ruby
module ApplicationHelper
  def notify_js_flash
    flash_messages = []
    flash.each do |type, message|
      type = 'success' if type == 'notice'
      type = 'error' if type == 'alert' || type == 'danger'
      flash_messages << "toastr.#{type}('#{j message}');" if message
    end
    
    javascript_tag flash_messages.join("\n") if flash_messages.any?
  end
end
```

2. In your layout (application.html.erb):
```erb
<%= notify_js_flash %>
```

3. In your controllers:
```ruby
def create
  # ...
  redirect_to root_path, notice: 'Operation completed!'
  # or
  redirect_to root_path, alert: 'Something went wrong!'
end
```

### Vanilla JavaScript / HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title>Notify.js Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/@hasibulalam/notify-js/notify.min.css" rel="stylesheet">
</head>
<body>
    <button onclick="toastr.success('Hello!')">Show Notification</button>
    <script src="https://cdn.jsdelivr.net/npm/@hasibulalam/notify-js/notify.min.js"></script>
</body>
</html>
```

### React
```jsx
import React from 'react';
import toastr from '@hasibulalam/notify-js';
import '@hasibulalam/notify-js/notify.min.css';

function App() {
    return (
        <button onClick={() => toastr.success('React Notification')}>
            Show Notification
        </button>
    );
}

export default App;
```

### Vue.js
```vue
<template>
  <button @click="showNotification">Show Notification</button>
</template>

<script>
import toastr from '@hasibulalam/notify-js';
import '@hasibulalam/notify-js/notify.min.css';

export default {
  methods: {
    showNotification() {
      toastr.success('Vue Notification');
    }
  }
};
</script>
```

### Angular
```typescript
import { Component } from '@angular/core';
import * as toastr from '@hasibulalam/notify-js';
import '@hasibulalam/notify-js/notify.min.css';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="showNotification()">Show Notification</button>
  `
})
export class AppComponent {
  showNotification() {
    toastr.success('Angular Notification');
  }
}
```

### Next.js
```jsx
// pages/index.js
import { useEffect } from 'react';
import toastr from '@hasibulalam/notify-js';
import '@hasibulalam/notify-js/notify.min.css';

export default function Home() {
  useEffect(() => {
    // Client-side only
    toastr.success('Next.js Notification');
  }, []);

  return (
    <button onClick={() => toastr.success('Clicked!')}>
      Show Notification
    </button>
  );
}
```

### Node.js (Express)
```javascript
// server.js
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');});
```

### Laravel (Blade)
```php
<!DOCTYPE html>
<html>
<head>
    <title>Laravel Notification</title>
    <link href="{{ asset('vendor/notify/notify.min.css') }}" rel="stylesheet">
</head>
<body>
    <button onclick="toastr.success('Laravel Notification')">Show Notification</button>
    
    <script src="{{ asset('vendor/notify/notify.min.js') }}"></script>
    
    @if(session('success'))
        <script>toastr.success('{{ session('success') }}');</script>
    @endif
</body>
</html>
```

### Django
```html
<!-- templates/index.html -->
{% load static %}
<!DOCTYPE html>
<html>
<head>
    <title>Django Notification</title>
    <link href="{% static 'notify/notify.min.css' %}" rel="stylesheet">
</head>
<body>
    <button onclick="toastr.success('Django Notification')">Show Notification</button>
    
    <script src="{% static 'notify/notify.min.js' %}"></script>
    
    {% if messages %}
        {% for message in messages %}
            <script>toastr.{{ message.tags }}('{{ message }}');</script>
        {% endfor %}
    {% endif %}
</body>
</html>
```

### Ruby on Rails
```erb
<!-- app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
<head>
  <title>Rails App</title>
  <%= stylesheet_link_tag 'notify.min', media: 'all' %>
</head>
<body>
  <%= yield %>
  
  <%= javascript_include_tag 'notify.min' %>
  
  <% flash.each do |type, message| %>
    <script>
      toastr['<%= type %>']('<%= message %>');
    </script>
  <% end %>
</body>
</html>
```

### PHP (Plain)
```php
<!DOCTYPE html>
<html>
<head>
    <title>PHP Notification</title>
    <link href="notify.min.css" rel="stylesheet">
</head>
<body>
    <button onclick="toastr.success('PHP Notification')">Show Notification</button>
    
    <script src="notify.min.js"></script>
    
    <?php if (isset($_SESSION['success'])): ?>
        <script>toastr.success('<?php echo $_SESSION['success']; ?>');</script>
        <?php unset($_SESSION['success']); ?>
    <?php endif; ?>
</body>
</html>
```

### Symfony
```twig
{# templates/base.html.twig #}
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}Welcome!{% endblock %}</title>
    <link href="{{ asset('build/notify.min.css') }}" rel="stylesheet">
</head>
<body>
    {% block body %}{% endblock %}
    
    <script src="{{ asset('build/notify.min.js') }}"></script>
    
    {% for type, messages in app.flashes %}
        {% for message in messages %}
            <script>toastr['{{ type }}']('{{ message|e('js') }}');</script>
        {% endfor %}
    {% endfor %}
</body>
</html>
```

## Configuration

### Global Configuration
```javascript
// Set default options
toastr.config({
    position: 'top-right', // or 'top-left', 'bottom-right', 'bottom-left'
    duration: 3000,        // in milliseconds (0 to disable auto-close)
    closeButton: true,     // show close button
    preventDuplicates: true, // prevent duplicate messages
    maxToasts: 5,          // maximum number of toasts to show at once
    spacing: 10,           // spacing between toasts in pixels
    
    // Custom icons
    icons: {
        success: '✓',
        error: '✕',
        warning: '!',
        info: 'i'
    },
    
    // Custom colors
    colors: {
        success: '#4CAF50',
        error: '#F44336',
        warning: '#FF9800',
        info: '#2196F3',
        text: '#FFFFFF',
        background: '#323232',
        close: '#FFFFFF'
    }
});
```

### Per-Notification Options
```javascript
// Customize individual notifications
toastr.success('Saved!', {
    duration: 5000,        // 5 seconds
    position: 'bottom-right',
    closeButton: true,
    // Override global colors for this notification
    colors: {
        success: '#2E7D32'
    }
});
```

## API Reference

### Methods
- `toastr.success(message, options)` - Show success notification
- `toastr.error(message, options)` - Show error notification
- `toastr.warning(message, options)` - Show warning notification
- `toastr.info(message, options)` - Show info notification
- `toastr.config(options)` - Update global configuration
- `toastr.closeAll()` - Close all active notifications

### Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| position | string | 'top-right' | Position of the notifications |
| duration | number | 3000 | Time in milliseconds before auto-close (0 to disable) |
| closeButton | boolean | true | Show close button |
| preventDuplicates | boolean | true | Prevent duplicate messages |
| maxToasts | number | 5 | Maximum number of toasts to show |
| spacing | number | 10 | Spacing between toasts in pixels |
| icons | object | - | Custom icons for each notification type |
| colors | object | - | Custom colors for notifications |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## License

MIT © [Hasibul Alam](https://github.com/hasibulalam)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

A lightweight, framework-agnostic toast notification library with zero dependencies.

![Notify.js Demo](https://via.placeholder.com/800x400.png?text=Notify.js+Demo)

## Features

- 🚀 **Zero Dependencies** - Works with any framework or vanilla JS
- 🎨 **Customizable** - Colors, positions, animations, and more
- 📱 **Responsive** - Works on all screen sizes
- 🎯 **Multiple Notification Types** - Success, Error, Warning, and Info
- ⚡ **Lightweight** - Only ~3KB minified + gzipped
- 🔄 **Queue System** - Handles multiple notifications gracefully
- 🎭 **Smooth Animations** - Beautiful enter/exit animations
- 💾 **Flash Messages** - Works with server-side frameworks and session storage
- 🔧 **Fully Configurable** - Global and per-notification options

## Installation

### Via CDN

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/notify/notify.min.css">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/notify/notify.min.js"></script>
```

### Via NPM

```bash
npm install @yourusername/notify-js
```

```javascript
import Notify from '@yourusername/notify-js';
import '@yourusername/notify-js/dist/notify.min.css';
```

## Basic Usage

```javascript
// Show a success notification
Notify.success('Operation completed successfully!');

// Show an error notification
Notify.error('Something went wrong!');

// Show a warning notification
Notify.warning('Please check your input!');

// Show an info notification
Notify.info('New message received');
```

## Configuration

### Global Configuration

Set default options for all notifications:

```javascript
Notify.config({
    position: 'top-right', // top-right, top-left, bottom-right, bottom-left
    duration: 3000,        // in milliseconds (0 to disable auto-close)
    closeButton: true,     // show close button
    preventDuplicates: true, // prevent duplicate messages
    maxToasts: 5,          // maximum number of toasts to show at once
    spacing: 10,           // spacing between toasts in pixels
    
    // Custom icons
    icons: {
        success: '✓',
        error: '✕',
        warning: '!',
        info: 'i'
    },
    
    // Custom colors
    colors: {
        success: '#4CAF50',
        error: '#F44336',
        warning: '#FF9800',
        info: '#2196F3',
        text: '#FFFFFF',
        background: '#323232',
        close: '#FFFFFF'
    }
});
```

### Per-Notification Configuration

Override global options for individual notifications:

```javascript
// Custom duration
Notify.success('Saved!', { duration: 5000 });

// Different position
Notify.info('Bottom right', { position: 'bottom-right' });

// No auto-close
Notify.info('Important message', { duration: 0 });

// Custom colors
Notify.info('Custom Styled', {
    colors: {
        info: '#9b59b6',
        text: '#fff'
    }
});
```

## API Reference

### Methods

- `Notify.success(message, options)` - Show a success notification
- `Notify.error(message, options)` - Show an error notification
- `Notify.warning(message, options)` - Show a warning notification
- `Notify.info(message, options)` - Show an info notification
- `Notify.config(options)` - Update global configuration
- `Notify.closeAll()` - Close all active notifications

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| position | string | 'top-right' | Position of the notifications (top-right, top-left, bottom-right, bottom-left) |
| duration | number | 3000 | Time in milliseconds before the notification auto-closes (0 to disable) |
| closeButton | boolean | true | Show close button |
| preventDuplicates | boolean | true | Prevent showing duplicate messages |
| maxToasts | number | 5 | Maximum number of toasts to show at once |
| spacing | number | 10 | Spacing between toasts in pixels |
| icons | object | { success: '✓', error: '✕', warning: '!', info: 'i' } | Custom icons for each notification type |
| colors | object | See below | Custom colors for notifications |

### Color Options

| Option | Default | Description |
|--------|---------|-------------|
| success | '#4CAF50' | Success notification background color |
| error | '#F44336' | Error notification background color |
| warning | '#FF9800' | Warning notification background color |
| info | '#2196F3' | Info notification background color |
| text | '#FFFFFF' | Text color |
| background | '#323232' | Default background color |
| close | '#FFFFFF' | Close button color |

## Browser Support

Notify.js works in all modern browsers, including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## License

MIT © [Your Name]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
#   N o t i f y - j s  
 