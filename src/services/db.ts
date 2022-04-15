export const findAllTrack = () =>  {
    // get all tracks from local storage
    const t = localStorage.getItem('tracks')
    if(!t) return []
    const tracks = JSON.parse(t);
    return tracks.reverse()
}

export const findOneTrack = (id:string) => {
    // get all tracks from local storage
    const t = localStorage.getItem('tracks')
    if(!t) return []
    const tracks = JSON.parse(t);
    return tracks.find((track:any) => track.id === id);
}

export const createTrack = (track:any) => {
    // get all tracks from local storage
    const t = localStorage.getItem('tracks')
    if(!t) {
        localStorage.setItem('tracks', JSON.stringify([track]))
        return track;
    }
    const tracks = JSON.parse(t);
    tracks.push(track);
    localStorage.setItem('tracks', JSON.stringify(tracks));
    return tracks;
}

export const removeTrack = (id:string) => {
    // get all tracks from local storage
    const t = localStorage.getItem('tracks')
    if(!t) return []
    const tracks = JSON.parse(t);
    const newTracks = tracks.filter((track:any) => track.id !== id);
    localStorage.setItem('tracks', JSON.stringify(newTracks));
    return newTracks;
}