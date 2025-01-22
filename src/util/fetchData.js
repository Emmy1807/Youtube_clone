const BASE_URL =  'https://youtube-v2.p.rapidapi.com'

const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6d5d13f287mshd7229a7987f29f2p1947edjsn3acc82e27c4c',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    }
export const SearchVideos = async (param) => {
    const res = await fetch(`${BASE_URL}/${param}`, options)

    const result = await res.json();
    return result;
     
}

// lets implement the "trending now" endpoint

export const trendingVideos = async () => {
    const res = await fetch(`${BASE_URL}/trending/?lang=en&country=us&section=Now`, options)
    const result = await res.json();
    console.log(result)
    return result;
    
}

export const getSubtitle = async () => {
    const res = await fetch(`${BASE_URL}/video/subtitle?video_id=${video_id}`, options)
    const result = await res.json();
    return result;
}