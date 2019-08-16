<template>
    <div class="container-fluid">
        <div class="container mt-4">
            <div class="row mt-4 mb-4">
                <div class="col-4">
                    <h4 class="display-6">Travel times count</h4>
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Travel times</th>
                        <th scope="col">###</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td> less than 5 </td>
                        <td> {{trt1}} </td>
                        </tr>
                        <tr>
                        <td> 5 - 10 </td>
                        <td> {{trt2}} </td>
                        </tr>
                        <tr>
                        <td> 10 - 20 </td>
                        <td> {{trt3}} </td>
                        </tr>
                        <tr>
                        <td> 20 and above </td>
                        <td> {{trt4}} </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="col-4">
                    <h4 class="display-6">Age range count</h4>
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Age range</th>
                        <th scope="col">###</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td> 15 - 25 </td>
                        <td> {{age1}} </td>
                        </tr>
                        <tr>
                        <td> 25 - 50 </td>
                        <td> {{age2}} </td>
                        </tr>
                        <tr>
                        <td> 50 - 70 </td>
                        <td> {{age3}} </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="col-4">
                    <h4 class="display-6">Gender count</h4>
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Gender</th>
                        <th scope="col">###</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td> Male </td>
                        <td> {{male}} </td>
                        </tr>
                        <tr>
                        <td> Female </td>
                        <td> {{female}} </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

            <div class="row mt-4 mb-4">
                <div class="col-6">
                    <h4 class="display-6">Chosen Routes</h4>
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Routes</th>
                        <th scope="col">###</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>North west - South west</td>
                        <td> {{ route1 }} </td>
                        </tr>
                        <tr>
                        <td>North west - Litoral</td>
                        <td> {{ route2 }} </td>
                        </tr>
                        <tr>
                        <td>Litoral - Central</td>
                        <td> {{ route3 }} </td>
                        </tr>
                        <tr>
                        <td>North west - Central</td>
                        <td> {{ route4 }} </td>
                        </tr>
                        <tr>
                        <td>South west - central</td>
                        <td> {{ route5 }} </td>
                        </tr>
                        <tr>
                        <td>Central - North</td>
                        <td> {{ route6 }} </td>
                        </tr>
                        <tr>
                        <td>North west - West</td>
                        <td> {{ route7 }} </td>
                        </tr>
                        <tr>
                        <td>Litoral west - West</td>
                        <td> {{ route8 }} </td>
                        </tr>
                        <tr>
                        <td scope="row">Central - West</td>
                        <td> {{ route9 }} </td>
                        </tr>
                    </tbody>
                    </table> 
                </div>
                <div class="col-6">
                    <h4 class="display-6">Chosen Agencies</h4>
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Agencies</th>
                        <th scope="col">###</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">Anour mezam</td>
                        <td> {{ agency1 }} </td>
                        </tr>
                        <tr>
                        <td>Mogamo</td>
                        <td> {{ agency2 }} </td>
                        </tr>
                        <tr>
                        <td>Guarantee</td>
                        <td> {{ agency3 }} </td>
                        </tr>
                        <tr>
                        <td>Vatican</td>
                        <td> {{ agency4 }} </td>
                        </tr>
                        <tr>
                        <td>Butsis</td>
                        <td> {{ agency5 }} </td>
                        </tr>
                        <tr>
                        <td>Touristic</td>
                        <td> {{ agency6 }} </td>
                        </tr>
                        <tr>
                        <td>Genrall</td>
                        <td> {{ agency7 }} </td>
                        </tr>
                        <tr>
                        <td>United express</td>
                        <td> {{ agency8 }} </td>
                        </tr>
                        <tr>
                        <td>Grand genout</td>
                        <td> {{ agency9 }} </td>
                        </tr>
                    </tbody>
                    </table> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from './db'

