export const audioElement = 
  ({link, src, name, location, tags, author}) => {
    return `
      <h3>${name}</h3>
      <div>
        <p>${location}</p>
        <p>${tags.join(', ')}</p>
        <audio src="${src}" controls="controls"></audio>
      </div>
    `
  }
