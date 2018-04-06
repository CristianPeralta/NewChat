<template lang="html" >
  <center>
    <h1>{{title}}</h1>
    <p>{{description}}</p>
  </center>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Hello World!',
      description: 'This is the home component'
    }
  }
}
</script>

<style type="text/css">

</style>
