# 预检请求实例

> 本示例基于`KOA`和`Jquery`搭建，可用来观测`OPTIONS预检请求`的整个过程，加深理解

## 启动

```js
// 拉取项目
git clone git@github.com:Foosux/preflight-request-demo.git

// 安装依赖
cd preflight-request-demo
npm i

// 启动 client 和 server 两个服务
npm run start:client    // 0.0.0.0:7777
npm run start:server    // 0.0.0.0:8888
```
## 观察测试

可结合 `浏览器调试工具` 和 `终端clone`观察：

- 发送`option`的时机
- 请求头在交互过程中的变化
- 跨域请求如何携带 `cookie`
