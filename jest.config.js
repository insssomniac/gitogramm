module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    '.*\\.(vue)$': 'vue3-jest',
    '.*\\.(js)$': 'babel-jest'
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/(*.)+(spec|test).[jt]s?(x)']
}
