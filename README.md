# Gulp-starter for layout

## Installation

### Clone repo

```bash
git clone https://github.com/Andy-Esm/gulp-starter.git

```

### Install all dependencies

```bash
npm install

```

### Run gulp

```bash
gulp

```

## Structure

```
gulp-starter
├── app
│   ├── css
│   │   ├── style.min.css
│   │──images
│   │──js
│   │   ├──main.js
│   │   ├──main.min.js
│   │──scss
│   │   ├──_common
│   │   │   ├──_global.scss
│   │   │   ├──_mixins.scss
│   │   │   ├──_vars.scss
│   │   │   ├──_reset.scss
│   │   ├──style.scss
│   │──index.html
├── .gitignore
├── .prettierrc.json
├── .stylelintrc.json
├── gulpfile.js
├── package.json
├── README.md

```

## Features

- [x] SCSS
- [x] Prettier
- [x] Stylelint
- [x] Babel
- [x] BrowserSync
- [x] Autoprefixer
- [x] CleanCSS
- [x] UglifyJS
- [x] ImageMin

## Usage

### SCSS

```scss
//_common/_mixins.scss
  @include flex-column;
    // display: flex;
    //flex-direction: column;
  @include flex-center;
    // display: flex;
    // justify-content: center;
    // align-items: center;
```




## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

[Andy Esm](https://github.com/Andy-Esm)
