
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '节日预热抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '满心欢喜', },
    { key: 's', wording: '期待你的反应', },
    { key: 'd', wording: '还没开始，就已经失望了', },
  ],
  // 最终解释权归属人
  owner: 'McCall',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: 4,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '0.1314 红包', alias: '0.1314', image: '/images/6.png',  description: '「爱你一生一世」' },
  { key: 'w', name: '腾讯视频终身VIP', alias: 'VIP', image: '/images/2.png',  description: '“为你承包一辈子的 VIP”' },
  { key: 'e', name: '0.520 红包', alias: '0.520', image: '/images/6.png',  description: '「我爱你，就像老鼠爱大米」' },
  { key: 'r', name: '5.2 红包', alias: '5.2', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: '52 红包', alias: '52', image: '/images/6.png',  description: '「多点少点不重要，因为全是爱」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: '清空淘宝购物车', alias: '清购', image: '/images/7.png',  description: '“买！买！买！限额 520 RMB”' },
  { key: 'i', name: 'iPhone 14 Pro Max 256G', alias: '14 PM', image: '/images/8.png',  description: '「梦想还是要有的」' },
];
