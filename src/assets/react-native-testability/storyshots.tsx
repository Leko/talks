/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { SearchResult } from "./SearchResult";

storiesOf("pages/SearchResult", module)
  .add("loading", () => <SearchResult loading />)
  .add("result is empty", () => (
    <SearchResult
      loading={false}
      items={]}
    />
  ))
  .add("results", () => (
    <SearchResult
      loading={false}
      items={[
        {
          id: "xxx",
          text: "ああああああああああ"
        }
      ]}
    />
  ));

// -- jest.config.js ---

module.exports = {
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/.jest/register-context.js', 'jest-canvas-mock'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^react-native$': 'react-native-web',
    '^react-native-svg$': 'svgs',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(react-native-svg-charts|react-native-calendars)/)',
  ],
}

// -- Storyshot.test.ts ---

import path from "path";
import initStoryshots, { renderOnly } from "@storybook/addon-storyshots";

initStoryshots({
  configPath: path.join(__dirname, "..", ".storybook"),
  framework: "react",
  test: renderOnly
});
