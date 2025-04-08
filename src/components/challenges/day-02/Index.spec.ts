
import { mount } from '@vue/test-utils'
import Index from './Index.vue'

test('renderiza corretamente', () => {
  const wrapper = mount(Index)
  expect(wrapper.text()).toContain('Desafio Day 2')
})
