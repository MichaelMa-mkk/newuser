import FruitList from '@/components/Good/FruitList'
import FruitSingle from '@/components/Good/FruitSingle'
import FruitCombo from '@/components/Good/FruitCombo'

export default {
  path: '/good',
  component: FruitList,
  children: [
    {
      path: '',
      name: 'FruitIndex',
      redirect: {
        name: 'FruitSingle'
      }
    },
    {
      path: 'single',
      name: 'FruitSingle',
      component: FruitSingle
    },
    {
      path: 'combo',
      name: 'FruitCombo',
      component: FruitCombo
    }
  ]
}
