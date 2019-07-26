export const model = {
  reducers: {
    replace(state, {payload}) {
      return {
        ...payload
      }
    },
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

