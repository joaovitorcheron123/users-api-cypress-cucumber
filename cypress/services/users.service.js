import Rest from './_rest.service'
import factory from '../fixtures/factory'
// req
const url = 'users/'
const bodyFaker = function fakerData(){
  return new factory.faker();
}

export default class Users extends Rest {
  static get_users() {
    return super.get(url);
  }

  static get_userId(id) {
    return super.get(`${url}${id}`);
  }

  static post_users(){
    return super.post(url, bodyFaker);
  }

  static put_users(id){
    return super.put(`${url}${id}`, bodyFaker);
  }

  static delete_users(id) {
    return super.delete(`${url}${id}`);
  }
}