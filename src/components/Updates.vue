<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Actualizaciones disponibles</v-flex>
        </v-layout>
        <v-layout row wrap class="">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                      <v-parallax src="http://source.unsplash.com/6pcGTJDuf6M">
                        <span class="headline white--text">Algología</span>
                      </v-parallax>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Algología 30-03-2019</h3>
                            <div>Esta actualización con fecha 30-03-2019 cubre los temas de: <br>
                              <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium suscipit mollitia aliquid! Nemo animi tenetur sapiente enim voluptatem consequatur pariatur debitis dolore doloremque optio vero, neque magnam necessitatibus aspernatur temporibus.</li>
                                <li>Porro libero nostrum commodi fugiat sit dolorem dolore minus facilis ullam rem! Quod laboriosam, impedit at optio, unde iste neque nihil! Reiciendis aut voluptatem ducimus totam accusantium in, cumque a.</li>
                                <li>Quasi esse veniam, sequi distinctio ullam ab cumque expedita cum, porro reprehenderit quo laudantium delectus quos id rem, harum ut, qui molestias inventore corporis suscipit adipisci ipsam fuga aliquam possimus.</li>
                                <li>Voluptate reprehenderit ut animi, illo quo voluptates repellat. Ea ratione cupiditate eius quo, eaque ipsa cumque maxime aspernatur atque distinctio vel, recusandae voluptatibus perspiciatis dignissimos totam accusantium harum pariatur. Id?</li>
                                <li>Aut id delectus temporibus, labore, autem quae molestias. Tenetur eum quas error sint blanditiis veritatis. Pariatur officiis, consequuntur. Nemo doloribus mollitia iste consequatur exercitationem natus, odit doloremque minima tenetur aut.</li>
                              </ul>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions >
                        <v-btn outline block color="green" @click="fetchQuestions(20, 30)" data-cy="plansKetoBtn">
                            Evaluar esta actualización</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                      <v-parallax src="http://source.unsplash.com/y5hQCIn1c6o">
                        <span class="headline white--text">Edema agudo no específico</span>
                      </v-parallax>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Edema agudo no específico 16-02-2019</h3>
                            <div>Esta actualización con fecha 24-01-2019 cubre los temas de: <br>
                              <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium suscipit mollitia aliquid! Nemo animi tenetur sapiente enim voluptatem consequatur pariatur debitis dolore doloremque optio vero, neque magnam necessitatibus aspernatur temporibus.</li>
                                <li>Porro libero nostrum commodi fugiat sit dolorem dolore minus facilis ullam rem! Quod laboriosam, impedit at optio, unde iste neque nihil! Reiciendis aut voluptatem ducimus totam accusantium in, cumque a.</li>
                                <li>Quasi esse veniam, sequi distinctio ullam ab cumque expedita cum, porro reprehenderit quo laudantium delectus quos id rem, harum ut, qui molestias inventore corporis suscipit adipisci ipsam fuga aliquam possimus.</li>
                                <li>Voluptate reprehenderit ut animi, illo quo voluptates repellat. Ea ratione cupiditate eius quo, eaque ipsa cumque maxime aspernatur atque distinctio vel, recusandae voluptatibus perspiciatis dignissimos totam accusantium harum pariatur. Id?</li>
                                <li>Aut id delectus temporibus, labore, autem quae molestias. Tenetur eum quas error sint blanditiis veritatis. Pariatur officiis, consequuntur. Nemo doloribus mollitia iste consequatur exercitationem natus, odit doloremque minima tenetur aut.</li>
                              </ul>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions >
                        <v-btn outline block color="green" @click="fetchQuestions(18, 30)" data-cy="plansPaleoBtn">
                            Evaluar esta actualización</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-parallax src="http://source.unsplash.com/eKNswc0Qxz8">
                                        <span class="headline white--text">Anestesiología pediátrica</span>
                        </v-parallax>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Anestesiología pediátrica 24-01-2019</h3>
                            <div>Esta actualización con fecha 24-01-2019 cubre los temas de: <br>
                              <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium suscipit mollitia aliquid! Nemo animi tenetur sapiente enim voluptatem consequatur pariatur debitis dolore doloremque optio vero, neque magnam necessitatibus aspernatur temporibus.</li>
                                <li>Porro libero nostrum commodi fugiat sit dolorem dolore minus facilis ullam rem! Quod laboriosam, impedit at optio, unde iste neque nihil! Reiciendis aut voluptatem ducimus totam accusantium in, cumque a.</li>
                                <li>Quasi esse veniam, sequi distinctio ullam ab cumque expedita cum, porro reprehenderit quo laudantium delectus quos id rem, harum ut, qui molestias inventore corporis suscipit adipisci ipsam fuga aliquam possimus.</li>
                                <li>Voluptate reprehenderit ut animi, illo quo voluptates repellat. Ea ratione cupiditate eius quo, eaque ipsa cumque maxime aspernatur atque distinctio vel, recusandae voluptatibus perspiciatis dignissimos totam accusantium harum pariatur. Id?</li>
                                <li>Aut id delectus temporibus, labore, autem quae molestias. Tenetur eum quas error sint blanditiis veritatis. Pariatur officiis, consequuntur. Nemo doloribus mollitia iste consequatur exercitationem natus, odit doloremque minima tenetur aut.</li>
                              </ul>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn outline block color="green" @click="fetchQuestions(17, 30)" data-cy="plansVeganBtn">
                            Evaluar esta actualización</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Updates',
    methods: {
        fetchQuestions(category, ammount) {
          this.$store.dispatch('getQuestions', category);
        }
    }
};
</script>

<style scoped>
</style>
