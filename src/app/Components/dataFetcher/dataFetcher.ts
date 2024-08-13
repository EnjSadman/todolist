import { fetchMethods } from "@/lib/types";

const baseUrl = "https://jsonplaceholder.typicode.com/";

type Args = {
  type: string;
  filter?: string;
  method: fetchMethods;
}

export default async function dataFetcher(parameters : Args) {
  switch (parameters.method) {
    case fetchMethods.post: {
    
    break;
    }
    case fetchMethods.put: {
    
    break;
    }
    case fetchMethods.delete: {
    
    break;
    }
    default: {

    }
  }
}