/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: process.env.SONARQUBE_USER_TOKEN,
    options: {
      "sonar.sources": "../buymeacoffee",
      "sonar.exclusions": "**/*.test.tsx",
      "sonar.tests": "../buymeacoffee",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
      "sonar.typescript.lcov.reportPaths": "../buymeacoffee/coverage/lcov.info",
      "sonar.testExecutionReportPaths": "../buymeacoffee/test-report.xml",
    },
  },
  () => process.exit()
);
