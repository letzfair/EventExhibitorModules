# Exhibitors Module

This module allows you to embed and display a list of exhibitors from your LetzFair instance on your website.

## ⚠️ Important Notice

Before proceeding with the integration, it is necessary to communicate the domain or domains where you intend to use these modules so that their usage can be authorized.

Make sure you have access to the backend of the website where you plan to integrate the modules and that you have the technical skills required to modify the site's HTML and JavaScript code.

Do not modify the internal structure of the scripts included in the modules unless absolutely necessary.

## 🚀 Installation

Follow these steps to integrate the LetzFair Exhibitors module into your website.

### 1️⃣ Replace Placeholders

Before using the module, replace the following placeholders in `script.js`:
- `{ INSTANCE DOMAIN }` → Your LetzFair instance domain.
- `{ INSTANCE MANIFESTATION ID }` → The event ID from your LetzFair instance.

### 2️⃣ Add the JavaScript Code

To enable the module, you can either:
1. Include a reference to the JavaScript file at the end of the `<body>` tag in your HTML file:

   ```html
   <script src="path/to/script.js"></script>
   ```
   Replace `"path/to/script.js"` with the correct path where the `script.js` file is located on your server.

2. Alternatively, you can copy the contents of `script.js` and place them directly inside a `<script>` tag at the end of the `<body>` tag:

   ```html
   <script>
   // Paste the contents of script.js here
   </script>
   ```

### 3️⃣ Add the Exhibitors Element

Place the following `<div>` element where you want the list of exhibitors to appear:

```html
<div id="lf-espositori"></div>
```

## 🛠 Configuration Options

You can customize the display of the module by modifying the script parameters inside `script.js`:

| Parameter          | Description                                              | Default  |
|-------------------|----------------------------------------------------------|---------|
| `baseUrl`        | The domain of your LetzFair instance                     | Required |
| `manifestazioneId` | The event ID to fetch exhibitor data                     | Required |
| `lang`           | Language setting (remove to use browser language)        | `en`    |
| `backgroundColor` | Background color of the module                          | `#fff`  |
| `textColor`      | Text color inside the module                             | `#000`  |
| `mainColor`      | Primary color used in the module styling                 | `#f00`  |
| `menuPadding`    | Adjust this if your site has a fixed/sticky menu         | `30px`  |

## 🔧 Troubleshooting

- If the exhibitors do not load, ensure that `{ INSTANCE DOMAIN }` and `{ INSTANCE MANIFESTATION ID }` are correctly replaced in `script.js`.
- Check your browser console (`F12` → Console) for any error messages.