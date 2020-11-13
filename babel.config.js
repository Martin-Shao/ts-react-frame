const envPreset = [
  '@babel/preset-env',
  {
    // 只导入需要的polyfill
    useBuiltIns: 'usage',
    // 指定 corejs版本
    corejs: 3,
    // 禁用模块化方案转换
    modules: false,
  },
];

module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-typescript'];
  const plugins = [];

  return {
    presets,
    plugins,
  };
}
