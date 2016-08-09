import ensureEnvVariablesExist from '../../shared/utils/ensureEnvVariablesExist';

ensureEnvVariablesExist([
  'SERVER_PORT',
  'DISABLE_SSR',
  'CLIENT_BUNDLE_HTTP_PATH',
  'CLIENT_BUNDLE_OUTPUT_PATH',
  'CLIENT_BUNDLE_ASSETS_FILENAME',
  'CLIENT_BUNDLE_CACHE_MAXAGE',
]);

const CONFIG = {
  SERVER_PORT: parseInt(process.env.SERVER_PORT, 10),
  DISABLE_SSR: process.env.DISABLE_SSR === 'true',
  CLIENT_BUNDLE_HTTP_PATH: process.env.CLIENT_BUNDLE_HTTP_PATH,
  CLIENT_BUNDLE_OUTPUT_PATH: process.env.CLIENT_BUNDLE_OUTPUT_PATH,
  CLIENT_BUNDLE_ASSETS_FILENAME: process.env.CLIENT_BUNDLE_ASSETS_FILENAME,
  CLIENT_BUNDLE_CACHE_MAXAGE: process.env.CLIENT_BUNDLE_CACHE_MAXAGE,
};

export default CONFIG;