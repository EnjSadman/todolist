import { PostPutRequestBody, fetchMethods } from "@/lib/types";

const baseUrl = "https://jsonplaceholder.typicode.com/";

type Args = {
  type: string;
  id?: string,
  method: fetchMethods;
  requestBody?: PostPutRequestBody;
}

export default async function dataFetcher(parameters : Args) {
  let result;
  switch (parameters.method) {
    case fetchMethods.post: {
      result = await fetch(`${baseUrl}${parameters.type}`, {
        method: 'POST',
        body: JSON.stringify(parameters.requestBody),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      return result;
    }
    case fetchMethods.put: {
      
    return result;
    }
    case fetchMethods.delete: {
      result = await fetch(`${baseUrl}${parameters.type}${parameters.id}`, {
        method: 'DELETE'
      })
    return result;
    }
    default: {
      if (parameters.id) {
        result = (await fetch(`${baseUrl}${parameters.type}${parameters.id}`))
      } else {
        result = (await fetch(`${baseUrl}${parameters.type}`))
      }
    return result;
  }
  }
}