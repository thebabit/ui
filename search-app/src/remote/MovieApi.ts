export async function getMovie():Promise<string>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=45c8ca64&t=batman`);
    const body = await response.json()
    console.log(body)
    return body.Title
}

export async function http<T>(
    request: RequestInfo
  ): Promise<T> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
  }
  
  
