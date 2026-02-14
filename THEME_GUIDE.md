# Theme Configuration Guide

All colors, fonts, and styling are centralized in two main locations:

## 1. Tailwind Configuration (`tailwind.config.js`)

### Colors

Use Tailwind utility classes with the centralized theme colors:

#### Primary Colors

- `bg-primary` or `text-primary` - Main cyan (#00f2ff)
- `bg-primary-light` or `text-primary-light` - Light cyan
- `bg-primary-dark` or `text-primary-dark` - Dark cyan

#### Secondary Colors

- `bg-secondary` or `text-secondary` - Purple (#7000ff)
- `bg-secondary-light` or `text-secondary-light` - Light purple
- `bg-secondary-dark` or `text-secondary-dark` - Dark purple

#### Background Colors

- `bg-background` - Main dark background (#020205)
- `bg-background-card` - Card background (#10131a)
- `bg-background-card-dark` - Darker card background (#0a0d14)

#### Text Colors

- `text-text-primary` - Main text (#e0e0ff)
- `text-text-secondary` - White text (#ffffff)
- `text-text-muted` - Muted text

#### Border Colors

- `border-border-primary` - Cyan border
- `border-border-secondary` - Purple border
- `border-border-muted` - Muted border

### Opacity

Use with `/` notation for transparency:

- `bg-primary/10` - 10% opacity
- `bg-primary/20` - 20% opacity
- `bg-primary/30` - 30% opacity
- etc. (10, 20, 30, 40, 60, 70, 80, 90, 95)

### Fonts

- `font-orbitron` - Orbitron font family
- `font-inter` - Inter font family
- `font-century-gothic` - Century Gothic font family

## 2. CSS Variables (`src/app/globals.css`)

For advanced usage, you can use CSS variables directly:

```css
.custom-class {
  color: var(--color-primary);
  background: var(--color-bg-card);
  font-family: var(--font-orbitron);
}
```

### Available CSS Variables

**Colors:**

- `--color-primary`, `--color-primary-light`, `--color-primary-dark`
- `--color-secondary`, `--color-secondary-light`, `--color-secondary-dark`
- `--color-bg`, `--color-bg-card`, `--color-bg-card-dark`
- `--color-text-primary`, `--color-text-secondary`
- `--color-border-primary`, `--color-border-secondary`

**Fonts:**

- `--font-orbitron`
- `--font-inter`
- `--font-century-gothic`

### Custom Utility Classes

- `text-primary-glow` - Text with glow effect
- `bg-gradient-cyber` - Cyber-themed gradient background
- `border-glow-primary` - Border with glow effect

## Examples

### Before (Hardcoded)

```jsx
<div className="bg-[#10131a]/70 border border-[#00f2ff]/20">
  <h1 className="text-[#00f2ff]">Title</h1>
  <p className="text-[#e0e0ff]/80">Text</p>
</div>
```

### After (Using Theme)

```jsx
<div className="bg-background-card/70 border border-border-primary/20">
  <h1 className="text-primary">Title</h1>
  <p className="text-text-primary/80">Text</p>
</div>
```

## Benefits

1. **Consistency** - All colors/fonts managed from one place
2. **Easy Updates** - Change theme in one location
3. **Maintenance** - No scattered hex values throughout code
4. **Type Safety** - Tailwind autocomplete in IDEs
5. **Performance** - No duplicate color definitions

## Migration Guide

When updating existing code:

1. Replace `#00f2ff` → `primary`
2. Replace `#7000ff` → `secondary`
3. Replace `#020205` → `background`
4. Replace `#10131a` → `background-card`
5. Replace `#0a0d14` → `background-card-dark`
6. Replace `#e0e0ff` → `text-primary`
