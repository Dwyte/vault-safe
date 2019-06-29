import http from './httpServices';

const endPoint = "/api/todos"

export async function getTodos(){
    return await http.get(endPoint);
}

export async function postTodo(todo){
    return await http.post(endPoint, todo);
}

export async function updateTodo(_id, todo){
    return await http.put(`${endPoint}/${_id}`, todo);
}

export async function deleteTodo(_id){
    return await http.delete(`${endPoint}/${_id}`);
}