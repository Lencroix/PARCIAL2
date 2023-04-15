export async function api() {
	try {

			const array = []
			for(let i=1; i<5; i++){
			const chuck = await fetch('https://api.chucknorris.io/jokes/random');
			array.push(chuck)
			}
			console.log(array)
			return array
	}
	catch(error){
		console.log(error)
	}
}




