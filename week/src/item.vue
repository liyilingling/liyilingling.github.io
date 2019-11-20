<template>
    <div>
        <div style="font-family: 微软雅黑; background-color: transparent; line-height: 1.5em; word-spacing: normal;">
            <div>💗</div>
            <div style="margin:30px 0;font-size: 16px;color:#D3D3D3;"><span>{{stitle}}</span></div>
            <p style="color: rgb(169, 169, 169);">{{stext}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['stitle','stext'],
    data(){
        return{

        }
    }
}
</script>