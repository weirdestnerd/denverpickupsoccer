const createUser = (email, password) => {
  return fetch('/api/users/register', {
    body: JSON.stringify({email, password}),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }) 
}

export { createUser }