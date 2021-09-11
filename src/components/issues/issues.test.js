import { mount } from '@vue/test-utils'
import issues from './issues'

describe('post issues', () => {
  it('should emit the toggleIssues action', async () => {
    const wrapper = mount(issues)
    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.emitted().toggleIssues.length).toBe(1)
  })

  it('should draw the elements list', async () => {
    const issue = {
      title: 'test-title',
      user: { login: 'test-login' },
      html_url: 'test-url'
    }

    const wrapper = mount(issues, {
      propsData: {
        repoIssues: {
          loading: false,
          data: Array.from({ length: 6 }).map(x => issue)
        }
      }
    })
    expect(wrapper.find('.comments__list').exists()).toBe(false)

    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.findAll('.comments__item').length).toBe(6)
  })
})
