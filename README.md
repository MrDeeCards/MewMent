<div align="center">
  <img src="website/Resource/media/mark.svg" width="88" alt="MewMent 猫咪标志">
  <h1>MewMent</h1>
  <p><strong>把计划、实际用时和 AI 协作，放在同一条时间线上。</strong></p>
  <p>免费的 Windows 桌面日程、项目与 AI 会话管理软件。</p>
  <p>
    <a href="https://github.com/MrDeeCards/MewMent/releases">下载 Windows 版</a> ·
    <a href="https://mewment.vercel.app">官方网站</a> ·
    <a href="https://github.com/MrDeeCards/MewMent/issues">反馈问题</a> ·
    <a href="README.en.md">English</a>
  </p>
  <p>Windows 10 / 11 · x64 · 中文 / English · 注册登录后永久免费</p>
</div>

![MewMent 日程界面](website/Resource/media/01-main-panorama.png)

## 为什么做 MewMent

一天的工作很少只发生在一个待办列表里：计划会调整，任务会被打断，执行分成几段，项目资料分散在文件夹里，与 AI 的讨论又留在不同工具中。

MewMent 希望把这些工作线索联系起来。你可以先记下一件事，开始时计时，结束后补充完成情况；也可以把它放进项目和阶段目标，关联附件，再通过甘特图和统计回看自己的时间。与 AI 协作的历史也能整理进日程，方便查找讨论内容与原始路径。

## 能做什么

| 场景 | MewMent 提供的功能 |
| --- | --- |
| 安排今天 | 无需计划日期也能创建任务；支持子任务、倒计时、计划时间和日历范围选择 |
| 记录真实工作 | 开始 / 暂停计时、多段执行时间、历史补录、执行段与子任务映射、完成情况说明 |
| 推进长期项目 | 项目 → 阶段目标 → 任务；列表和可编辑图形视图；Markdown 模板导入与待激活任务 |
| 看清时间去向 | 计划与执行甘特图、分层展开、时间统计，以及按自然周期导出甘特图 |
| 管好相关资料 | 任务附件、可读文件目录、项目视角附件树导出 |
| 整理 AI 协作 | 查找并总结支持的本地 AI 会话，保存摘要与来源路径；支持 Windows / WSL 来源 |
| 用对话安排日程 | 接入自选模型 API；AI 助手可管理任务、子任务、执行记录与项目，并使用指定工作目录 |
| 与外部 Agent 协作 | 通过 MewMent MCP 接口读写日程，账号绑定密钥可撤销 |
| 让桌面轻一点 | 侧边栏、悬浮计时与迷你对话；可选择猫咪伙伴、主题、语言和日历国家 |

### 从安排到回顾

| 项目关系 | 计划与执行 | 时间统计 |
| :---: | :---: | :---: |
| ![项目图形视图](website/Resource/media/06-project-graph.png) | ![甘特图](website/Resource/media/08-gantt-subtasks.png) | ![时间统计](website/Resource/media/10-statistics.png) |

官网包含可操作的合成数据演示。截图与演示用于介绍功能，具体外观可能随版本调整。

## 下载与开始使用

当前发布：**0.10.8-dev.70，Windows x64 预览版**。这是持续改进中的预览版本。

1. 前往 [Releases](https://github.com/MrDeeCards/MewMent/releases)，下载 `MewMent-0.10.8-dev.70-windows-x64-setup.exe`。
2. 运行安装向导。安装为当前 Windows 用户提供，缺少 Microsoft Edge WebView2 时会提示安装该运行组件。
3. 打开 MewMent，注册账号并登录。软件永久免费，无试用倒计时、激活码或订阅续期。
4. 先创建一条任务，再尝试开始 / 暂停计时；AI 功能可稍后配置。
5. 如需 AI 总结或对话，在设置中配置自己的服务，完成连接验证。参考 [API 配置指南](website/Resource/Guides/API-setup.zh-CN.md)。

Release 同时提供 ZIP 免安装包与 `SHA256SUMS.txt`。ZIP 请完整解压并保持各程序位于同一目录，运行 `edgecalendar-public-preview.exe`。升级前建议使用软件的数据备份功能。

安装包目前**没有代码签名证书**，Windows 可能显示未知发布者提示。请核对下载来源与 SHA256；本仓库没有提供 macOS、Linux 或 Windows ARM64 安装包。

## 免费、账号与隐私

- **软件永久免费**。账号用于登录身份和基本界面配置同步。第三方 AI 模型的账号、额度和费用由所选服务商决定。
- **工作资料保存在本机**。日程、项目、附件与会话正文不通过 MewMent 账号服务跨设备同步。
- **云端只同步白名单内的界面偏好**，例如语言、主题、字体、布局和日历显示；不包括 API 配置、密钥或本机文件路径。
- **API 密钥保存在本机系统凭据库**。调用模型时，完成该请求所需的内容会发送到你选择的服务地址。
- **AI 工作目录由你指定**。助手的文件操作受工作目录边界约束；软件中的危险操作仍有确认流程。

阅读 [用户协议（拟定稿）](website/Resource/Legal/terms.zh-CN.md) 与 [隐私说明（拟定稿）](website/Resource/Legal/privacy.zh-CN.md)。

## 这个仓库包含什么

```text
README.md / README.en.md    产品介绍与使用入口
website/                   官方宣传网页、交互演示、指南与资源许可
docs/                      发布说明与校验信息
vercel.json                静态官网部署配置
```

这个仓库是 MewMent 的**公开下载与官网仓库**。应用安装包保存在 Releases；当前没有在这里提供桌面应用的完整源代码与构建工程。网页运行所需的前端代码与合成演示随官网公开。免费使用不等同于承诺完整开源；第三方字体等资源保留各自许可，见 [资源说明](THIRD_PARTY_NOTICES.md)。

官网是静态网站，Vercel 从本仓库部署 `website/`。本地预览可在仓库根目录运行 `python -m http.server 8080 --directory website`，然后访问 `http://localhost:8080`。网页演示使用合成数据，不连接你的桌面日程，不接受真实 API 密钥。

## 问题与建议

欢迎通过 [GitHub Issues](https://github.com/MrDeeCards/MewMent/issues) 描述问题。请附版本号、Windows 版本、复现步骤及已打码的截图；不要上传 API Key、密码、完整私人日程数据库或私人会话。

- 邮箱：**thehomeofsea@gmail.com**
- 微信公众号：**Mr.DeeCards**
- Reddit 显示名：**Dr.DeeCards**

---

MewMent — 日程、项目、时间与猫咪。
