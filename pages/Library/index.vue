<template>
  <div class="library">
    <header>
      <ul class="playlists-grid">
        <li
          class="playlist-item"
          v-for="playlist in userPlaylists"
          :key="playlist.name"
        >
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">{{ playlist.name }}</p>
            <p class="mini-text">{{ playlist.author }}</p>
          </footer>
        </li>

        <!-- v-for ends here -->

        <li class="playlist-item">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>

        
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li> 
        
        -->

        <li class="playlist-item">
          <article class="playlist-preview card">
            <button class="add-playlist-btn globalBtnActive">
              <svg
                width="24"
                height="24"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C9.29837 0 9.58452 0.118526 9.79549 0.329505C10.0065 0.540483 10.125 0.826631 10.125 1.125V7.875H16.875C17.1734 7.875 17.4595 7.99353 17.6705 8.20451C17.8815 8.41548 18 8.70163 18 9C18 9.29837 17.8815 9.58452 17.6705 9.79549C17.4595 10.0065 17.1734 10.125 16.875 10.125H10.125V16.875C10.125 17.1734 10.0065 17.4595 9.79549 17.6705C9.58452 17.8815 9.29837 18 9 18C8.70163 18 8.41548 17.8815 8.20451 17.6705C7.99353 17.4595 7.875 17.1734 7.875 16.875V10.125H1.125C0.826631 10.125 0.540483 10.0065 0.329505 9.79549C0.118526 9.58452 0 9.29837 0 9C0 8.70163 0.118526 8.41548 0.329505 8.20451C0.540483 7.99353 0.826631 7.875 1.125 7.875H7.875V1.125C7.875 0.826631 7.99353 0.540483 8.20451 0.329505C8.41548 0.118526 8.70163 0 9 0V0Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="add-playlist-title-container">
              <h5 class="add-playlist-title">Add new</h5>
              <h5 class="add-playlist-title">Playlist</h5>
            </div>
          </article>
          <footer class="playlist-info"></footer>
        </li>
        -->
        <!--<li class="playlist-item">
          <article class="playlist-preview card"></article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>-->
      </ul>
    </header>
    <main>
      <ul class="track-list">
        <li
          class="track-container"
          v-for="track in likedTracks"
          :key="track.id"
        >
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">{{ track.name }}</p>
            <p class="mini-text-author">{{ track.artist_name }}</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
      </ul>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => {
    return {
      user: {},
      likedTracks: [],
      userPlaylists: {},
    }
  },
  methods: {
    ...mapActions({
      getUserLibrary: 'getUserLibrary',
      addNewPlaylist: 'addNewPlaylist',
    }),
    async checkUser() {
      let vm = this
      await this.$fire.auth.onAuthStateChanged(async function (user) {
        let obj
        if (user) {
          console.log(user.email)
          obj = { user: true, email: await user.email }
          console.log(obj)
          vm.user = obj
          await vm.getUserLibrary(obj)
          return vm.getLibrary()
        } else {
          console.log('no user')
          return (window.location.href = '/login')
        }
      })
    },
    async getLibrary() {
      let data = this.$store.state.userLibrary
      this.likedTracks = data.likedTracks
      this.likedPlaylists = data.likedPlaylists
      console.log(data)
    },
    async newPlaylist() {
      let obj = {
        email: this.user.email,
        tracklist: [],
        playlist: 'Newplaylist',
      }
      console.log(obj)
      this.addNewPlaylist(obj)
    },
  },
  computed: {
    //   async library() {
    //       console.log("Library updated")
    //       return this.library = this.$store.state.userLibrary
    //   }
  },
  mounted() {
    this.checkUser()
  },
}
// grid-template-columns: repeat(6, calc(50% - 40px));
</script>

<style scoped>
.library {
  height: 100vh;
}

header {
  background-color: transparent;
  padding: 1rem;
  min-height: 14rem;
}

.playlist-item {
  list-style: none;
  height: 10rem;
  width: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.playlists-grid {
  display: grid;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
  list-style: none;
  grid-auto-flow: column;
  grid-auto-columns: minmax(160px, 1fr);
  overflow-x: auto;
  overflow-y: clip;
  grid-template-rows: repeat(2, auto);
  grid-gap: 0.3rem;
  row-gap: 1.5rem;
  padding-bottom: 2rem;
}

.playlist-preview {
  height: 80%;
  width: 100%;
  list-style: none;
  margin: 0px;
  padding: 0.5rem;
}

.playlist-tracks {
  height: 100%;
  margin: 0px;
  margin-top: auto;
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(1, auto);
}

.add-playlist-btn {
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-playlist-title-container {
  margin-top: auto;
}

.add-playlist-title {
  margin: 0;
  font-weight: 900;
}

.plus {
  margin: 0;
  font-weight: 600;
  font-size: 50px;
}

.playlist-track {
  height: 2rem;
  width: 100%;
  background-color: transparent;
  display: flex;
}

.play {
  height: 100%;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('~@/assets/menu/home-icon2.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.track-info-container {
  display: flex;
  padding-left: 0.2rem;
  flex-direction: column;
}

.track-preview-info {
  margin: 0;
  font-size: 11px;
}

.playlist-info {
  height: 20%;
  width: 97%;
  padding-top: 0.2rem;
  background-color: transparent;
}

.mini-text {
  margin: 0px;
  font-size: 11px;
  color: #00ddff;
}

.track-list {
  width: 95%;
  list-style: none;
  margin: 0;
  padding-left: 0rem;
}

.track-container {
  margin: 0 0 5px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.322);
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
}

.music-icon {
  width: 2.2rem;
  height: 2.2rem;
  background-image: url('~@/assets/library/vinyl-icon.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.track-info {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
}

.mini-text-author {
  color: white;
  margin: 0px;
  font-size: 11px;
}

.track-info-seperator {
  color: white;
  padding-left: 0.5rem;
  margin: 0px;
}

.mini-text-track {
  color: white;
  margin: 0px;
}

main {
  background-color: transparent;
  padding: 1rem;
  padding-top: 0;
  display: flex;
  justify-content: center;
}

footer {
  height: 10%;
  background-color: transparent;
  color: white;
}

@media only screen and (min-width: 500px) {
  .playlists-container {
    grid-template-columns: repeat(3, auto);
  }
}

@media only screen and (max-width: 350px) {
  .playlist-item {
    width: 8rem;
    height: 10rem;
  }

  .playlists-grid {
    column-gap: 0;
    row-gap: 2rem;
  }
}

@media only screen and (min-width: 768px) {
  header {
    display: flex;
    justify-content: center;
  }

  .playlists-grid {
    width: 72%;
  }

  .track-list {
    width: 72%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    overflow-y: auto;
    max-height: 33rem;
    padding-right: 2rem;
    padding-left: 2rem;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1200px) {
  .playlists-grid {
    width: 52%;
  }

  .track-list {
    width: 50%;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
