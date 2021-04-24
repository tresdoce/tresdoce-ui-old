module.exports = {
  roots: ['./src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  forceExit: true,
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: { '^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest' },
  testMatch: ['**/*.(test|spec|it|e2e).(ts|tsx|js|jsx)'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(jsx|css|less|scss|sass)$': 'identity-obj-proxy',
  },
  //moduleDirectories: ["node_modules", "src"],
  //testEnvironment: "jsdom",
};
