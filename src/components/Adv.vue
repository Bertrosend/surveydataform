<template>
    <div class="container-fluid">
        <div class="container mt-4">
            <div class="row">
            <h1 class="display-5 m-3">Reasons for agency choice</h1>
            <table class="table table-bordered mb-4">
                <thead>
                    <tr>
                    <th scope="col"><h4>Agencies</h4></th>
                    <th scope="col"> Cost </th>
                    <th scope="col"> Destination </th>
                    <th scope="col"> Influence </th>
                    <th scope="col"> Fast $ Secure </th>
                    <th scope="col"> Good buses </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Amour mezam</th>
                    <td> {{ AM1 }} </td>
                    <td> {{ AM2 }} </td>
                    <td> {{ AM3 }} </td>
                    <td> {{ AM4 }} </td>
                    <td> {{ AM5 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Mogamo</th>
                    <td> {{ MO1 }} </td>
                    <td> {{ MO2 }} </td>
                    <td> {{ MO3 }} </td>
                    <td> {{ MO4 }} </td>
                    <td> {{ MO5 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Guarantee Express</th>
                    <td> {{ GE1 }} </td>
                    <td> {{ GE2 }} </td>
                    <td> {{ GE3 }} </td>
                    <td> {{ GE4 }} </td>
                    <td> {{ GE5 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Vatican express</th>
                    <td> {{ VE1 }} </td>
                    <td> {{ VE2 }} </td>
                    <td> {{ VE3 }} </td>
                    <td> {{ VE4 }} </td>
                    <td> {{ VE5 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Butsis</th>
                    <td> {{ BU1 }} </td>
                    <td> {{ BU2 }} </td>
                    <td> {{ BU3 }} </td>
                    <td> {{ BU4 }} </td>
                    <td> {{ BU5 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Touristic express</th>
                    <td> {{ TE1 }} </td>
                    <td> {{ TE2 }} </td>
                    <td> {{ TE3 }} </td>
                    <td> {{ TE4 }} </td>
                    <td> {{ TE5 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">General</th>
                    <td> {{ GN1 }} </td>
                    <td> {{ GN2 }} </td>
                    <td> {{ GN3 }} </td>
                    <td> {{ GN4 }} </td>
                    <td> {{ GN5 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">United express</th>
                    <td> {{ UE1 }} </td>
                    <td> {{ UE2 }} </td>
                    <td> {{ UE3 }} </td>
                    <td> {{ UE4 }} </td>
                    <td> {{ UE5 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Grand genout</th>
                    <td> {{ GG1 }} </td>
                    <td> {{ GG2 }} </td>
                    <td> {{ GG3 }} </td>
                    <td> {{ GG4 }} </td>
                    <td> {{ GG5 }} </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
import db from './db'

export default {
    name: 'Adv',
    data() {
        return{
            AM1: 0,
            AM2: 0,
            AM3: 0,
            AM4: 0,
            AM5: 0,
            // mogamo
            MO1: 0,
            MO2: 0,
            MO3: 0,
            MO4: 0,
            MO5: 0,
            // guarantee
            GE1: 0,
            GE2: 0,
            GE3: 0,
            GE4: 0,
            GE5: 0,
            //Vatican
            VE1: 0,
            VE2: 0,
            VE3: 0,
            VE4: 0,
            VE5: 0,
            // butsis
            BU1: 0,
            BU2: 0,
            BU3: 0,
            BU4: 0,
            BU5: 0,
            // touristic
            TE1: 0,
            TE2: 0,
            TE3: 0,
            TE4: 0,
            TE5: 0,
            //Generall
            GN1: 0,
            GN2: 0,
            GN3: 0,
            GN4: 0,
            GN5: 0,
            // united express
            UE1: 0,
            UE2: 0,
            UE3: 0,
            UE4: 0,
            UE5: 0,
            // grand genout
            GG1: 0,
            GG2: 0,
            GG3: 0,
            GG4: 0,
            GG5: 0,
        }
    },
    created(){
        let data = db.collection('surveyData')
        // amour mezam queries
        data.where("agency_choice", "==", "Amour mezam").where("reasonforagency", "==", "It is cheep").get().then((e) => {e.forEach((doc) => {this.AM1++})})
        data.where("agency_choice", "==", "Amour mezam").where("reasonforagency", "==", "Closer to my destination").get().then((e) => {e.forEach((doc) => {this.AM2++})})
        data.where("agency_choice", "==", "Amour mezam").where("reasonforagency", "==", "People around me like it").get().then((e) => {e.forEach((doc) => {this.AM3++})})
        data.where("agency_choice", "==", "Amour mezam").where("reasonforagency", "==", "It's fast and secure").get().then((e) => {e.forEach((doc) => {this.AM4++})})
        data.where("agency_choice", "==", "Amour mezam").where("reasonforagency", "==", "Cormfortable buses").get().then((e) => {e.forEach((doc) => {this.AM5++})})

        // Mogamo
        data.where("agency_choice", "==", "Mogamo").where("reasonforagency", "==", "It is cheep").get().then((e) => {e.forEach((doc) => {this.MO1++})})
        data.where("agency_choice", "==", "Mogamo").where("reasonforagency", "==", "Closer to my destination").get().then((e) => {e.forEach((doc) => {this.MO2++})})
        data.where("agency_choice", "==", "Mogamo").where("reasonforagency", "==", "People around me like it").get().then((e) => {e.forEach((doc) => {this.MO3++})})
        data.where("agency_choice", "==", "Mogamo").where("reasonforagency", "==", "It's fast and secure").get().then((e) => {e.forEach((doc) => {this.MO4++})})
        data.where("agency_choice", "==", "Mogamo").where("reasonforagency", "==", "Cormfortable buses").get().then((e) => {e.forEach((doc) => {this.MO5++})})

        // Mogamo
        data.where("agency_choice", "==", "Guarantee").where("reasonforagency", "==", "It is cheep").get().then((e) => {e.forEach((doc) => {this.GE1++})})
        data.where("agency_choice", "==", "Guarantee").where("reasonforagency", "==", "Closer to my destination").get().then((e) => {e.forEach((doc) => {this.GE2++})})
        data.where("agency_choice", "==", "Guarantee").where("reasonforagency", "==", "People around me like it").get().then((e) => {e.forEach((doc) => {this.GE3++})})
        data.where("agency_choice", "==", "Guarantee").where("reasonforagency", "==", "It's fast and secure").get().then((e) => {e.forEach((doc) => {this.GE4++})})
        data.where("agency_choice", "==", "Guarantee").where("reasonforagency", "==", "Cormfortable buses").get().then((e) => {e.forEach((doc) => {this.GE5++})})

        // vatican express
        data.where("agency_choice", "==", "Vatican express").where("reasonforagency", "==", "It is cheep").get().then((e) => {e.forEach((doc) => {this.VE1++})})
        data.where("agency_choice", "==", "Vatican express").where("reasonforagency", "==", "Closer to my destination").get().then((e) => {e.forEach((doc) => {this.VE2++})})
        data.where("agency_choice", "==", "Vatican express").where("reasonforagency", "==", "People around me like it").get().then((e) => {e.forEach((doc) => {this.VE3++})})
        data.where("agency_choice", "==", "Vatican express").where("reasonforagency", "==", "It's fast and secure").get().then((e) => {e.forEach((doc) => {this.VE4++})})
        data.where("agency_choice", "==", "Vatican express").where("reasonforagency", "==", "Cormfortable buses").get().then((e) => {e.forEach((doc) => {this.VE5++})})

        // Butis
        data.where("agency_choice", "==", "Butsis").where("reasonforagency", "==", "It is cheep").get().then((e) => {e.forEach((doc) => {this.BU1++})})
        data.where("agency_choice", "==", "Butsis").where("reasonforagency", "==", "Closer to my destination").get().then((e) => {e.forEach((doc) => {this.BU2++})})
        data.where("agency_choice", "==", "Butsis").where("reasonforagency", "==", "People around me like it").get().then((e) => {e.forEach((doc) => {this.BU3++})})
        data.where("agency_choice", "==", "Butsis").where("reasonforagency", "==", "It's fast and secure").get().then((e) => {e.forEach((doc) => {this.BU4++})})
        data.where("agency_choice", "==", "Butsis").where("reasonforagency", "==", "Cormfortable buses").get().then((e) => {e.forEach((doc) => {this.BU5++})})

        // Toristic express
        data.where("agency_choice", "==", "Touristic").where("reasonforagency", "==", "It is cheep").get().then((e) => {e.forEach((doc) => {this.TE1++})})
        data.where("agency_choice", "==", "Touristic").where("reasonforagency", "==", "Closer to my destination").get().then((e) => {e.forEach((doc) => {this.TE2++})})
        data.where("agency_choice", "==", "Touristic").where("reasonforagency", "==", "People around me like it").get().then((e) => {e.forEach((doc) => {this.TE3++})})
        data.where("agency_choice", "==", "Touristic").where("reasonforagency", "==", "It's fast and secure").get().then((e) => {e.forEach((doc) => {this.TE4++})})
        data.where("agency_choice", "==", "Touristic").where("reasonforagency", "==", "Cormfortable buses").get().then((e) => {e.forEach((doc) => {this.TE5++})})

        // General 
        data.where("agency_choice", "==", "Generall").where("reasonforagency", "==", "It is cheep").get().then((e) => {e.forEach((doc) => {this.GN1++})})
        data.where("agency_choice", "==", "Generall").where("reasonforagency", "==", "Closer to my destination").get().then((e) => {e.forEach((doc) => {this.GN2++})})
        data.where("agency_choice", "==", "Generall").where("reasonforagency", "==", "People around me like it").get().then((e) => {e.forEach((doc) => {this.GN3++})})
        data.where("agency_choice", "==", "Generall").where("reasonforagency", "==", "It's fast and secure").get().then((e) => {e.forEach((doc) => {this.GN4++})})
        data.where("agency_choice", "==", "Generall").where("reasonforagency", "==", "Cormfortable buses").get().then((e) => {e.forEach((doc) => {this.GN5++})})

        // United express 
        data.where("agency_choice", "==", "United express").where("reasonforagency", "==", "It is cheep").get().then((e) => {e.forEach((doc) => {this.UE1++})})
        data.where("agency_choice", "==", "United express").where("reasonforagency", "==", "Closer to my destination").get().then((e) => {e.forEach((doc) => {this.UE2++})})
        data.where("agency_choice", "==", "United express").where("reasonforagency", "==", "People around me like it").get().then((e) => {e.forEach((doc) => {this.UE3++})})
        data.where("agency_choice", "==", "United express").where("reasonforagency", "==", "It's fast and secure").get().then((e) => {e.forEach((doc) => {this.UE4++})})
        data.where("agency_choice", "==", "United express").where("reasonforagency", "==", "Cormfortable buses").get().then((e) => {e.forEach((doc) => {this.UE5++})})

        // Grand genout 
        data.where("agency_choice", "==", "Grand genout").where("reasonforagency", "==", "It is cheep").get().then((e) => {e.forEach((doc) => {this.GG1++})})
        data.where("agency_choice", "==", "Grand genout").where("reasonforagency", "==", "Closer to my destination").get().then((e) => {e.forEach((doc) => {this.GG2++})})
        data.where("agency_choice", "==", "Grand genout").where("reasonforagency", "==", "People around me like it").get().then((e) => {e.forEach((doc) => {this.GG3++})})
        data.where("agency_choice", "==", "Grand genout").where("reasonforagency", "==", "It's fast and secure").get().then((e) => {e.forEach((doc) => {this.GG4++})})
        data.where("agency_choice", "==", "Grand genout").where("reasonforagency", "==", "Cormfortable buses").get().then((e) => {e.forEach((doc) => {this.GG5++})})

    }
}
</script>

<style scoped>
    ul li {
        list-style-type: none;
    }
</style>
