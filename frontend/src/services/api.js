/* API FUNCTIONS */

async postMethod(addedChisme) {
    const headers = new Headers();
    headers.append('Content-Type', 'applicaction/json');

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(addedChisme),
    }

    const request = new Request('http://127.0.0.1:8000/api/', options);
    const response = await fetch(request);
    const status = await response.status; 
}

async getMethod() {
    fetch('http://127.0.0.1:8000/api/')
      .then(response => response.json())
      .then(chismes => this.setState({ chismes , loading: false}))
      .catch(error => this.setState({ error, isLoading: false }));
}