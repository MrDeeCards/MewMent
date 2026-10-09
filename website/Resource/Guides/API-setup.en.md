# MewMent · Connect your AI.

Verify an API, then select it separately for summaries and conversations. Follow the setup, understand the data flow, and resolve common errors.

Enter real credentials inside MewMent. This page only shows fictional values and does not accept real API keys.

## Session summaries

### 1. Bring your own model service

Get the Base URL, API key, exact model ID and supported protocol from your provider or self-hosted gateway. Check your balance, permissions and model access.

- MewMent is free to use; your model provider bills its own usage.

- An API can be configured without installing or verifying a local Agent.

- Summary text is sent to the provider you choose.

### 2. Open the session summary assistant

Open Settings in MewMent, find AI session time archiving, open the session summary assistant, and choose Add summary API.

- Existing entries can be edited or verified again.

- Session sources locate records; the API provider generates summaries. Configure both.

### 3. Name, protocol, address, model and key

Use a recognizable name. Select the protocol your provider supports, enter its base address and exact model ID, and enter the API key inside the app.

- Standard /v1 endpoints usually need no override.

- Use Advanced protocol settings for a nonstandard absolute endpoint path.

- Set Anthropic Version if your Messages provider requires it.

### 4. Verify an actual model reply

Choose Verify and save. The app sends a random test message and saves the configuration only after receiving the correct reply. A successful HTTP status alone is not sufficient.

- The test may consume provider credits.

- Keys go into the local operating-system credential store; the UI shows a mask.

- Check the error before repeatedly retrying.

### 5. Explicitly choose the verified API

Click “Use as conversation assistant” on the verified summary-provider entry, or choose it as the current summary assistant. Confirm the displayed active provider.

- Verified and saved does not mean selected.

- You may keep several providers, but choose the current summary provider explicitly.

- Selecting a different chat model does not change this choice.

### 6. Choose which local sessions to organize

Open session sources and automatic organization, enable the sources you need, save, then Scan now. Standard locations are detected; add paths for custom installations or unusual WSL layouts.

- Sources include Codex, Claude Code, OpenCode, OpenClaw, Hermes and Pi.

- A valid API does not create local sessions to scan.

- Only enabled sources are scanned, and summaries need eligible content.

### 7. Review the work and its time evidence

Switch to the AI perspective and expand a session. Check its summary, original location, dates and activity time to understand what happened and how long it took.

- Summaries explain the work; time comes from source evidence.

- Different sources may report exact or inferred time.

- No new messages should mean no repeated summary call for the same content.

## AI conversations

### 1. Choose a model for conversation and tools

Prepare your Base URL, API key, model ID and protocol. Conversation needs text generation; schedule management also needs compatible tool calling from the model and gateway.

- Chat and summaries can share a configuration or use different providers.

- You pay your provider separately for model/API usage.

- A local app does not make every chosen model offline.

### 2. Open model/API settings from the assistant

Click the cat logo at the top left to open the AI assistant. Use the settings button beside its model controls to add a model API, or reuse an existing verified entry.

- The configuration fields are the same as for summaries.

- This connects the in-app model; it is not the external MewMent MCP interface.

### 3. Verify a real reply before saving

Enter the service name, protocol, Base URL, model ID and API key, then Verify and save. Return to the assistant after success; check the address, key, balance and protocol after failure.

- A new entry requires a key; editing with an empty key retains the local credential.

- Summary and chat selections remain independent.

### 4. Choose the provider and model in chat

Select the verified provider in the assistant, then choose a model. Refresh the model list when needed, or enter a custom model ID when no catalog is available.

- Use the exact model ID from the provider.

- Start a new conversation when prompted after service configuration changes.

- Reasoning controls appear only for supported models.

### 5. Say hello, then try one clear request

Send a short greeting to check the reply. Then try “Plan 30 minutes tomorrow for organizing my notes.” Review the task, date and operation result.

- Real requests go to your chosen provider.

- Important changes follow the app’s authorization and confirmation flow.

