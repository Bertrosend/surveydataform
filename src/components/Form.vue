<template>
    <div class="container-fluid">
        <div class="container mb-4">
            <div class="display">
            <div class="d-flex justify-content-center">
                <a class="pl-4 nav-link" href="https://praiz.io/" target="_blank"><img alt="Vue logo" src="../assets/logo.png"></a>
            </div>
            <p class="font-weight-normal text-center">Praiz systems is on a mission to collect data on the trasport industy in Cameroon, which is to be used for transport development purposes. We assure you that your data is highly confidencial and won't be shared with any third party options. Thanks!</p> 
            <form @submit.prevent="addData" class="mt-4">
                <div class="form-group">
                    <label>What's your age range</label>
                    <select v-model="age" class="form-control" required>
                    <option>15 - 25 </option>
                    <option>25 - 50 </option>
                    <option>50 - 70 </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>What's your Gender</label>
                    <select v-model="gender" class="form-control" required>
                    <option> Male</option>
                    <option> Female</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>How many times do you travel in a year?</label>
                    <select v-model="travel_times" class="form-control" required>
                    <option> less than 5 times </option>
                    <option> 5 - 10 </option>
                    <option> 10 - 20 </option>
                    <option> 20 & above </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>What's your favourite destination?</label>
                    <select v-model="routes" class="form-control" required>
                    <option> North west - South west </option>
                    <option> North west - Litoral </option>
                    <option> South west - Litoral </option>
                    <option> Litoral - Central </option>
                    <option> North west - Central </option>
                    <option> South west - Central </option>
                    <option> Central - North </option>
                    <option> North west - West </option>
                    <option> Litoral - West </option>
                    <option> Central - West </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>What's your favourite transport agency?</label>
                    <select v-model="agency_choice" class="form-control" required>
                    <option> Amour mezam </option>
                    <option> Mogamo </option>
                    <option> Guarantee </option>
                    <option> Vatican express </option>
                    <option> Butsis </option>
                    <option> Touristic </option>
                    <option> General </option>
                    <option> United express </option>
                    <option> Grand genut </option>
                    </select>
                </div>
                <div class="form-group">
                    <h3>Why did you chose the above transport agency?</h3>
                    <label>Why did you choose the above transport agency?</label>
                    <select v-model="reasonforagency" class="form-control" required>
                    <option> It is cheep </option>
                    <option> Closer to my destination </option>
                    <option> People around me like it </option>
                    <option> It's fast and secure </option>
                    <option> Cormfortable buses </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Does your choosen agency give refunds in case you chosse not to travel any more?</label>
                    <select v-model="refunds" class="form-control" required>
                    <option> Yes they do </option>
                    <option> No. you resell the ticket </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Is it possible to reshedule journey with your choosen agency after booking ticket?</label>
                    <select v-model="reshedule" class="form-control" required>
                    <option>YES</option>
                    <option>NO</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>On a scale of 1 t0 10, how will rate your choosen agency?</label>
                    <select v-model="scale" class="form-control" required>
                    <option> 1/10 </option>
                    <option> 2/10 </option>
                    <option> 3/10 </option>
                    <option> 4/10 </option>
                    <option> 5/10 </option>
                    <option> 6/10 </option>
                    <option> 7/10 </option>
                    <option> 8/10 </option>
                    <option> 9/10 </option>
                    <option> 10/10 </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>What kind of inovations will u like your transport agency to bring in</label>
                    <br>
                    <textarea v-model="inovation" style="width: 100%;" placeholder="inovations"></textarea>
                </div>
                <div class="d-flex justify-content-end mt-4">
                    <button type="submit" class="btn btn-lg btn-success">Submit</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import db from './db'

export default {
  name: 'Form',
  data() {
      return {
          age: null,
          gender: null,
          region: null,
          travel_times: null,
          routes: null,
          agency_choice: null,
          reasonforagency: null,
          refunds: null,
          reshedule: null,
          scale: null,
          inovation: null
      }
  },
  methods: {
      addData() {
          db.collection('surveyData').add({
              age: this.age,
              gender: this.gender,
              region: this.region,
              travel_times: this.travel_times,
              routes: this.routes,
              agency_choice: this.agency_choice,
              reasonforagency: this.reasonforagency,
              refunds: this.refunds,
              reshedule: this.reshedule,
              scale: this.scale,
              inovation: this.inovation
          })
          .catch(err => console.log(err))
          this.$router.push('/home')
      }
  }
 
}
</script>

sty