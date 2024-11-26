const BASE_URL =  'https://youtube-v2.p.rapidapi.com'

export const SearchVideos = async (param) => {
    const res = await fetch(`${BASE_URL}/${param}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6d5d13f287mshd7229a7987f29f2p1947edjsn3acc82e27c4c',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })

    const result = await res.json();
    return result;
     
}