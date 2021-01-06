import Rest from './_rest.service'
import factory from '../fixtures/factory'
// req
const url = 'users/'
const bodyFaker = new factory;

export default class Users extends Rest {
  static get_users() {
    return super.get(url);
  }

  static get_userId(id) {
    return super.get(`${url}${id}`);
  }

  static post_users(body){
    return super.post(url,body);
  }

  static post_users_faker(){
    return super.post(url, bodyFaker.faker());
  }

  static put_users(id, body){
    return super.put(`${url}${id}`, body);
  }

  static put_users_faker(id){
    return super.put(`${url}${id}`, bodyFaker.faker());
  }

  static delete_users(id) {
    return super.delete(`${url}${id}`);
  }
}