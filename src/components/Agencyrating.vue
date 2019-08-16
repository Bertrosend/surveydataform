<template>
    <div class="container-fluid">
        <div class="container mt-4">
            <h1 class="display-5 m-3">Routes</h1>
            <table class="table table-bordered mb-4">
                <thead>
                    <tr>
                    <th scope="col"><h4>Routes</h4></th>
                    <th scope="col"> 1/10 </th>
                    <th scope="col"> 2/10 </th>
                    <th scope="col"> 3/10 </th>
                    <th scope="col"> 4/10 </th>
                    <th scope="col"> 5/10 </th>
                    <th scope="col"> 6/10 </th>
                    <th scope="col"> 7/10 </th>
                    <th scope="col"> 8/10 </th>
                    <th scope="col"> 9/10 </th>
                    <th scope="col"> 10/10 </th>
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
                    <td> {{ AM6 }} </td>
                    <td> {{ AM7 }} </td>
                    <td> {{ AM8 }} </td>
                    <td> {{ AM9 }} </td>
                    <td> {{ AM10 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Mogamo</th>
                    <td> {{ MO1 }} </td>
                    <td> {{ MO2 }} </td>
                    <td> {{ MO3 }} </td>
                    <td> {{ MO4 }} </td>
                    <td> {{ MO5 }} </td>
                    <td> {{ MO6 }} </td>
                    <td> {{ MO7 }} </td>
                    <td> {{ MO8 }} </td>
                    <td> {{ MO9 }} </td>
                    <td> {{ MO10 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Guarantee Express</th>
                    <td> {{ GE1 }} </td>
                    <td> {{ GE2 }} </td>
                    <td> {{ GE3 }} </td>
                    <td> {{ GE4 }} </td>
                    <td> {{ GE5 }} </td>
                    <td> {{ GE6 }} </td>
                    <td> {{ GE7 }} </td>
                    <td> {{ GE8 }} </td>
                    <td> {{ GE9 }} </td>
                    <td> {{ GE10 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Vatican express</th>
                    <td> {{ VE1 }} </td>
                    <td> {{ VE2 }} </td>
                    <td> {{ VE3 }} </td>
                    <td> {{ VE4 }} </td>
                    <td> {{ VE5 }} </td>
                    <td> {{ VE6 }} </td>
                    <td> {{ VE7 }} </td>
                    <td> {{ VE8 }} </td>
                    <td> {{ VE9 }} </td>
                    <td> {{ VE10 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Butsis</th>
                    <td> {{ BU1 }} </td>
                    <td> {{ BU2 }} </td>
                    <td> {{ BU3 }} </td>
                    <td> {{ BU4 }} </td>
                    <td> {{ BU5 }} </td>
                    <td> {{ BU6 }} </td>
                    <td> {{ BU7 }} </td>
                    <td> {{ BU8 }} </td>
                    <td> {{ BU9 }} </td>
                    <td> {{ BU10 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Touristic express</th>
                    <td> {{ TE1 }} </td>
                    <td> {{ TE2 }} </td>
                    <td> {{ TE3 }} </td>
                    <td> {{ TE4 }} </td>
                    <td> {{ TE5 }} </td>
                    <td> {{ TE6 }} </td>
                    <td> {{ TE7 }} </td>
                    <td> {{ TE8 }} </td>
                    <td> {{ TE9 }} </td>
                    <td> {{ TE10 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">General</th>
                    <td> {{ GN1 }} </td>
                    <td> {{ GN2 }} </td>
                    <td> {{ GN3 }} </td>
                    <td> {{ GN4 }} </td>
                    <td> {{ GN5 }} </td>
                    <td> {{ GN6 }} </td>
                    <td> {{ GN7 }} </td>
                    <td> {{ GN8 }} </td>
                    <td> {{ GN9 }} </td>
                    <td> {{ GN10 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">United express</th>
                    <td> {{ UE1 }} </td>
                    <td> {{ UE2 }} </td>
                    <td> {{ UE3 }} </td>
                    <td> {{ UE4 }} </td>
                    <td> {{ UE5 }} </td>
                    <td> {{ UE6 }} </td>
                    <td> {{ UE7 }} </td>
                    <td> {{ UE8 }} </td>
                    <td> {{ UE9 }} </td>
                    <td> {{ UE10 }} </td>
                    </tr>
                    <tr>
                    <th scope="row">Grand genout</th>
                    <td> {{ GG1 }} </td>
                    <td> {{ GG2 }} </td>
                    <td> {{ GG3 }} </td>
                    <td> {{ GG4 }} </td>
                    <td> {{ GG5 }} </td>
                    <td> {{ GG6 }} </td>
                    <td> {{ GG7 }} </td>
                    <td> {{ GG8 }} </td>
                    <td> {{ GG9 }} </td>
                    <td> {{ GG10 }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import db from './db'

export default {
    name: 'Agencyrating',
    data() {
        return{
            AM1: 0,
            AM2: 0,
            AM3: 0,
            AM4: 0,
            AM5: 0,
            AM6: 0,
            AM7: 0,
            AM8: 0,
            AM9: 0,
            AM10: 0,
            // mogamo
            MO1: 0,
            MO2: 0,
            MO3: 0,
            MO4: 0,
            MO5: 0,
            MO6: 0,
            MO7: 0,
            MO8: 0,
            MO9: 0,
            MO10: 0,
            // guarantee
            GE1: 0,
            GE2: 0,
            GE3: 0,
            GE4: 0,
            GE5: 0,
            GE6: 0,
            GE7: 0,
            GE8: 0,
            GE9: 0,
            GE10: 0,
            //Vatican
            VE1: 0,
            VE2: 0,
            VE3: 0,
            VE4: 0,
            VE5: 0,
            VE6: 0,
            VE7: 0,
            VE8: 0,
            VE9: 0,
            VE10: 0,
            // butsis
            BU1: 0,
            BU2: 0,
            BU3: 0,
            BU4: 0,
            BU5: 0,
            BU6: 0,
            BU7: 0,
            BU8: 0,
            BU9: 0,
            BU10: 0,
            // touristic
            TE1: 0,
            TE2: 0,
            TE3: 0,
            TE4: 0,
            TE5: 0,
            TE6: 0,
            TE7: 0,
            TE8: 0,
            TE9: 0,
            TE10: 0,
            //Generall
            GN1: 0,
            GN2: 0,
            GN3: 0,
            GN4: 0,
            GN5: 0,
            GN6: 0,
            GN7: 0,
            GN8: 0,
            GN9: 0,
            GN10: 0,
            // united express
            UE1: 0,
            UE2: 0,
            UE3: 0,
            UE4: 0,
            UE5: 0,
            UE6: 0,
            UE7: 0,
            UE8: 0,
            UE9: 0,
            UE10: 0,
            // grand genout
            GG1: 0,
            GG2: 0,
            GG3: 0,
            GG4: 0,
            GG5: 0,
            GG6: 0,
            GG7: 0,
            GG8: 0,
            GG9: 0,
            GG10: 0,
        }
    },
    created(){
        let data = db.collection('surveyData')
        // amour mezam queries
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "1/10").get().then((e) => {e.forEach((doc) => {this.AM1++})})
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "2/10").get().then((e) => {e.forEach((doc) => {this.AM2++})})
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "3/10").get().then((e) => {e.forEach((doc) => {this.AM3++})})
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "4/10").get().then((e) => {e.forEach((doc) => {this.AM4++})})
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "5/10").get().then((e) => {e.forEach((doc) => {this.AM5++})})
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "6/10").get().then((e) => {e.forEach((doc) => {this.AM6++})})
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "7/10").get().then((e) => {e.forEach((doc) => {this.AM7++})})
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "8/10").get().then((e) => {e.forEach((doc) => {this.AM8++})})
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "9/10").get().then((e) => {e.forEach((doc) => {this.AM9++})})
        data.where("agency_choice", "==", "Amour mezam").where("scale", "==", "10/10").get().then((e) => {e.forEach((doc) => {this.AM10++})})

        // Mogamo
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "1/10").get().then((e) => {e.forEach((doc) => {this.MO1++})})
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "2/10").get().then((e) => {e.forEach((doc) => {this.MO2++})})
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "3/10").get().then((e) => {e.forEach((doc) => {this.MO3++})})
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "4/10").get().then((e) => {e.forEach((doc) => {this.MO4++})})
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "5/10").get().then((e) => {e.forEach((doc) => {this.MO5++})})
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "6/10").get().then((e) => {e.forEach((doc) => {this.MO6++})})
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "7/10").get().then((e) => {e.forEach((doc) => {this.MO7++})})
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "8/10").get().then((e) => {e.forEach((doc) => {this.MO8++})})
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "9/10").get().then((e) => {e.forEach((doc) => {this.MO9++})})
        data.where("agency_choice", "==", "Mogamo").where("scale", "==", "10/10").get().then((e) => {e.forEach((doc) => {this.MO10++})})

        // Mogamo
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "1/10").get().then((e) => {e.forEach((doc) => {this.GE1++})})
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "2/10").get().then((e) => {e.forEach((doc) => {this.GE2++})})
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "3/10").get().then((e) => {e.forEach((doc) => {this.GE3++})})
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "4/10").get().then((e) => {e.forEach((doc) => {this.GE4++})})
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "5/10").get().then((e) => {e.forEach((doc) => {this.GE5++})})
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "6/10").get().then((e) => {e.forEach((doc) => {this.GE6++})})
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "7/10").get().then((e) => {e.forEach((doc) => {this.GE7++})})
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "8/10").get().then((e) => {e.forEach((doc) => {this.GE8++})})
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "9/10").get().then((e) => {e.forEach((doc) => {this.GE9++})})
        data.where("agency_choice", "==", "Guarantee").where("scale", "==", "10/10").get().then((e) => {e.forEach((doc) => {this.GE10++})})

        // vatican express
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "1/10").get().then((e) => {e.forEach((doc) => {this.VE1++})})
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "2/10").get().then((e) => {e.forEach((doc) => {this.VE2++})})
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "3/10").get().then((e) => {e.forEach((doc) => {this.VE3++})})
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "4/10").get().then((e) => {e.forEach((doc) => {this.VE4++})})
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "5/10").get().then((e) => {e.forEach((doc) => {this.VE5++})})
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "6/10").get().then((e) => {e.forEach((doc) => {this.VE6++})})
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "7/10").get().then((e) => {e.forEach((doc) => {this.VE7++})})
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "8/10").get().then((e) => {e.forEach((doc) => {this.VE8++})})
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "9/10").get().then((e) => {e.forEach((doc) => {this.VE9++})})
        data.where("agency_choice", "==", "Vatican express").where("scale", "==", "10/10").get().then((e) => {e.forEach((doc) => {this.VE10++})})

        // Butis
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "1/10").get().then((e) => {e.forEach((doc) => {this.BU1++})})
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "2/10").get().then((e) => {e.forEach((doc) => {this.BU2++})})
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "3/10").get().then((e) => {e.forEach((doc) => {this.BU3++})})
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "4/10").get().then((e) => {e.forEach((doc) => {this.BU4++})})
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "5/10").get().then((e) => {e.forEach((doc) => {this.BU5++})})
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "6/10").get().then((e) => {e.forEach((doc) => {this.BU6++})})
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "7/10").get().then((e) => {e.forEach((doc) => {this.BU7++})})
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "8/10").get().then((e) => {e.forEach((doc) => {this.BU8++})})
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "9/10").get().then((e) => {e.forEach((doc) => {this.BU9++})})
        data.where("agency_choice", "==", "Butsis").where("scale", "==", "10/10").get().then((e) => {e.forEach((doc) => {this.BU10++})})

        // Toristic express
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "1/10").get().then((e) => {e.forEach((doc) => {this.TE1++})})
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "2/10").get().then((e) => {e.forEach((doc) => {this.TE2++})})
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "3/10").get().then((e) => {e.forEach((doc) => {this.TE3++})})
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "4/10").get().then((e) => {e.forEach((doc) => {this.TE4++})})
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "5/10").get().then((e) => {e.forEach((doc) => {this.TE5++})})
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "6/10").get().then((e) => {e.forEach((doc) => {this.TE6++})})
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "7/10").get().then((e) => {e.forEach((doc) => {this.TE7++})})
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "8/10").get().then((e) => {e.forEach((doc) => {this.TE8++})})
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "9/10").get().then((e) => {e.forEach((doc) => {this.TE9++})})
        data.where("agency_choice", "==", "Touristic").where("scale", "==", "10/10").get().then((e) => {e.forEach((doc) => {this.TE10++})})

        // General 
        data.where("agency_choice", "==", "Generall").where("scale", "==", "1/10").get().then((e) => {e.forEach((doc) => {this.GN1++})})
        data.where("agency_choice", "==", "Generall").where("scale", "==", "2/10").get().then((e) => {e.forEach((doc) => {this.GN2++})})
        data.where("agency_choice", "==", "Generall").where("scale", "==", "3/10").get().then((e) => {e.forEach((doc) => {this.GN3++})})
        data.where("agency_choice", "==", "Generall").where("scale", "==", "4/10").get().then((e) => {e.forEach((doc) => {this.GN4++})})
        data.where("agency_choice", "==", "Generall").where("scale", "==", "5/10").get().then((e) => {e.forEach((doc) => {this.GN5++})})
        data.where("agency_choice", "==", "Generall").where("scale", "==", "6/10").get().then((e) => {e.forEach((doc) => {this.GN6++})})
        data.where("agency_choice", "==", "Generall").where("scale", "==", "7/10").get().then((e) => {e.forEach((doc) => {this.GN7++})})
        data.where("agency_choice", "==", "Generall").where("scale", "==", "8/10").get().then((e) => {e.forEach((doc) => {this.GN8++})})
        data.where("agency_choice", "==", "Generall").where("scale", "==", "9/10").get().then((e) => {e.forEach((doc) => {this.GN9++})})
        data.where("agency_choice", "==", "Generall").where("scale", "==", "10/10").get().then((e) => {e.forEach((doc) => {this.GN10++})})

        // United express 
        data.where("agency_choice", "==", "United express").where("scale", "==", "1/10").get().then((e) => {e.forEach((doc) => {this.UE1++})})
        data.where("agency_choice", "==", "United express").where("scale", "==", "2/10").get().then((e) => {e.forEach((doc) => {this.UE2++})})
        data.where("agency_choice", "==", "United express").where("scale", "==", "3/10").get().then((e) => {e.forEach((doc) => {this.UE3++})})
        data.where("agency_choice", "==", "United express").where("scale", "==", "4/10").get().then((e) => {e.forEach((doc) => {this.UE4++})})
        data.where("agency_choice", "==", "United express").where("scale", "==", "5/10").get().then((e) => {e.forEach((doc) => {this.UE5++})})
        data.where("agency_choice", "==", "United express").where("scale", "==", "6/10").get().then((e) => {e.forEach((doc) => {this.UE6++})})
        data.where("agency_choice", "==", "United express").where("scale", "==", "7/10").get().then((e) => {e.forEach((doc) => {this.UE7++})})
        data.where("agency_choice", "==", "United express").where("scale", "==", "8/10").get().then((e) => {e.forEach((doc) => {this.UE8++})})
        data.where("agency_choice", "==", "United express").where("scale", "==", "9/10").get().then((e) => {e.forEach((doc) => {this.UE9++})})
        data.where("agency_choice", "==", "United express").where("scale", "==", "10/10").get().then((e) => {e.forEach((doc) => {this.UE10++})})

        // Grand genout 
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "1/10").get().then((e) => {e.forEach((doc) => {this.GG1++})})
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "2/10").get().then((e) => {e.forEach((doc) => {this.GG2++})})
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "3/10").get().then((e) => {e.forEach((doc) => {this.GG3++})})
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "4/10").get().then((e) => {e.forEach((doc) => {this.GG4++})})
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "5/10").get().then((e) => {e.forEach((doc) => {this.GG5++})})
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "6/10").get().then((e) => {e.forEach((doc) => {this.GG6++})})
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "7/10").get().then((e) => {e.forEach((doc) => {this.GG7++})})
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "8/10").get().then((e) => {e.forEach((doc) => {this.GG8++})})
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "9/10").get().then((e) => {e.forEach((doc) => {this.GG9++})})
        data.where("agency_choice", "==", "Grand genout").where("scale", "==", "10/10").get().then((e) => {e.forEach((doc) => {this.GG10++})})

    }
}
</script>

<style scoped>
    ul li {
        list-style-type: none;
    }
</style>
