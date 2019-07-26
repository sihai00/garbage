import modelExtend from 'dva-model-extend'
import { model } from './model'
import { getTopics } from '../services'
import Actions from '../actions/action'

export default modelExtend(model,  {
  namespace: 'index',
  state: {
    test: 1,
    list: []
  },
  effects: {
    *getTopics({ payload }, { select, call, put }) {
      const data = yield call(getTopics)
      yield put(Actions('update', {list: data.data}))
      return data
    }
  }
})
