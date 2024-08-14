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
      result = await result.json();
      return result;
    }
    case fetchMethods.put: {
      
    return result;
    }
    case fetchMethods.delete: {
      result = await fetch(`${baseUrl}${parameters.type}${parameters.id}`, {
        method: 'DELETE'
      })
      result = await result.json();
    return result;
    }
    default: {
      if (parameters.id) {
        result = (await fetch(`${baseUrl}${parameters.type}${parameters.id}`)).json()
      } else {
        result = (await fetch(`${baseUrl}${parameters.type}`)).json()
      }
      result = await result;
    return result;
  }
  }
}