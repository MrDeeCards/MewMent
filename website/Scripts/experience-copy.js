/* Bilingual product and scene copy, with the free-software policy. */
window.MewExperience={
  "zh": {
    "nav": [
      "MewMent 主页",
      "功能介绍",
      "联系作者"
    ],
    "navShort": [
      "主页",
      "功能",
      "联系"
    ],
    "homeTitle": "计划与实际，<br>记在一起。",
    "homeLine": "免费的 Windows 日程、项目与计时软件。手动任务与本地 AI 会话统一管理，直接查看统计和甘特图。",
    "homePrimary": "查看功能与演示",
    "homeSecondary": "看计时如何工作",
    "catLabel": "MewMent 猫咪伙伴",
    "catGallery": "认识 11 位猫咪伙伴",
    "catSelect": "选择猫咪伙伴",
    "catActions": [
      "摸摸头",
      "伸个懒腰",
      "逗一逗"
    ],
    "catWords": [
      "喵，我在。",
      "呼噜呼噜……",
      "伸个懒腰。",
      "抓到啦！"
    ],
    "homePanes": [
      "猫咪伙伴",
      "日程动画"
    ],
    "homePreview": {
      "label": "MewMent 计划与实际计时动画",
      "category": "日程与计时",
      "recording": "正在计时",
      "timerLabel": "本次打开网页后的计时",
      "tasksLabel": "今天的日程",
      "tasks": [
        "整理项目资料",
        "完成分析报告",
        "回顾项目进度"
      ],
      "status": {
        "waiting": "待开始",
        "running": "计时中",
        "done": "已完成"
      },
      "dockLabel": "收起在屏幕右侧的 MewMent 黑猫入口，计时中猫眼指针旋转",
      "edgeLabel": "收起后继续计时",
      "caption": "空心是计划，实心是实际。",
      "planned": "计划",
      "actual": "实际"
    },
    "featuresTitle": "从安排日程，到回顾整个项目。",
    "featureSelect": "选择功能",
    "sceneSelect": "选择演示",
    "view": "查看界面",
    "expand": "放大查看",
    "restart": "重新演示",
    "backFeatures": "返回功能介绍",
    "setupSummary": "配置会话总结服务",
    "setupChat": "配置日程助手",
    "setupTitle": [
      "自动总结服务设置",
      "日程助手服务设置"
    ],
    "features": [
      {
        "id": "schedule",
        "name": "日程管理",
        "body": "在日历上安排任务，记录每一段实际用时。中断后继续，漏记了也能补录。",
        "scenes": [
          [
            "日程与计时",
            "planner"
          ],
          [
            "悬浮计时",
            "floating"
          ]
        ],
        "details": [
          {
            "can": [
              "在左侧时间轴拖选时段，新建日程。",
              "开始、暂停或继续计时；支持多个任务同时执行。",
              "拆分子任务，在执行记录中补录并写备注。"
            ],
            "note": [
              "补录不能填未来；不足 15 分钟的已结束计时段保留记录，但不计有效时长。"
            ]
          },
          {
            "can": [
              "左键展开主窗口，右键打开计时仪表盘。",
              "滚轮切换待办，直接开始或暂停计时。",
              "切换迷你对话，与主窗口共用会话。"
            ],
            "note": [
              "收起后仍继续计时，猫眼中的红针随之转动。"
            ]
          }
        ]
      },
      {
        "id": "statistics",
        "name": "时间统计",
        "body": "按日期回顾手动任务与 AI 会话，查看投入分布和完成情况。",
        "scenes": [
          [
            "时间统计",
            "statistics"
          ]
        ],
        "details": [
          {
            "can": [
              "分别查看手动任务、AI 会话或全部记录。",
              "选择近 7 天、近 30 天或自然周、月。",
              "查看投入排名、完成率和每日时间趋势。"
            ],
            "note": [
              "总投入按时间区间去重；分类明细以各自记录为准。"
            ]
          }
        ]
      },
      {
        "id": "projects",
        "name": "项目、日程与附件",
        "body": "项目拆成阶段目标，目标关联日程，资料放进对应的附件目录。",
        "scenes": [
          [
            "项目结构",
            "project"
          ],
          [
            "日程与附件",
            "integration"
          ]
        ],
        "details": [
          {
            "can": [
              "新建项目和目标，关联已有日程。",
              "切换树形和图形视图，拖动节点或自动排列。",
              "用 Markdown 导入项目计划或导出项目树。"
            ],
            "note": [
              "一个日程可以关联多个项目；解除关联不会删除日程。"
            ]
          },
          {
            "can": [
              "给日程建立附件目录，集中存放相关资料。",
              "按项目、目标和日程导出附件目录树。"
            ],
            "note": [
              "日程附件目录可直接编辑；项目附件树是自动更新的导出副本。"
            ]
          }
        ]
      },
      {
        "id": "gantt",
        "name": "甘特图与自动导出",
        "body": "已有任务记录直接生成甘特图，对照计划与实际，并自动导出给他人查看。",
        "scenes": [
          [
            "甘特图",
            "gantt"
          ],
          [
            "自动导出设置",
            "export"
          ]
        ],
        "details": [
          {
            "can": [
              "按日、周、月查看计划与实际两条时间线。",
              "从项目展开到子任务和每段执行。",
              "悬停执行条，查看时间与备注。"
            ],
            "note": [
              "图表来自日程记录，修改记录后同步更新。"
            ]
          },
          {
            "can": [
              "导出 Excel 或可直接打开的交互网页。",
              "选择自然周期、滚动周期或指定日期。",
              "设置目录与间隔，自动更新当月导出文件。"
            ],
            "note": [
              "自动导出需要软件保持运行；导出文件的修改不会写回。"
            ]
          }
        ]
      },
      {
        "id": "sessions",
        "name": "本地 AI 会话管理",
        "body": "把本地 AI 会话统一收进日程，查看摘要、工作区和有记录依据的协作用时。",
        "scenes": [
          [
            "会话与总结",
            "ai"
          ],
          [
            "会话来源设置",
            "sources"
          ]
        ],
        "setup": 0,
        "details": [
          {
            "can": [
              "汇集 Codex、Claude Code、OpenCode 等本地会话。",
              "生成内容摘要，查看项目目录和原始来源。",
              "支持时可复制继续命令，或返回原工具继续。"
            ],
            "note": [
              "优先采用原生执行起止；缺失时按会话事件推断，并标明时间依据。"
            ]
          },
          {
            "can": [
              "选择扫描工具，或添加自定义来源目录。",
              "设置扫描间隔和摘要语言。",
              "连接本机智能体或自己的模型 API 生成总结。"
            ],
            "note": [
              "只读扫描原会话；采纳最近 7 天有活动证据的会话。",
              "摘要会将必要会话片段交给所选提供方；本机智能体也可能使用云模型。"
            ]
          }
        ]
      },
      {
        "id": "assistant",
        "name": "AI 自动化日程管理",
        "body": "让 AI 帮你安排和维护复杂日程。在软件内对话，或通过 MCP 连接外部智能体。",
        "scenes": [
          [
            "从指令到日程",
            "workflow"
          ],
          [
            "内置日程助手",
            "assistant"
          ],
          [
            "外部智能体接入",
            "mcp"
          ]
        ],
        "setup": 1,
        "details": [
          {
            "can": [
              "说清要做什么，以及计划时间。",
              "由助手创建日程，回到列表查看结果。"
            ],
            "note": [
              "AI 功能需自行连接可用服务，模型费用另计。"
            ]
          },
          {
            "can": [
              "创建、修改日程和子任务，补录执行时间。",
              "管理项目与目标，查询统计和甘特图。"
            ],
            "note": [
              "删除日程、执行记录、项目或目标，需对话授权后再点击独立确认。"
            ]
          },
          {
            "can": [
              "在设置中生成 MCP 密钥并复制连接配置。",
              "让外部智能体查询和管理日程、项目与统计。",
              "不再使用时，撤销对应密钥。"
            ],
            "note": [
              "密钥包含删除权限。外部调用不经过内置聊天确认。"
            ]
          }
        ]
      },
      {
        "id": "cats",
        "name": "猫咪伙伴",
        "body": "11 位猫咪伙伴，可以选择形象、边框和颜色。点头像会回应，也会在工作间隙播放动作。",
        "scenes": [],
        "details": []
      }
    ],
    "integrationTitle": "一个项目，把日程和资料连起来",
    "integrationProject": "秋日研究计划",
    "integrationGoals": [
      "整理资料",
      "完成分析",
      "整理成果"
    ],
    "integrationTasks": [
      [
        "梳理研究问题",
        "汇总参考文献"
      ],
      [
        "核对数据",
        "验证分析结果"
      ],
      [
        "整理图表",
        "准备项目汇报"
      ]
    ],
    "integrationFiles": [
      [
        "研究问题.md",
        "参考文献.pdf"
      ],
      [
        "数据说明.csv",
        "分析笔记.md"
      ],
      [
        "结果图表.png",
        "项目汇报.pdf"
      ]
    ],
    "integrationFolder": "项目附件目录",
    "integrationHint": "选择一个阶段，查看关联的日程和附件。",
    "mcpTitle": "让外部智能体管理日程",
    "mcpSteps": [
      "在设置中创建 MCP 密钥",
      "将连接配置交给外部智能体",
      "用对话管理日程和项目"
    ],
    "mcpExample": "把这个项目拆成三阶段，并安排本周可以推进的日程。",
    "mcpNote": "MCP 执行日程操作；会话总结整理已经发生的 AI 协作。",
    "galleryTitle": "选择你的猫咪伙伴。",
    "galleryHint": "点选一位，回到主页摸摸头或逗它玩。",
    "galleryChoose": "选择这位伙伴",
    "homeFooter": "好好做事，也好好休息。",
    "featuresMobile": [
      "功能说明",
      "查看演示"
    ],
    "guideBack": "返回",
    "guideRead": "阅读步骤",
    "guideWatch": "配置演示",
    "labels": {
      "can": "你可以",
      "note": "使用说明"
    }
  },
  "en": {
    "nav": [
      "MewMent home",
      "Features",
      "Contact"
    ],
    "navShort": [
      "Home",
      "Features",
      "Contact"
    ],
    "homeTitle": "Your plans. <br>Your actual time. <br>One place.",
    "homeLine": "A free Windows planner, project organizer and time tracker. Manage tasks and local AI sessions, then review statistics and Gantt charts.",
    "homePrimary": "Explore the features",
    "homeSecondary": "See the timer at work",
    "catLabel": "MewMent cat companions",
    "catGallery": "Meet all 11 companions",
    "catSelect": "Choose a cat companion",
    "catActions": [
      "A gentle pat",
      "A little stretch",
      "Play together"
    ],
    "catWords": [
      "Mew. I’m here.",
      "Purr…",
      "A little stretch.",
      "Caught it!"
    ],
    "homePanes": [
      "Cat companions",
      "Time in motion"
    ],
    "homePreview": {
      "label": "MewMent planned and actual time animation",
      "category": "Plans & timers",
      "recording": "Timer running",
      "timerLabel": "Time since this page opened",
      "tasksLabel": "Today’s tasks",
      "tasks": [
        "Gather project notes",
        "Write the analysis",
        "Review project progress"
      ],
      "status": {
        "waiting": "Up next",
        "running": "Timing",
        "done": "Done"
      },
      "dockLabel": "Collapsed MewMent cat at the right screen edge, with its clock hand turning while timing",
      "edgeLabel": "Still timing",
      "caption": "Outlined plans. Filled work sessions.",
      "planned": "Planned",
      "actual": "Actual"
    },
    "featuresTitle": "From daily plans to whole projects.",
    "featureSelect": "Choose a feature",
    "sceneSelect": "Choose a demo",
    "view": "View the interface",
    "expand": "Enlarge view",
    "restart": "Replay",
    "backFeatures": "Back to features",
    "setupSummary": "Set up session summaries",
    "setupChat": "Set up the planner assistant",
    "setupTitle": [
      "Automatic summary setup",
      "Planner assistant setup"
    ],
    "features": [
      {
        "id": "schedule",
        "name": "Planning & time tracking",
        "body": "Plan tasks on the calendar and keep every work session. Resume after a pause or backfill time you missed.",
        "scenes": [
          [
            "Planner & timers",
            "planner"
          ],
          [
            "Floating timer",
            "floating"
          ]
        ],
        "details": [
          {
            "can": [
              "Drag a time slot on the day grid to create a plan.",
              "Start, pause and resume timers, including several tasks at once.",
              "Split tasks into subtasks; backfill sessions and add notes."
            ],
            "note": [
              "No future backfills. Completed segments under 15 minutes are kept but excluded from credited time."
            ]
          },
          {
            "can": [
              "Left-click for the main window; right-click for the timer dashboard.",
              "Scroll through to-dos and start or pause a timer.",
              "Open mini chat with the same conversation as the main window."
            ],
            "note": [
              "Timers continue when collapsed; the red hand in the cat’s eye keeps turning."
            ]
          }
        ]
      },
      {
        "id": "statistics",
        "name": "Time statistics",
        "body": "Review task time and AI sessions by date, with effort, completion and activity patterns in one view.",
        "scenes": [
          [
            "Time statistics",
            "statistics"
          ]
        ],
        "details": [
          {
            "can": [
              "View manual tasks, AI sessions, or both.",
              "Choose the last 7 or 30 days, or calendar weeks and months.",
              "See effort rankings, completion rates and daily trends."
            ],
            "note": [
              "Total time merges overlapping intervals. Breakdown views use their own records."
            ]
          }
        ]
      },
      {
        "id": "projects",
        "name": "Projects, tasks & files",
        "body": "Break projects into milestones, connect daily tasks, and keep the related files alongside the work.",
        "scenes": [
          [
            "Project structure",
            "project"
          ],
          [
            "Tasks & attachments",
            "integration"
          ]
        ],
        "details": [
          {
            "can": [
              "Create projects and milestones; link existing tasks.",
              "Switch tree and graph views, drag nodes or auto-arrange.",
              "Import project plans or export the project tree as Markdown."
            ],
            "note": [
              "A task can belong to several projects. Unlinking does not delete it."
            ]
          },
          {
            "can": [
              "Keep a dedicated attachment folder for each task.",
              "Export a folder tree of projects, milestones and task files."
            ],
            "note": [
              "Edit task-folder files directly. The project tree is an automatically updated export copy."
            ]
          }
        ]
      },
      {
        "id": "gantt",
        "name": "Gantt & automatic export",
        "body": "Turn task records into Gantt charts, compare plans with actual work, and export the results automatically.",
        "scenes": [
          [
            "Gantt chart",
            "gantt"
          ],
          [
            "Automatic export setup",
            "export"
          ]
        ],
        "details": [
          {
            "can": [
              "View planned and actual time by day, week or month.",
              "Expand projects into subtasks and individual sessions.",
              "Hover a work bar for its time and notes."
            ],
            "note": [
              "Charts follow the task records and update when those records change."
            ]
          },
          {
            "can": [
              "Export Excel or a self-contained interactive web page.",
              "Choose calendar periods, rolling periods or exact dates.",
              "Set a folder and interval to update the current month’s export."
            ],
            "note": [
              "Automatic export needs the app running. Exported edits are not written back."
            ]
          }
        ]
      },
      {
        "id": "sessions",
        "name": "Local AI session management",
        "body": "Collect local AI sessions, with summaries, workspace links and recorded time.",
        "scenes": [
          [
            "Sessions & summaries",
            "ai"
          ],
          [
            "Session source settings",
            "sources"
          ]
        ],
        "setup": 0,
        "details": [
          {
            "can": [
              "Collect local Codex, Claude Code and OpenCode sessions.",
              "Read summaries and find the workspace and original source.",
              "Copy a resume command where supported, or continue in the original tool."
            ],
            "note": [
              "Uses recorded execution boundaries first, or estimates from session events and labels the time basis."
            ]
          },
          {
            "can": [
              "Choose tools to scan or add a custom source folder.",
              "Set the scan interval and summary language.",
              "Connect a local agent or your model API for summaries."
            ],
            "note": [
              "Source sessions are read-only. Scans accept activity from the last 7 days.",
              "Summaries send excerpts to your provider; a local agent may also use a cloud model."
            ]
          }
        ]
      },
      {
        "id": "assistant",
        "name": "AI planning automation",
        "body": "Ask AI to organize complex plans. Use chat inside MewMent or connect an external agent through MCP.",
        "scenes": [
          [
            "Request to schedule",
            "workflow"
          ],
          [
            "Planner assistant",
            "assistant"
          ],
          [
            "External agents & MCP",
            "mcp"
          ]
        ],
        "setup": 1,
        "details": [
          {
            "can": [
              "Describe the task and when you want to work on it.",
              "Let the assistant create it, then check it in the task list."
            ],
            "note": [
              "Connect your own AI service. Model usage is billed separately."
            ]
          },
          {
            "can": [
              "Create and edit tasks and subtasks; backfill work sessions.",
              "Manage projects and milestones; query statistics and Gantt."
            ],
            "note": [
              "Deleting tasks, work sessions, projects or milestones requires chat authorization and a separate confirmation."
            ]
          },
          {
            "can": [
              "Create an MCP key in Settings and copy the connection config.",
              "Let an external agent query and manage tasks, projects and statistics.",
              "Revoke the key when it is no longer needed."
            ],
            "note": [
              "The key allows deletion. External calls do not use the built-in chat confirmation."
            ]
          }
        ]
      },
      {
        "id": "cats",
        "name": "Cat companions",
        "body": "Eleven companions, with a choice of appearance, frames and colors. Click a portrait for a response, or watch their short animations between tasks.",
        "scenes": [],
        "details": []
      }
    ],
    "integrationTitle": "One project, with its tasks and files",
    "integrationProject": "Autumn research project",
    "integrationGoals": [
      "Gather material",
      "Complete analysis",
      "Share the results"
    ],
    "integrationTasks": [
      [
        "Define the question",
        "Collect references"
      ],
      [
        "Check the data",
        "Validate the results"
      ],
      [
        "Prepare figures",
        "Share a project update"
      ]
    ],
    "integrationFiles": [
      [
        "research-question.md",
        "references.pdf"
      ],
      [
        "data-notes.csv",
        "analysis-notes.md"
      ],
      [
        "results.png",
        "project-update.pdf"
      ]
    ],
    "integrationFolder": "Project attachment folder",
    "integrationHint": "Choose a milestone to see its tasks and files.",
    "mcpTitle": "Let an external agent manage your plans",
    "mcpSteps": [
      "Create an MCP key in Settings",
      "Give the connection config to your agent",
      "Manage tasks and projects through conversation"
    ],
    "mcpExample": "Break this project into three milestones and plan what I can move forward this week.",
    "mcpNote": "MCP performs planning actions. Session summaries organize AI work that already happened.",
    "galleryTitle": "Choose your cat companion.",
    "galleryHint": "Pick one, then return home to pat, stretch or play.",
    "galleryChoose": "Choose this companion",
    "homeFooter": "Care for your work. Leave room to rest.",
    "featuresMobile": [
      "Read about it",
      "View the demo"
    ],
    "guideBack": "Back",
    "guideRead": "Read the steps",
    "guideWatch": "Watch setup",
    "labels": {
      "can": "You can",
      "note": "Good to know"
    }
  }
};
