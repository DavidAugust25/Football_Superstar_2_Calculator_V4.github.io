
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Version_4.1"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Version_4.1",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 20022, hash: 'befe4b821104940eaea3d853827cb0e2b723206e100afc0ffd55c1ca44f86070', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15718, hash: '0ec2e65a19644319b7a466915d40efe2fd467528dccd1b30c8e80bec67f06b1d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Version_4.1/index.html': {size: 50036, hash: '552ee432a761877c3cb12e62b90218c9d9f31314f296271c22f1e36be80940e0', text: () => import('./assets-chunks/Version_4_1_index_html.mjs').then(m => m.default)},
    'styles-AYU7CIC2.css': {size: 236966, hash: 'PfwKBhdsv9U', text: () => import('./assets-chunks/styles-AYU7CIC2_css.mjs').then(m => m.default)}
  },
};
