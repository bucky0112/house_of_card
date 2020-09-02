module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const [obj] = args;
      obj.title = 'House of Card';
      obj.meta = {
        keywords: '桌遊, 派對遊戲, 家庭遊戲, 兒童遊戲, 策略遊戲, 戰爭遊戲, 抽象遊戲, 主題遊戲, 客製遊戲',
        description: 'Fun Times',
      };
      return args;
    });
  },
};
