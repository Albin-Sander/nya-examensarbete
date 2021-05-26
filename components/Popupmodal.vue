<template>
  <div>
    <b-button size="sm" @click="showMsgOk">Popup-box</b-button>
  </div>
</template>

<script>
  export default {
    created() {
    let CLIENT_ID = process.env.clientId
    this.$axios
      .get(
        `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&limit=50&order=popularity_total&lang=en`
      )
      .then((response) => {
        this.data = response.data.results
      })
      .catch((error) => console.log(error))
    },

    methods: {
      showMsgOk() {
        const h = this.$createElement
        // Using HTML string
        const titleVNode = h('div', { domProps: { innerHTML: 'Track info' } })
        // More complex structure
        const messageVNode = h('div', { class: ['foobar'] }, [
          h('p', { class: ['text-center'] }, [
            ' Jamendo ',
            h('strong', 'artist'),
            ' message ',
          ]),
          h('p', { class: ['text-center'] },),
          h('b-img', {
            props: {
              src: 'https://www.pngkit.com/png/detail/114-1148209_light-blue-music-note-doodle-png.png',
              thumbnail: true,
              center: true,
              fluid: true, rounded: 'circle'
            }
          })
        ])
        // We must pass the generated VNodes as arrays
        this.$bvModal.msgBoxOk([messageVNode], {
          title: [titleVNode],
          buttonSize: 'sm',
          centered: true, size: 'sm'
        })
      }
    }
  }
</script>

<style>

</style>