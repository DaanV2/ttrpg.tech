import { devices, type PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run preview'
  },
  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    baseURL: 'http://localhost:4173',
  },
  testDir: 'tests',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/,
  reporter: [['list'], ['html', { open: 'on-failure', outputFolder: './reports/playwright/' }]],
  // retries: 2,

  projects: [
    {
      name: "Desktop Chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Desktop Firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "Desktop Webkit",
      use: { ...devices["Desktop Safari"] },
    },
    // The following browsers require specific installations that aren't included in the Docker image
    // You should comment these out when running in Docker
    /*
    {
      name: "Desktop Microsoft Edge",
      use: { ...devices["Desktop Edge"], channel: "msedge" },
    },
    {
      name: "Desktop Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
    */
    {
      name: "Mobile Chrome",
      dependencies: ["Desktop Chromium"],
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      dependencies: ["Desktop Webkit"],
      use: { ...devices["iPhone 12"] },
    },
  ]
};

if (process.env.CI) {
  if (Array.isArray(config.reporter)) {
    config.reporter?.push(['github']);
  }
}

export default config;
