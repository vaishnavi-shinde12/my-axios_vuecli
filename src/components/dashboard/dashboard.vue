<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address : {{ email }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        email: ''
      }
    },
    created() {
      // axios.get('https://my-axios-vuecli.firebaseio.com/users.json')        // request level configuration
      axios.get('/users.json')            
      .then(res => {
        console.log(res)
        const data = res.data           // the origin data we get back from axis. Its an object where we have this 'data' object
        const users = []                // created an array where we can extract that user data & also added ID to each user in array
        for (let key in data) {
          const user = data[key];
          user.id = key
          users.push(user)
        }
        console.log(users)              
        this.email = users[1].email
      })
      .catch(error => console.log(error))
    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>