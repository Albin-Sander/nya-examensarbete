<template>
  <nav class="navbar-mobile switch">
    <ul class="navbar-mobile-list">
      <li class="navbar-mobile-list-item" v-on:click="changePage('home')">
        <NuxtLink to="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            v-bind:class="{
              activePage: page == 'home',
              nonActivePage: page != 'home',
            }"
          >
            <path
              d="M13.8719 6.57772L7.43594 0.146472C7.3896 0.10004 7.33455 0.0632039 7.27396 0.0380704C7.21337 0.012937 7.14841 0 7.08281 0C7.01721 0 6.95226 0.012937 6.89166 0.0380704C6.83107 0.0632039 6.77603 0.10004 6.72969 0.146472L0.29375 6.57772C0.10625 6.76522 0 7.01991 0 7.28553C0 7.8371 0.448437 8.28553 1 8.28553H1.67813V12.8746C1.67813 13.1512 1.90156 13.3746 2.17813 13.3746H6.08281V9.8746H7.83281V13.3746H11.9875C12.2641 13.3746 12.4875 13.1512 12.4875 12.8746V8.28553H13.1656C13.4312 8.28553 13.6859 8.18085 13.8734 7.99178C14.2625 7.60116 14.2625 6.96835 13.8719 6.57772V6.57772Z"
              fill="white"
            />
            />
          </svg>
        </NuxtLink>
      </li>
      <li class="navbar-mobile-list-item" v-on:click="changePage('search')">
        <NuxtLink to="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            v-bind:class="{
              activePageSearch: page == 'search',
              nonActivePageSearch: page != 'search',
            }"
          >
            <path
              d="M9.01772 8.14304L8.74838 8.49124L9.05966 8.80252L13.352 13.0949L13.0937 13.3527L8.8007 9.06134L8.4898 8.75056L8.14177 9.0191C7.31789 9.6548 6.3124 9.99995 5.24998 9.99995C3.97904 9.99995 2.78867 9.50661 1.89211 8.60847L1.8918 8.60816C0.994897 7.71126 0.5 6.51887 0.5 5.24998C0.5 3.97904 0.99334 2.78867 1.89148 1.89211L1.8918 1.8918C2.7887 0.994897 3.98108 0.5 5.24998 0.5C6.51925 0.5 7.71135 0.993403 8.60785 1.89148C9.50529 2.79051 9.99995 3.97968 9.99995 5.24998C9.99995 6.31253 9.65473 7.31951 9.01772 8.14304ZM12.8418 13.604C12.8418 13.6039 12.8419 13.6039 12.8419 13.6039L12.8418 13.604ZM13.8566 13.0951L13.9579 12.9937L13.8566 13.0951L13.8566 13.0951ZM13.8565 13.0952L13.8565 13.0952L13.6045 13.3474C13.6045 13.3473 13.6044 13.3473 13.6044 13.3472L13.8564 13.0952L13.8564 13.0952L13.8565 13.0952L13.8565 13.0952ZM8.3751 8.37594L8.37552 8.37552C9.2096 7.54144 9.66996 6.42899 9.66996 5.24998C9.66996 4.07062 9.20938 2.96026 8.37594 2.12485C7.54132 1.28826 6.42848 0.829994 5.24998 0.829994C4.07062 0.829994 2.96026 1.29058 2.12485 2.12402L2.12444 2.12444C1.29036 2.95851 0.829994 4.07096 0.829994 5.24998C0.829994 6.42933 1.29058 7.53969 2.12402 8.3751L2.12485 8.37594C2.96026 9.20938 4.07062 9.66996 5.24998 9.66996C6.42933 9.66996 7.53969 9.20938 8.3751 8.37594Z"
            />
          </svg>
        </NuxtLink>
      </li>
      <li class="navbar-mobile-list-item" v-on:click="changePage('library')">
        <NuxtLink to="/library">
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            v-bind:class="{
              activePage: page == 'library',
              nonActivePage: page != 'library',
            }"
          >
            <path
              d="M1.35 0C0.603 0 0 0.603 0 1.3482V13.0311C0 13.7763 0.6039 14.3793 1.35 14.3793H2.25C2.9943 14.3793 3.5991 13.7763 3.5991 13.0311V1.3482C3.5991 0.603 2.9943 0 2.2491 0H1.3491H1.35ZM5.8482 0C5.103 0 4.4982 0.603 4.4982 1.3482V13.0311C4.4982 13.7763 5.103 14.3793 5.8482 14.3793H6.7482C7.4934 14.3793 8.0973 13.7763 8.0973 13.0311V1.3482C8.0973 0.6039 7.4934 0 6.7473 0H5.8473H5.8482ZM12.3462 3.7413C12.3051 3.56314 12.2282 3.39519 12.1202 3.24763C12.0122 3.10008 11.8754 2.976 11.718 2.88292C11.5606 2.78983 11.386 2.72969 11.2047 2.70614C11.0234 2.68259 10.8391 2.69611 10.6632 2.7459L9.9927 2.9349C9.66513 3.02751 9.38472 3.24061 9.20776 3.53142C9.03081 3.82223 8.97041 4.16921 9.0387 4.5027L10.8414 13.3218C10.8782 13.5006 10.9509 13.67 11.0551 13.8198C11.1592 13.9697 11.2927 14.0969 11.4474 14.1937C11.6021 14.2906 11.7748 14.355 11.9552 14.3832C12.1355 14.4114 12.3196 14.4027 12.4965 14.3577L13.383 14.1327C14.094 13.9527 14.5296 13.2381 14.3658 12.5244L12.3462 3.7404V3.7413Z"
            />
          </svg>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      page: '',
    }
  },
  methods: {
    changePage(page) {
      console.log(page)
      return (this.page = page)
    },
  },
}
</script>

<style scoped>
.navbar-mobile {
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100vw;
  background-color: #1e1133;
  bottom: 0;
}

@media only screen and (max-width: 770px) {
  .navbar-mobile {
    display: flex;
  }
}

.navbar-mobile-list {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
  width: 60%;
  padding: 0;
  margin: 0;
  list-style: none;
  color: white;
}

.navbar-mobile-list-item {
  border-style: none;
}

.activePage {
  fill: #17a2b8;
}

.activePageSearch {
  fill: #17a2b8;
  stroke: #17a2b8;
}

.nonActivePage {
  fill: white;
}

.nonActivePageSearch {
  fill: white;
  stroke: white;
}

li {
  margin: 0;
}

li:hover {
  pointer-events: stroke;
  text-decoration: none;
  background-color: transparent;
}
</style>
