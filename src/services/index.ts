import api from './api'

// 获取推荐歌单
export function getTopics() {
  return api.get({
    url: '/topics'
  })
}

