# Header and Footer Components

This folder contains reusable header and footer components that can be included in any page.

## Files

- **`header.html`** - Header component with navigation
- **`footer.html`** - Footer component with contact info and links
- **`loader.js`** - JavaScript loader to include components in pages

## How to Use

### Step 1: Add container divs to your HTML

In any HTML page where you want to use the header and footer, add these container divs:

```html
<body>
    <!-- Header Container -->
    <div id="header-container"></div>

    <!-- Your page content goes here -->
    <div>
        <!-- Your content -->
    </div>

    <!-- Footer Container -->
    <div id="footer-container"></div>

    <!-- Include the loader script BEFORE closing body tag -->
    <script src="components/loader.js"></script>
</body>
```

### Step 2: Include the loader script

Add this script tag before the closing `</body>` tag (after all other scripts):

```html
<script src="components/loader.js"></script>
```

## Example Usage

### Complete page structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>My Page</title>
    <!-- Your CSS links -->
</head>
<body>
    <!-- Header will be loaded here -->
    <div id="header-container"></div>

    <!-- Your page content -->
    <div class="container">
        <h1>Page Content</h1>
        <p>This is the main content of the page.</p>
    </div>

    <!-- Footer will be loaded here -->
    <div id="footer-container"></div>

    <!-- Your JavaScript libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    
    <!-- Component loader (must be last) -->
    <script src="components/loader.js"></script>
</body>
</html>
```

## Customization

### Update Header/Footer Content

Edit `header.html` or `footer.html` directly. Changes will appear on all pages that use these components.

### Dynamic Content

The components include IDs that can be updated via JavaScript:
- `replaceCompanyName` - Company name in header
- `replaceEmail` - Email in header
- `replacePhone` - Phone in header
- `replaceAddress` - Address in footer
- `replaceEmailFooter` - Email in footer
- `replacePhoneFooter` - Phone in footer
- `replaceCompanyNameFooter` - Company name in footer
- `replaceDescription` - Description in footer
- `replaceCopyright` - Copyright text

You can update these using your config.js file or any JavaScript.

## Active Navigation

The loader automatically sets the active navigation item based on the current page. Make sure your navigation links have the `data-page` attribute:

```html
<a href="index.html" class="nav-item nav-link" data-page="index">Home</a>
<a href="about.html" class="nav-item nav-link" data-page="about">About</a>
```

## Notes

- Components are loaded via JavaScript fetch, so they work with static HTML files
- Make sure your server allows loading HTML files (some servers may block .html files)
- The loader script must be included after all other scripts
- Components will load automatically when the page loads

