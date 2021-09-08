module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],

  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },

  preset: '@vue/cli-plugin-unit-jest'
}
