import home from '@/pages/home/config'; // index的接口
/**
 * 请求公共参数
 */

export const commonParame = {};

/**
 * 请求的映射文件
 */

export const httpRequestConfig = {
  loginUrl: '/api/user/wechat-auth', // 微信的登陆接口
  ...home
};
