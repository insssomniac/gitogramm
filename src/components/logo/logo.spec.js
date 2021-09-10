import logo from './logo.vue'
import { mount } from '@vue/test-utils'

it('runs test correctly', () => {
  const wrapper = mount(logo)
  expect(wrapper).not.toBeNull()
})
