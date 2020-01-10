<template>
    <div>

        <Sidebar></Sidebar>
        <Main></Main>
    </div>
</template>

<script>
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";
export default {
    components:{
        Sidebar,
        Main
    }
};
</script>