<template lang="html">
  <v-content>
      <v-layout align-center="align-center" justify-center="justify-center">
          <v-card>
            <v-img class="hidden-sm-and-down" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Elsevier.svg/1200px-Elsevier.svg.png" height="auto">
            </v-img>
            <v-card-title primary-title color="pink">
              <div>
                <h3 class="headline">Ingreso de suscriptores</h3>
                <div>Utilice sus datos de suscriptción</div>
              </div>
            </v-card-title>
            <v-card-text>
              <v-form ref="form">
                <v-container fluid>
                  <v-flex>
                    <v-text-field
                    :rules="[rules.required]"
                    label="Nombre de suscriptor"
                    placeholder="Su nombre de usuario"
                    outline
                    color="#EE640B"
                    ></v-text-field>
                    <!-- Password field -->
                    <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :type="show1 ? 'text' : 'password'"
                    :rules="[rules.required, rules.min]"
                    label="Contraseña"
                    name="input-10-1"
                    counter
                    @click:append="show1 = !show1"
                    hint="Sus datos de acceso a las publicaciones"
                    placeholder="Su nombre de usuario"
                    outline
                    color="#EE640B"
                    ></v-text-field>
                    <!-- /Password field -->
                  </v-flex>
                  </v-container>
              </v-flex>
            </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                flat
                outline
                color="error"
                @click="reset">Borrar formulario</v-btn>
              <v-btn outline color="#EE640B">Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-layout>
    </v-content>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      password: 'PalabraSecreta',
      rules: {
        required: value => !!value || 'Este campo no puede estar vacío',
        min: v => v.length >= 8 || 'Min 8 caracteres',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  },
  methods: {
    reset () {
        this.$refs.form.reset()
      }
  }
}
</script>

<style lang="css" scoped>
</style>
