<template>
    <div>
        <p>User: {{user.name}}</p>
        <p>Username: {{user.username}}</p>
        <p>E-mail: {{user.email}}</p>
        <p>Address: {{user.address|toAddress}}</p>
        <p>Phone: {{user.phone}}</p>
        <p>Company {{user.company.name}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                default: ()=>{}
            }
        },
        filters: {
            toAddress: function (address) {
                return address.street + ' - ' + address.suite + ', ' + address.city
            }
        }
    }
</script>

<style scoped>

</style>