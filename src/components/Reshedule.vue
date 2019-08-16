<template>
    <div class="container-fluid">
        <div class="container mt-4">
            <h1 class="display-5 m-3">Reshedule Journey</h1>
            <table class="table table-bordered mb-4">
                <thead>
                    <tr>
                    <th scope="col"><h4>Agencies</h4></th>
                    <th scope="col"> YES </th>
                    <th scope="col"> NO </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Amour mezam</th>
                    <td> {{ AM1 }} </td>
                    <td> {{ AM2 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Mogamo</th>
                    <td> {{ MO1 }} </td>
                    <td> {{ MO2 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Guarantee Express</th>
                    <td> {{ GE1 }} </td>
                    <td> {{ GE2 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Vatican express</th>
                    <td> {{ VE1 }} </td>
                    <td> {{ VE2 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Butsis</th>
                    <td> {{ BU1 }} </td>
                    <td> {{ BU2 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Touristic express</th>
                    <td> {{ TE1 }} </td>
                    <td> {{ TE2 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">General</th>
                    <td> {{ GN1 }} </td>
                    <td> {{ GN2 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">United express</th>
                    <td> {{ UE1 }} </td>
                    <td> {{ UE2 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Grand genout</th>
                    <td> {{ GG1 }} </td>
                    <td> {{ GG2 }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import db from './db'

export default {
    name: 'Reshedule',
    data() {
        return{
            AM1: 0,
            AM2: 0,
            // mogamo
            MO1: 0,
            MO2: 0,
            // guarantee
            GE1: 0,
            GE2: 0,
            //Vatican
            VE1: 0,
            VE2: 0,
            // butsis
            BU1: 0,
            BU2: 0,
            // touristic
            TE1: 0,
            TE2: 0,
            //Generall
            GN1: 0,
            GN2: 0,
            // united express
            UE1: 0,
            UE2: 0,
            // grand genout
            GG1: 0,
            GG2: 0,
        }
    },
    created(){
        let data = db.collection('surveyData')
        // amour mezam queries
        data.where("agency_choice", "==", "Amour mezam").where("reshedule", "==", "YES").get().then((e) => {e.forEach((doc) => {this.AM1++})})
        data.where("agency_choice", "==", "Amour mezam").where("reshedule", "==", "NO").get().then((e) => {e.forEach((doc) => {this.AM2++})})

        // Mogamo
        data.where("agency_choice", "==", "Mogamo").where("reshedule", "==", "YES").get().then((e) => {e.forEach((doc) => {this.MO1++})})
        data.where("agency_choice", "==", "Mogamo").where("reshedule", "==", "NO").get().then((e) => {e.forEach((doc) => {this.MO2++})})

        // Mogamo
        data.where("agency_choice", "==", "Guarantee").where("reshedule", "==", "YES").get().then((e) => {e.forEach((doc) => {this.GE1++})})
        data.where("agency_choice", "==", "Guarantee").where("reshedule", "==", "NO").get().then((e) => {e.forEach((doc) => {this.GE2++})})

        // vatican express
        data.where("agency_choice", "==", "Vatican express").where("reshedule", "==", "YES").get().then((e) => {e.forEach((doc) => {this.VE1++})})
        data.where("agency_choice", "==", "Vatican express").where("reshedule", "==", "NO").get().then((e) => {e.forEach((doc) => {this.VE2++})})

        // Butis
        data.where("agency_choice", "==", "Butsis").where("reshedule", "==", "YES").get().then((e) => {e.forEach((doc) => {this.BU1++})})
        data.where("agency_choice", "==", "Butsis").where("reshedule", "==", "NO").get().then((e) => {e.forEach((doc) => {this.BU2++})})

        // Toristic express
        data.where("agency_choice", "==", "Touristic").where("reshedule", "==", "YES").get().then((e) => {e.forEach((doc) => {this.TE1++})})
        data.where("agency_choice", "==", "Touristic").where("reshedule", "==", "NO").get().then((e) => {e.forEach((doc) => {this.TE2++})})

        // General 
        data.where("agency_choice", "==", "Generall").where("reshedule", "==", "YES").get().then((e) => {e.forEach((doc) => {this.GN1++})})
        data.where("agency_choice", "==", "Generall").where("reshedule", "==", "NO").get().then((e) => {e.forEach((doc) => {this.GN2++})})

        // United express 
        data.where("agency_choice", "==", "United express").where("reshedule", "==", "YES").get().then((e) => {e.forEach((doc) => {this.UE1++})})
        data.where("agency_choice", "==", "United express").where("reshedule", "==", "NO").get().then((e) => {e.forEach((doc) => {this.UE2++})})

        // Grand genout 
        data.where("agency_choice", "==", "Grand genout").where("reshedule", "==", "YES").get().then((e) => {e.forEach((doc) => {this.GG1++})})
        data.where("agency_choice", "==", "Grand genout").where("reshedule", "==", "NO").get().then((e) => {e.forEach((doc) => {this.GG2++})})

    }
}
</script>

<style scoped>
   
</style>
