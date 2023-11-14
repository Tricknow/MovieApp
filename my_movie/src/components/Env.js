export const apiKey = '155a7320694690b710b020cc874da4f5';
export const Now_playing_url =(now_page)=>{
    return `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-ko&page=${now_page}`
};
export const topRated_playing_url = (page)=>{
    return `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko-ko&page=${page}`;
}
export const popular_url = (page)=>{
    return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-ko&page=${page}`;
}