export async function makeRequest(url) {
    try {
  
        const answer = await fetch(url)
  
        if (!answer.ok) {
            throw new Error(answer.status.toString())
        }
  
        const responseJson = await answer.json()
  
        return responseJson
    } catch (e) {
        console.warn('Не удалось получить Makes', e)
        return e
    }
  }