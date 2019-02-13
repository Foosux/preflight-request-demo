# 预检请求实例

## 启动

```js
// 拉取项目
git clone git@github.com:Foosux/preflight-request-demo.git

// 安装依赖
cd preflight-request-demo
npm i

// 启动 client 和 server 两个服务
npm run start:client
npm run start:server
```
## 观察测试

重点关注

- 发送`option`的时机
- 请求头的变化
- 如何携带 cookie
