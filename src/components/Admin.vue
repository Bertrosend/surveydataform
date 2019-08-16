<template>
    <div class="container-fluid">
        <div class="container mt-4">
            <div class="row mt-4 mb-4">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Travel times</th>
                        <th scope="col">Routes</th>
                        </tr>
                    </thead>
                    <tbody v-for="data in Data" :key="data['.key']">
                        <tr>
                            <td> {{data.age}} </td>
                            <td> {{data.gender}} </td>
                            <td> {{data.travel_times}} </td>
                            <td> {{data.routes}} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row mt-4">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Agency</th>
                        <th scope="col">Reasons</th>
                        <th scope="col">Refunds</th>
                        <th scope="col">Reshedule</th>
                        <th scope="col">Scale</th>
                        </tr>
                    </thead>
                    <tbody v-for="data in Data" :key="data['.key']">
                        <tr>
                            <td> {{data.agency_choice}} </td>
                            <td> {{data.reasonforagency}} </td>
                            <td> {{data.refunds}} </td>
                            <td> {{data.reshedule}} </td>
                            <td> {{data.scale}} </td>
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
    name: 'Admin',
    data() {
        return{
            Data: []
        }
    },
    created(){
        db.collection('surveyData').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {this.Data.push(doc.data())})
        })
    }
}
</script>

<style scoped>
    ul li {
        list-style-type: none;
    }
</style>
