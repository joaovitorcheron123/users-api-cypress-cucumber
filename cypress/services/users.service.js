import Rest from './_rest.service'

// req
const url = 'users/'

export default class Users extends Rest {
  static get_users() {
    return super.get(url)
  }

  static get_userId(id) {
    return super.get(`${url}${id}`)
  }

  static post_users(body){
    return super.post(url,body)
  }

  static put_users(id, body){
    return super.put(`${url}${id}`, body)
  }

  static delete_users(id) {
    return super.delete(`${url}${id}`)
  }
}