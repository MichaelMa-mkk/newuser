import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const hello = new Vue(HelloWorld).$mount()
    expect(hello.msg).toBe('Pose Estimation')
  })
})
