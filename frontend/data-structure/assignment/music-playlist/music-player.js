const Song = require("./song");
const Playlist = require("./playlist");

module.exports = class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
  }

  addSong(song) {
    // TODO: answer here
    this.playlist.songs.push(song);
    // masukkan nilai song ke dalam playlist songs
  }

  play() {
    // TODO: answer here
    if (this.playlist.songs.length === 0) {
      return "";
    }
    let output = this.playlist.songs.shift();
    if (this.playlist.isRepeatable) {
      this.playlist.songs.push(output);
    }
    return `Now Playing ${output.singer} - ${output.title}`;
  }
};
