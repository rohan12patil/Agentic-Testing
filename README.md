
# Agentic Testing with Playwright

This project demonstrates how to use Playwright's agentic testing features for automated web application testing.

## Reference

- [Playwright Test Agents Documentation](https://playwright.dev/docs/test-agents)

## Project Setup

### Initialize Playwright Project

```bash
npm init playwright@latest
```

### Add Agents

```bash
npx playwright init-agents --loop=vscode
```

### Install Playwright MCP Extension

1. Install the "Playwright MCP" extension from VS Code extensions.
2. Start the server as per the extension instructions.

## Usage

### Planner

1. Open Copilot Chat in VS Code.
2. Select the Planner tool.
3. Generate a test plan for web application URLs, such as:
   - https://dashboard-automation.netlify.app
   - https://www.saucedemo.com

This will generate a `testplan.md` file.

### Generator

1. Use the generated `testplan.md` file as context in Copilot Chat.
2. Add a prompt like: "Generate test script for 1.1 standard user login".
3. The generated test file will be created.

### Running Tests

1. Add the generated test file to the chat context.
2. Use a prompt like: "Run this in headed mode" to execute the test with the browser visible.





