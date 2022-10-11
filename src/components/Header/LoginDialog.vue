<template>
  <form>
    <v-row justify="center" class="mr-2">
      <v-dialog v-model="$store.state.openLogin" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Login </v-btn>
        </template>
        <v-card v-if="!$store.state.isLoading">
          <v-card-title>
            <span class="text-h5">Login</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    ref="email"
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail*"
                    required
                    @keyup.enter="$refs.password.focus()"
                    @blur="message = ''"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    ref="password"
                    label="Password*"
                    type="password"
                    required
                    v-model="password"
                    :error-messages="passwordErrors"
                    @keyup.enter="submit"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-alert dense type="error" v-if="message !== ''">
            {{ message }}
          </v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="$store.commit('changeOpenLogin', false)"
            >
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text @click="submit"> Login </v-btn>
          </v-card-actions>
        </v-card>
        <v-card-text v-if="$store.state.isLoading" class="text-center">
          <v-progress-circular
            indeterminate
            color="red"
            class="mb-0"
          ></v-progress-circular>
        </v-card-text>
      </v-dialog>
    </v-row>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import jwt_decode from "jwt-decode";
import {
  required,
  maxLength,
  email,
  minLength,
} from "vuelidate/lib/validators";
export default {
  name: "login-component",
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, maxLength: maxLength(24), minLength: minLength(5) },
  },
  data() {
    return {
      isSubmit: false,
      email: "",
      password: "",
      message: "",
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength &&
        errors.push("Name must be at max 24 characters long");
      !this.$v.password.minLength &&
        errors.push("Name must be at min 5 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        //submit
        this.isSubmit = true;
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password,
          })
          .then((data) => {
            localStorage.setItem("token", data.data.token);
            this.$store.commit(
              "changeEmail",
              jwt_decode(data.data.token).email
            );
            this.$store.commit("changeRole", jwt_decode(data.data.token).role);
            if (jwt_decode(data.data.token).avatar) {
              this.$store.commit(
                "changeAvatar",
                jwt_decode(data.data.token).avatar
              );
            }
            // if (localStorage.getItem("nextPath"))
            this.$router.push(localStorage.getItem("nextPath"));
          })
          .catch((error) => {
            this.$refs.email.focus();
            this.message = error.response.data.message;
          });
      }
    },
  },
};
</script>
