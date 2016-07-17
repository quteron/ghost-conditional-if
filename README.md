[![Build Status](https://travis-ci.org/quteron/ghost-conditional-if.svg?branch=master)](https://travis-ci.org/quteron/ghost-conditional-if)  [![Coverage Status](https://coveralls.io/repos/github/quteron/ghost-conditional-if/badge.svg?branch=master)](https://coveralls.io/github/quteron/ghost-conditional-if?branch=master)

Ghost-Conditional-IF
=========

Custom handlebars helper to improve Ghost pagination. It adds possibility to display first, previous, current, next and last pages links:

<p align="center">
  <img src="https://github.com/quteron/ghost-paginator/raw/master/preview.jpg" alt="preview" width="40%">
</p>

## Installation

  `npm install ghost-conditional-if`

## Example

Register custom helper in the `config.js` ghost file:

```javascript
  var cif = require('ghost-conditional-if');
  var hbs = require('express-hbs');
  hbs.registerHelper('cif', cif);
```

Update ghost template `partials/pagination.hbs`:

```html
<nav class="pagination" role="navigation">
    {{#paginate page pages}} 
        {{#first}} 
            <a href="{{page_url page}}">{{page}}</a>
        {{/first}} 
        {{#prev}} 
            {{#if more}} 
                <span>&hellip;</span>
            {{/if}} 
            <a href="{{page_url page}}">{{page}}</a>
        {{/prev}}
        {{#active}} 
            <span>{{page}}</span>
        {{/active}} 
        {{#next}} 
            <a href="{{page_url page}}">{{page}}</a>
            {{#if more}} 
                <span>&hellip;</span>
            {{/if}}
        {{/next}}
        {{#last}} 
            <a href="{{page_url page}}">{{page}}</a>
        {{/last}} 
    {{/paginate}} 
</nav>
```

You can also include previous and next links using ghost built-in pagination attributes:

```html
<nav class="pagination" role="navigation">
    {{#if prev}}
        <a href="{{page_url prev}}">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </a>
    {{/if}}
    {{#paginate page pages}} 
        {{#first}} 
            <a href="{{page_url page}}">{{page}}</a>
        {{/first}} 
        {{#prev}} 
            {{#if more}} 
                <span>&hellip;</span>
            {{/if}} 
            <a href="{{page_url page}}">{{page}}</a>
        {{/prev}}
        {{#active}} 
            <span>{{page}}</span>
        {{/active}} 
        {{#next}} 
            <a href="{{page_url page}}">{{page}}</a>
            {{#if more}} 
                <span>&hellip;</span>
            {{/if}}
        {{/next}}
        {{#last}} 
            <a href="{{page_url page}}">{{page}}</a>
        {{/last}} 
    {{/paginate}}
    {{#if next}}
        <a href="{{page_url next}}">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </a>
    {{/if}} 
</nav>
```

## Tests

  `npm test`

## License

MIT License
