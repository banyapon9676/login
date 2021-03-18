<template>
  <v-row>
    <v-col class="text-center">
      <blockquote class="blockquote">
       <h2>Welcome</h2> 
        <footer>
          <img  :src="photoUrl" alt="Vuetify.js" class="mb-5 " center />
          <small>
            
          </small>
          <em
              >&mdash;
              {{ name }}
              {{ email }}
            </em>
        </footer>
        
        <b-button variant="outline-danger" class="mb-2" @click="logout">
          <b-icon icon="power" aria-hidden="true"></b-icon> Logout
        </b-button>
        <br />
      </blockquote>
      
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase/app";
import { auth } from "@/plugins/firebaseConfig.js";
export default {
  data() {
    return {
      name: "",
      email: "",
      photoUrl: ""
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        this.name = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoURL;
      } else {
        this.$router.replace("/");
      }
    });
  },
  methods: {
    logout() {
      auth
        .signOut()
        .then(() => {
          console.log("sign-out complete");
          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
