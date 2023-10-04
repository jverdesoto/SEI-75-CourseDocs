<template>
    <div class="mainView">
        <div>
            <router-link
                to="/library"
                custom
                v-slot="{ navigate }"
            >
                <button
                    @click="navigate"
                    role="link"
                >
                    Library home
                </button>
            </router-link>
        </div>
        <div>
            <router-link
                to="/library/author"
                custom
                v-slot="{ navigate }"
            >
                <button
                    @click="navigate"
                    role="link"
                >
                    Search by author
                </button>
            </router-link>
        </div>
        <div>
            <router-link
                to="/library/book"
                custom
                v-slot="{ navigate }"
            >
                <button
                    @click="navigate"
                    role="link"
                >
                    Search by book
                </button>
            </router-link>
        </div>
        <div>
            <router-link
                to="/library/book/new"
                custom
                v-slot="{ navigate }"
            >
                <button
                    @click="navigate"
                    role="link"
                >
                    Add new book
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainNav'
}
</script>
<style>
.mainView {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}
</style>