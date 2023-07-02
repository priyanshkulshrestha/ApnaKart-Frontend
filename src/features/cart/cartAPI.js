// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise( async (resolve) =>{
    const response = await fetch('http://localhost:5001/api/')
    const result = await response.json();
    resolve(result);
  }
  );
}
