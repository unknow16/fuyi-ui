import Mock from 'mockjs'

let adapters = [];
adapters.push(
  (mockAdapter) => mockAdapter.onPost('/api/user/loadPage').reply(req => {
    let promise = new Promise((resolve, reject) => {
      
      let data = req.data ? JSON.parse(req.data) : {
        size: 20
      }

      let result = {
        rows: [],
        total: 10000
      }

      for (let i = 0; i < data.size; i++) {
        let item = Mock.mock({
          userId: Mock.Random.guid(),
          username: Mock.Random.cname(),
          sex: Mock.Random.integer(1, 2)
        })
        result.rows.push(item)
      }

      setTimeout(() => {
        resolve([200, result])
      }, 2000)
    })
    return promise
  })
)

export {
  adapters
}