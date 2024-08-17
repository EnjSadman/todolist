export enum fetchMethods {
  get = "GET",
  post = "POST",
  put = "PUT",
  delete = "DELETE",
}

export enum fetchType {
  posts = "posts/",
  comments = "comments/",
  albums = "albums/",
  photos = "photos",
  todos = "todos/",
  users = "users/",
}

export type PostPatchRequestBody = {
  id: number,
  title: string,
  body: string,
  userId: number,
  completed: boolean
}

export type PutRequestBody = {
  title?: string,
  userId?: number,
  completed?: boolean
}

export type todosType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export enum ModalState {
  new = "newTodo",
  edit = "editTodo",
  delete = "deleteTodo"
}