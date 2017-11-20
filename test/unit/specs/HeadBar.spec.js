import Vue from 'vue'
import HeadBar from '@/components/components/head-bar'

// 挂载元素并返回已渲染的文本的工具函数
function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('head-bar.vue', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(HeadBar, {
      msg: 'Hello'
    })).toBe('Hello')
    expect(getRenderedText(HeadBar, {
      msg: 'Bye'
    })).toBe('Bye')
  })
})
