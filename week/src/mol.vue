<template>
    <div>
        <div style="font-family: 微软雅黑; background-color: transparent; line-height: 1.5em; word-spacing: normal;">
            <img :src="simg" style="width='106px';height='101px'">
            <div style="margin:30px 0;"><span>{{stitle}}</span></div>
            <p>{{stext}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['simg','stitle','stext'],
    data(){
        return{}
    }
}
</script>