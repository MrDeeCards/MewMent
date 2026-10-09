# Privacy and data handling

Draft · 8 October 2026

This draft describes free use of MewMent and its data handling. The effective version will be identified at release. This website does not collect payments or payment details.

- Work content stays on your device

- The cloud handles accounts, UI preferences and necessary security data

- AI requests go to the provider you choose

## 1. Three data boundaries

Your device stores schedules, projects, attachments, summaries, chat history and backups. The account cloud handles registration, sign-in, identity and necessary security records, and syncs basic interface preferences such as language, theme, font, layout and calendar display. Your chosen AI service receives text and authentication needed for summaries or conversations.

Work content not going to MewMent’s account cloud does not mean your device never connects to a network. Sign-in, UI preference sync, enabled AI APIs and links you open make their respective requests.

## 2. Local work content

Schedules, tasks, subtasks, projects, time records, summaries and conversations are stored locally with account separation. Enabled Agent session directories are scanned read-only. Records may include source identifiers, workspace paths, summaries and time evidence.

MewMent’s account cloud does not store this work content or provide content synchronization. Exporting, copying, backing up to another location or voluntarily sending support material creates a destination you choose.

## 3. Account-cloud information

Account services process usernames, display names, account identifiers, protected authentication material and session status, account role and status, necessary account and authorization history, device identifiers and security records. The account cloud also stores a limited set of basic UI preferences so display settings can follow you across computers. Network infrastructure may generate IP and timestamp connection or security records.

Synced fields are limited to predefined interface options, values and colors. They exclude tasks, projects, attachments, conversation text, API keys or provider settings, local paths, calendar notes, MCP keys and arbitrary text. Account and preference data can still relate to a person and must not be described as no personal information at all. The account cloud does not proxy model requests.

## 4. API-key storage and use

Keys are saved in the operating system’s credential store on your own computer—Windows Credential Manager on Windows. Ordinary configuration records and the UI use a mask; the full key is not uploaded to MewMent’s account cloud.

For model requests, the client sends authentication to your configured service address using the selected protocol. Choose a trustworthy endpoint and appropriate provider permissions, budgets and revocation settings. The website demo uses invalid sample values and does not accept real keys.

## 5. Summaries and AI conversations

When summaries are enabled, bounded excerpts with the app’s implemented redaction are passed to your selected Agent/API. Time evidence comes from source records, not from estimating the length of a summary.

Chat sends messages, context and information needed for authorized operations to the selected model. Provider location, retention, training use and security depend on that provider’s policy. MewMent does not promise third-party zero retention. A local Agent’s own configuration determines whether it connects to the network.

You can switch or stop using a provider, disable unneeded sources and revoke a key with the provider. Ordinary tasks and schedules do not inherently require enabling AI.

## 6. Retention, devices and deletion

You control local retention and deletion through app functions, backups and device management. Stopping use of the app does not automatically delete these local files. App backups exclude system credentials and login tokens; credentials may need reconfiguration after reinstalling.

Accounts and necessary authorization history, device changes and security records are retained for as long as needed to provide the service, protect security and meet legal obligations. Immediate erasure of every historical record is not promised. Email the creator about device replacement or account-data retention and deletion.

## 7. Feedback, website and links

Email addresses, descriptions, screenshots or samples you voluntarily provide for support should be used to communicate and handle that request. Remove keys, passwords and unnecessary private content first. Support should not require your full API key.

The current website has no analytics tracking, online API-key form or session-upload endpoint. It saves only a language preference in the browser. Public hosting and external links still receive normal web requests. Email and linked sites have their own privacy rules.

## 8. Your choices and requests

Choose whether to enable AI, which sources to scan, which provider to use, whether to export or send material, and when to replace or revoke credentials. Email thehomeofsea@gmail.com for access, correction, account-closure or deletion requests, subject to applicable law and necessary identity checks.

This notice follows the implemented data flow. Future content synchronization, additional collection or changed purposes require separate disclosure and explicit consent where needed; they are not silently authorized by the current setup.
