import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["**/*.(spec|test).ts"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,js}",
    "!src/**/index.ts",
    "!src/**/types/**"
  ],
  // (Opcional) activa umbrales mínimos
  // coverageThreshold: {
  //   global: { lines: 70, statements: 70, functions: 70, branches: 60 }
  // }
};

export default config;
