export const mockData = [
  {
    id: 1,
    header: "core/DevServer.js/app.use",
    origin:
      "https://github.com/cube-js/cube.js/tree/8d9eb688ba55d8821bebaf2a23fbb3addf93ab84/packages/cubejs-server-core/core/DevServer.js#L253",
    code: `app.use(serveStatic(path.join(__dirname, '../playground'), {
      lastModified: false,
      etag: false,
      setHeaders: (res, url) => {
       if (url.indexOf('/index.html') !== -1) {
        res.setHeader('Cache-Control', 'no-cache');
       }
      }
     })); asdasdas
     asd
     asd
     asd
     a
     das
     d
     asd
     as
     d
     sad
     as
     d`,
  },
  {
    id: 2,
    header: "metrics/server.js/Promise.fromNode.then",
    origin:
      "https://github.com/lando/lando/tree/c53a5e5f17a04764ddb2d5a68a104591f094c2f1/metrics/server.js#L92",
    code: `// Main logix
    Promise.fromNode(cb => {
     api.listen(config.LANDO_METRICS_PORT, cb);
    })
    .then(() => {
     log.info('Listening on port: %s', config.LANDO_METRICS_PORT);
    });`,
  },
  {
    id: 3,
    header: "server/api/admin.js/router.post",
    origin:
      "https://github.com/builderbook/builderbook/tree/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/8-begin/server/api/admin.js#L27",
    code: `router.post('/books/add', async (req, res) => {
      try {
       const book = await Book.add(Object.assign({ userId: req.user.id }, req.body));
       res.json(book);
      } catch (err) {
       logger.error(err);
       res.json({ error: err.message || err.toString() });
      }
     });`,
  },
  {
    id: 4,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 5,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 6,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 7,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 8,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 9,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 10,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 11,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 12,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 13,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 14,
    header: "server/api/customer.js/router.used",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
  {
    id: 15,
    header: "server/api/customer.js/router.use",
    origin:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/customer.js#L5",
    code: `router.use((req, res, next) => {
        if (!req.user) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       });`,
  },
];
