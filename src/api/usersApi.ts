import {instance} from "./instanse/instanse";

export const usersApi = {
    getUsers: () => {
        return instance.get('/posts')
    }
}