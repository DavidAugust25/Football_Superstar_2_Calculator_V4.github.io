
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://davidaugust25.github.io/Football_Superstar_2_Calculator/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Football_Superstar_2_Calculator"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25476, hash: 'f336387f430c3ae27b2c2eaef3c3e6cf1a5b16b7f4d8ad1498282759d9fd0728', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25989, hash: '711f6082b4e0bf3124fe5d655437de367277e9ea12c315df4d37eb95249d7da1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46905, hash: '52a4a3d5ccd88a886864cf07e91cea964089c42c7d4b5b9638b37157ea8e5281', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
