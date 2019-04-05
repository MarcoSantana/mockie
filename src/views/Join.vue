<template lang="html">
    <v-container fluid fill-height>
        <v-layout
         align-center
         justify-center>
         <v-card>
           <v-img
             class="hidden-sm-and-down"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Elsevier.svg/1200px-Elsevier.svg.png"
             height="auto"
             width="auto"
             >
           </v-img>
           <v-card-title primary-title>
             <div>
               <h3 class="headline mb-0">Regístrese para obtener puntos de recertificación</h3>
             </div>
           </v-card-title>
           <v-card-text>
             <v-form>
               <v-container fluid>
                 <v-layout row wrap>
                   <v-flex md6 xs12>
                     <v-text-field
                     name="name"
                     label="Nombre"
                     id="joinName"
                     v-model="name"
                     :rules="[rules.required]"
                     outline
                     color="#EE640B"
                     ></v-text-field>
                   </v-flex>
                   <v-flex md6 xs12>
                     <v-text-field
                     name="lastName"
                     label="Apellidos"
                     id="joinLastName"
                     v-model="lastName"
                     :rules="[rules.required]"
                     clearable
                     outline
                     color="#EE640B"
                     ></v-text-field>
                   </v-flex>
                 </v-layout>
                 <v-layout row wrap>
                   <v-flex xs12>
                    <v-text-field
                      label="Correo electrónico"
                      id="joinEmail"
                      v-model="email"
                      :rules="[rules.required, rules.validEmail]"
                      outline
                      color="#EE640B"
                    ></v-text-field>
                   </v-flex>
                   <v-flex xs12>
                    <v-text-field
                      label="Número de contrato ELSEVIER"
                      id="joinContractNumber"
                      v-model="contractNumber"
                      :rules="[rules.required]"
                      outline
                      color="#EE640B"
                    ></v-text-field>
                    <v-text-field
                      label="Contraseña"
                      id="joinPasswordA"
                      v-model="passwordA"
                      :rules="[rules.required]"
                      validate-on-blur
                      outline
                      color="#EE640B"
                    ></v-text-field>
                    <v-text-field
                      label="Confirmar contraseña"
                      id="joinPasswordB"
                      v-model="passwordB"
                      :rules="[rules.required, rules.matches]"
                      outline
                      color="#EE640B"
                    ></v-text-field>
                   </v-flex>
                 </v-layout>
               </v-container>
             </v-form>
           </v-card-text>
           <v-card-actions>
             <v-btn
             flat
             outline
             color="error"
             @click="reset">Borrar formulario</v-btn>
             <v-btn
                dark
              color="#EE640B">Crear cuenta</v-btn>
           </v-card-actions>
         </v-card>
       </v-layout>
    </v-container>
</template>
<script lang="ts">
export default {
  data () {
    return {
      show1: false,
      name:'',
      lastName:'',
      email:'',
      contractNumber:'',
      passwordA: '',
      passwordB: '',
      rules: {
        required: value => !!value || 'Este campo no puede estar vacío',
        min: v => v.length >= 8 || 'Min 8 caracteres',
        validEmail: (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Debe ser un correo electrónico válido',
        matches: (v) => v == this.passwordA ||'Las contraseñas no coinciden'
      },
        ],
    }
  },
  computed: {

  }
  methods: {
    reset () {
        this.$refs.form.reset()
      },
      submit() {
        this.$store.dispatch('userJoin', {
          email: this.email,
          password: this.passwordB
        })
      }
  }
}
</script>
<style scoped>
</style>
