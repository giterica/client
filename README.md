giterica-client
===============

Mobile-friendly web SPA Giterica client. Javascript/TypeScript, Vue.js, Vuex, Vue router, Bootstrap4, Webpack, Protobuf/gRPC, Docker.

Build setup
-----------

This build system starts from template <https://github.com/Toilal/vue-webpack-template>.
Reason: <https://github.com/vuejs/vue-cli/issues/263#issuecomment-351552812>.

```bash
npm i

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Fixtures for development

Render JSON from YAML source (``src/dev-fixtures`` => ``fixtures-json-render``):

```bash
npm run fixtures
```

License
-------

MIT