- The full assistant and floating chat share the current conversation.

### 6. Switch, edit and revoke when necessary

Choose another provider in chat, or edit and re-verify the configuration. Check key permissions, quota, protocol and tool compatibility when an operation fails.

- Do not send full keys through this website or feedback emails.

- Removing local configuration does not revoke the provider’s key.

- If chat works but task changes do not, check tool support and app authorization.

## What goes in each field

### Name

A recognizable label, such as “My summary service”.

### Protocol

Choose Responses, Chat Completions or Anthropic Messages according to the provider, not just the model brand.

### Base URL / Service address

Use the service base address, such as https://api.example.com/v1. Do not use the chat website, a full /chat/completions route, or a URL containing credentials or query parameters.

### Model

The provider’s exact model ID with the necessary permissions. The placeholder your-model-id is not a working model.

### API Key

Enter the provider’s key inside the app. Required for new entries; leave empty when editing to retain the old key. Stored in the local OS credential store.

### Endpoint path override

Usually empty. For a nonstandard route, use an absolute path such as /chat/completions or /v1/messages. It replaces the path instead of appending to the Base URL and must not contain ? or #.

### Anthropic Version

Only for Anthropic Messages. Defaults to 2023-06-01; use another value only if required by your gateway.

Without an override, a base path ending in /v1 gets the protocol suffix appended. A bare domain gets /v1 first; other prefixes get /v1 plus the suffix. Remote services must use HTTPS. HTTP is allowed only for localhost, 127.0.0.1 or ::1.

## Protocol example

### OpenAI Responses

```text

Base URL: https://api.example.com/v1

Protocol: open_ai_responses

Model: your-model-id

Endpoint: https://api.example.com/v1/responses

```

### OpenAI Chat Completions

```text

Base URL: https://api.example.com/v1

Protocol: open_ai_chat_completions

Model: your-model-id

Endpoint: https://api.example.com/v1/chat/completions

```

### Anthropic Messages

```text

Base URL: https://api.example.com/v1

Protocol: anthropic_messages

Model: your-model-id

Endpoint: https://api.example.com/v1/messages

```

example.com and your-model-id are placeholders. Replace them with your provider’s actual base address and exact model ID.

## Edit, replace a key, or stop using a service

Edit a verified entry and verify it again. Leaving API Key empty when editing keeps the existing local credential; a new key replaces it. Failed verification does not overwrite the original configuration. Select another provider before removing one in use. Revoke a key through its original provider when needed.

## You can use a local Agent, too

Choose a local assistant in summary settings, then Find → Verify → Select. This is independent of API setup. Chat currently supports adapted Codex / Claude Code providers; not every session source is a chat provider. A local Agent may still use its own cloud model.

## Troubleshooting

### 401 / 403: invalid key or permissions

Check that the key is valid, complete and authorized for this model, and belongs to the same service as the Base URL. A website password is not an API key.

### 404: endpoint not found

Check protocol support and duplicated /v1 or full endpoint suffixes in Base URL. Use an endpoint override for nonstandard routes.

### 429, insufficient credit or rate limits

Check the provider’s balance, quota and rate limits; wait before retrying. Free access to MewMent does not include third-party model credits.

### The endpoint responds, but verification fails

The service must return the requested random test content. Error pages, empty or truncated replies and incompatible protocols can fail the check.

### The API is saved, but summaries do not appear

Explicitly select it as the current summary assistant, enable sources, save and scan. Check for recent eligible local sessions. No new messages may mean no new summary request.

### Chat works, but schedule changes do not

Check model and gateway tool-calling support, the selected protocol and app authorization prompts. A basic text reply does not prove every tool operation works.

### A local Agent is not discovered

Make sure it is installed, signed in and working independently. Search again and add installation or WSL paths when needed. Session sources and summary providers are configured separately.

### What happens after changing a key or configuration?

Edit and re-verify. An empty key keeps the existing credential. Start a new conversation when prompted after changing the service. Revoke compromised keys through the provider’s console.