export default {
    name: 'check',
    data() {
        return{
            age1: 0,
            age2: 0,
            age3: 0,
            trt1: 0,
            trt2: 0,
            trt3: 0,
            trt4: 0,
            male: 0,
            female: 0,
            route1: 0,
            route2: 0,
            route3: 0,
            route4: 0,
            route5: 0,
            route6: 0,
            route7: 0,
            route8: 0,
            route9: 0,
            route10: 0,
            agency1: 0,
            agency2: 0,
            agency3: 0,
            agency4: 0,
            agency5: 0,
            agency6: 0,
            agency7: 0,
            agency8: 0,
            agency9: 0,
        }
    },
    created(){
        let data = db.collection('surveyData')
        // query for gender
        data.where("gender", "==", "Female").get().then((e) => {e.forEach((doc) => {this.female++})})
        data.where("gender", "==", "Male").get().then((e) => {e.forEach((doc) => {this.male++})})

        // query for age categories
        data.where("age", "==", "15 - 25").get().then((e) => {e.forEach((doc) => {this.age1++})})
        data.where("age", "==", "25 - 50").get().then((e) => {e.forEach((doc) => {this.age2++})})
        data.where("age", "==", "50 - 70").get().then((e) => {e.forEach((doc) => {this.age3++})})
        // query for travel times
        data.where("travel_times", "==", "less than 5 times").get().then((e) => {e.forEach((doc) => {this.trt1++})})
        data.where("travel_times", "==", "5 - 10").get().then((e) => {e.forEach((doc) => {this.trt2++})})
        data.where("travel_times", "==", "10 - 20").get().then((e) => {e.forEach((doc) => {this.trt3++})})
        data.where("travel_times", "==", "20 & above").get().then((e) => {e.forEach((doc) => {this.trt4++})})
        // query for routes
        data.where("routes", "==", "North west - South west").get().then((e) => {e.forEach((doc) => {this.route1++})})
        data.where("routes", "==", "North west - Litoral").get().then((e) => {e.forEach((doc) => {this.route2++})})
        data.where("routes", "==", "South west - Litoral").get().then((e) => {e.forEach((doc) => {this.route3++})})
        data.where("routes", "==", "Litoral - Central").get().then((e) => {e.forEach((doc) => {this.route4++})})
        data.where("routes", "==", "North west - Central").get().then((e) => {e.forEach((doc) => {this.route5++})})

        data.where("routes", "==", "South west - Central").get().then((e) => {e.forEach((doc) => {this.route6++})})
        data.where("routes", "==", "Central - North").get().then((e) => {e.forEach((doc) => {this.route7++})})
        data.where("routes", "==", "North west - West").get().then((e) => {e.forEach((doc) => {this.route8++})})
        data.where("routes", "==", "Litoral - West").get().then((e) => {e.forEach((doc) => {this.route9++})})
        data.where("routes", "==", "Central - West").get().then((e) => {e.forEach((doc) => {this.route10++})})
        // query for Agencies
        data.where("agency_choice", "==", "Amour mezam").get().then((e) => {e.forEach((doc) => {this.agency1++})})
        data.where("agency_choice", "==", "Mogamo").get().then((e) => {e.forEach((doc) => {this.agency2++})})
        data.where("agency_choice", "==", "Guarantee").get().then((e) => {e.forEach((doc) => {this.agency3++})})
        data.where("agency_choice", "==", "Vatican express").get().then((e) => {e.forEach((doc) => {this.agency4++})})
        data.where("agency_choice", "==", "Butsis").get().then((e) => {e.forEach((doc) => {this.agency5++})})

        data.where("agency_choice", "==", "Touristic").get().then((e) => {e.forEach((doc) => {this.agency6++})})
        data.where("agency_choice", "==", "Generall").get().then((e) => {e.forEach((doc) => {this.agency7++})})
        data.where("agency_choice", "==", "United express").get().then((e) => {e.forEach((doc) => {this.agency8++})})
        data.where("agency_choice", "==", "Grand genout").get().then((e) => {e.forEach((doc) => {this.agency9++})})
        
    }
}
</script>

<style scoped>
    ul li {
        list-style-type: none;
    }
</style>
